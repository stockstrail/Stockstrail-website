"use client";

import { useState, useEffect } from "react";
import { Copy, XCircle, Eye, EyeOff, Plus, Trash2, ArrowUp, ArrowDown } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createClient } from "@/lib/supabase/client";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Blog } from "./AdminBlogsContent";

interface BlogEditorModalProps {
  blog: Blog | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: () => void;
}



export function BlogEditorModal({ blog, open, onOpenChange, onSave }: BlogEditorModalProps) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    image_url: "",
    image_alt: "",
    meta_title: "",
    meta_description: "",
    meta_keywords: "",
    content_images: [] as string[],
    content: "",
    published: false,
  });
  const [showPreview, setShowPreview] = useState(false);
  const [faqs, setFaqs] = useState<{
    question: string;
    answer: string;
    is_published: boolean;
  }[]>([]);

  const handleAddFaq = () => {
    setFaqs(prev => [
      ...prev,
      {
        question: "",
        answer: "",
        is_published: true,
      }
    ]);
  };

  const handleUpdateFaq = (index: number, updates: Partial<{ question: string; answer: string; is_published: boolean }>) => {
    setFaqs(prev => prev.map((faq, idx) => idx === index ? { ...faq, ...updates } : faq));
  };

  const handleDeleteFaq = (index: number) => {
    setFaqs(prev => prev.filter((_, idx) => idx !== index));
  };

  const handleMoveFaq = (index: number, direction: 'up' | 'down') => {
    if (direction === 'up' && index === 0) return;
    if (direction === 'down' && index === faqs.length - 1) return;

    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    setFaqs(prev => {
      const newList = [...prev];
      const temp = newList[index];
      newList[index] = newList[targetIndex];
      newList[targetIndex] = temp;
      return newList;
    });
  };
  


  useEffect(() => {
    if (open) {
      if (blog) {
        setFormData({
          title: blog.title || "",
          slug: blog.slug || "",
          excerpt: blog.excerpt || "",
          image_url: blog.image_url || "",
          image_alt: blog.image_alt || "",
          meta_title: blog.meta_title || "",
          meta_description: blog.meta_description || "",
          meta_keywords: blog.meta_keywords || "",
          content_images: blog.content_images || [],
          content: blog.content || "",
          published: blog.published || false,
        });
        setFaqs((blog.faqs as any[]) || []);
      } else {
        setFormData({
          title: "",
          slug: "",
          excerpt: "",
          image_url: "",
          image_alt: "",
          meta_title: "",
          meta_description: "",
          meta_keywords: "",
          content_images: [],
          content: "",
          published: false,
        });
        setFaqs([]);
      }
    }
  }, [open, blog]);

  const generateSlug = (title: string) => {
    return title.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setFormData(prev => ({
      ...prev,
      title: newTitle,
      slug: !blog ? generateSlug(newTitle) : prev.slug // auto-generate slug only if creating new
    }));
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check size (1 MB limit)
    if (file.size > 1048576) {
      alert("Image exceeds the 1 MB limit. Please upload a smaller image.");
      return;
    }

    try {
      setLoading(true);
      const supabase = createClient();
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError, data } = await supabase.storage
        .from('blog-images')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('blog-images')
        .getPublicUrl(filePath);

      setFormData(prev => ({ ...prev, image_url: publicUrl }));
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Error uploading image!');
    } finally {
      setLoading(false);
    }
  };

  const handleAdditionalImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (formData.content_images.length >= 4) {
      alert("You can only upload a maximum of 4 additional images.");
      return;
    }

    if (file.size > 1048576) {
      alert("Image exceeds the 1 MB limit. Please upload a smaller image.");
      return;
    }

    try {
      setLoading(true);
      const supabase = createClient();
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `additional/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('blog-images')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('blog-images')
        .getPublicUrl(filePath);

      setFormData(prev => ({ 
        ...prev, 
        content_images: [...prev.content_images, publicUrl] 
      }));
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Error uploading additional image!');
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (url: string) => {
    navigator.clipboard.writeText(url).catch(err => {
      console.error("Could not copy text: ", err);
    });
  };

  const removeAdditionalImage = (indexToRemove: number) => {
    setFormData(prev => ({
      ...prev,
      content_images: prev.content_images.filter((_, index) => index !== indexToRemove)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate FAQs
    for (let i = 0; i < faqs.length; i++) {
      if (!faqs[i].question.trim() || !faqs[i].answer.trim()) {
        alert("FAQ question and answer cannot be empty. Please fill them out or remove the FAQ.");
        return;
      }
    }

    setLoading(true);
    try {
      const supabase = createClient();
      const content = formData.content;

      const payload = {
        title: formData.title,
        slug: formData.slug || generateSlug(formData.title),
        excerpt: formData.excerpt,
        content: content,
        image_url: formData.image_url,
        image_alt: formData.image_alt,
        content_images: formData.content_images,
        meta_title: formData.meta_title,
        meta_description: formData.meta_description,
        meta_keywords: formData.meta_keywords,
        published: formData.published,
        faqs: faqs.map(faq => ({
          question: faq.question.trim(),
          answer: faq.answer.trim(),
          is_published: faq.is_published,
        })),
      };

      if (blog) {
        // Update
        const { error } = await supabase.from("blogs").update(payload).eq("id", blog.id);
        if (error) throw error;
      } else {
        // Create
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) throw new Error("Not authenticated");
        
        const { error } = await supabase.from("blogs").insert([{ ...payload, author_id: user.id }]);
        if (error) throw error;
      }

      onSave();
    } catch (err: any) {
      console.error("Error saving blog:", err);
      alert(`Error saving blog: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-stockstrail-bg border-white/10 text-white p-6 sm:p-8">
        <DialogHeader>
          <DialogTitle className="text-2xl font-product-sans">
            {blog ? "Edit Blog Post" : "Create Blog Post"}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="title" className="text-white/70">Title</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={handleTitleChange}
                  className="bg-white/5 border-white/10 text-white mt-1"
                  required
                />
              </div>

              <div>
                <Label htmlFor="slug" className="text-white/70">Slug (URL)</Label>
                <Input
                  id="slug"
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  className="bg-white/5 border-white/10 text-white mt-1"
                  required
                />
              </div>

              <div>
                <Label htmlFor="excerpt" className="text-white/70">Excerpt</Label>
                <Input
                  id="excerpt"
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  className="bg-white/5 border-white/10 text-white mt-1"
                />
              </div>

              <div>
                <Label htmlFor="image" className="text-white/70">Cover Image (Max 1MB)</Label>
                <div className="flex items-center gap-4 mt-1">
                  {formData.image_url && (
                    <img src={formData.image_url} alt="Cover" className="w-16 h-16 object-cover rounded border border-white/20" />
                  )}
                  <Input
                    id="image"
                    type="file"
                    accept="image/jpeg, image/png, image/webp"
                    onChange={handleImageUpload}
                    className="bg-white/5 border-white/10 text-white"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="image_alt" className="text-white/70">Image Alt Text (Optional)</Label>
                <Input
                  id="image_alt"
                  value={formData.image_alt}
                  onChange={(e) => setFormData({ ...formData, image_alt: e.target.value })}
                  placeholder="Describe the image for accessibility and SEO"
                  className="bg-white/5 border-white/10 text-white mt-1"
                />
              </div>

              <div>
                <Label htmlFor="additional_images" className="text-white/70">Additional Images for Content (Up to 4, Max 1MB)</Label>
                <div className="mt-2 space-y-3">
                  {formData.content_images.length < 4 && (
                    <Input
                      id="additional_images"
                      type="file"
                      accept="image/jpeg, image/png, image/webp"
                      onChange={handleAdditionalImageUpload}
                      className="bg-white/5 border-white/10 text-white"
                      disabled={loading}
                    />
                  )}
                  {formData.content_images.length > 0 && (
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      {formData.content_images.map((url, idx) => (
                        <div key={idx} className="relative group w-full h-24 rounded border border-white/20 overflow-hidden bg-black/40">
                          <img src={url} alt={`Additional ${idx + 1}`} className="w-full h-full object-cover opacity-70 group-hover:opacity-40 transition-opacity" />
                          <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Button 
                              type="button" 
                              size="sm" 
                              variant="secondary" 
                              onClick={() => copyToClipboard(url)}
                              className="h-8 px-2 bg-emerald-500 hover:bg-emerald-400 text-white"
                              title="Copy Image URL"
                            >
                              <Copy className="w-4 h-4 mr-1" /> Copy URL
                            </Button>
                            <button 
                              type="button"
                              onClick={() => removeAdditionalImage(idx)}
                              className="text-red-400 hover:text-red-300 bg-black/50 rounded-full p-1"
                              title="Remove Image"
                            >
                              <XCircle className="w-5 h-5" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="meta_title" className="text-white/70">SEO Meta Title</Label>
                <Input
                  id="meta_title"
                  value={formData.meta_title}
                  onChange={(e) => setFormData({ ...formData, meta_title: e.target.value })}
                  className="bg-white/5 border-white/10 text-white mt-1"
                />
              </div>

              <div>
                <Label htmlFor="meta_description" className="text-white/70">SEO Meta Description</Label>
                <Input
                  id="meta_description"
                  value={formData.meta_description}
                  onChange={(e) => setFormData({ ...formData, meta_description: e.target.value })}
                  className="bg-white/5 border-white/10 text-white mt-1"
                />
              </div>

              <div>
                <Label htmlFor="meta_keywords" className="text-white/70">SEO Keywords (comma separated)</Label>
                <Input
                  id="meta_keywords"
                  value={formData.meta_keywords}
                  onChange={(e) => setFormData({ ...formData, meta_keywords: e.target.value })}
                  className="bg-white/5 border-white/10 text-white mt-1"
                />
              </div>

              <div className="flex items-center space-x-3 pt-6">
                <input
                  type="checkbox"
                  id="published"
                  checked={formData.published}
                  onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                  className="w-5 h-5 rounded border-white/20 bg-black/40 text-stockstrail-green-light focus:ring-stockstrail-green-light focus:ring-offset-[#0a1210] cursor-pointer"
                />
                <Label htmlFor="published" className="text-white/90 font-medium cursor-pointer text-base">Publish post immediately</Label>
              </div>
            </div>
          </div>

          <div className="space-y-2 pt-4">
            <div className="flex items-center justify-between">
              <Label className="text-white/70">Content (Markdown)</Label>
              <Button 
                type="button" 
                variant="ghost" 
                size="sm" 
                onClick={() => setShowPreview(!showPreview)}
                className="text-white/70 hover:text-white"
              >
                {showPreview ? <><EyeOff className="w-4 h-4 mr-2" /> Edit</> : <><Eye className="w-4 h-4 mr-2" /> Preview</>}
              </Button>
            </div>
            <div className="border border-white/10 rounded-md bg-[#0a1210] min-h-[300px]">
              {showPreview ? (
                <div className="p-4 prose prose-invert prose-sm sm:prose-base max-w-none">
                  <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                    {formData.content}
                  </ReactMarkdown>
                </div>
              ) : (
                <textarea
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  placeholder="Type your markdown here...&#10;&#10;e.g. # Heading 1&#10;&#10;![Image description](https://...)"
                  className="w-full h-full min-h-[300px] p-4 bg-transparent text-white border-none focus:ring-0 focus:outline-none resize-y"
                />
              )}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="space-y-4 pt-6 border-t border-white/10">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label className="text-xl font-product-sans text-white">Frequently Asked Questions</Label>
                <p className="text-sm text-white/50">Add FAQs specific to this blog post</p>
              </div>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={handleAddFaq}
                className="border-stockstrail-green-light/30 hover:border-stockstrail-green-light/80 hover:bg-stockstrail-green-light/10 text-stockstrail-green-light transition-all rounded-lg"
              >
                <Plus className="w-4 h-4 mr-2" /> Add FAQ
              </Button>
            </div>

            {faqs.length === 0 ? (
              <div className="text-center py-8 rounded-xl border border-dashed border-white/10 bg-white/5">
                <p className="text-sm text-white/40">No FAQs added yet. Click &quot;Add FAQ&quot; to add one.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-4 sm:p-5 relative space-y-4 group">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                      <span className="text-sm font-semibold text-stockstrail-green-light uppercase tracking-wider">
                        FAQ #{index + 1}
                      </span>
                      <div className="flex items-center gap-2 self-stretch sm:self-auto justify-end">
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => handleMoveFaq(index, 'up')}
                          disabled={index === 0}
                          className="h-8 w-8 p-0 text-white/50 hover:text-white disabled:opacity-30 disabled:pointer-events-none"
                          title="Move Up"
                        >
                          <ArrowUp className="w-4 h-4" />
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => handleMoveFaq(index, 'down')}
                          disabled={index === faqs.length - 1}
                          className="h-8 w-8 p-0 text-white/50 hover:text-white disabled:opacity-30 disabled:pointer-events-none"
                          title="Move Down"
                        >
                          <ArrowDown className="w-4 h-4" />
                        </Button>
                        
                        <div className="flex items-center space-x-2 bg-white/5 px-3 py-1 rounded-lg border border-white/5">
                          <input
                            type="checkbox"
                            id={`faq-publish-${index}`}
                            checked={faq.is_published}
                            onChange={(e) => handleUpdateFaq(index, { is_published: e.target.checked })}
                            className="w-4 h-4 rounded border-white/20 bg-black/40 text-stockstrail-green-light focus:ring-stockstrail-green-light cursor-pointer"
                          />
                          <Label htmlFor={`faq-publish-${index}`} className="text-xs text-white/80 cursor-pointer select-none">
                            Published
                          </Label>
                        </div>

                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDeleteFaq(index)}
                          className="h-8 w-8 p-0 text-red-400 hover:text-red-300 hover:bg-red-500/10"
                          title="Delete FAQ"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <Label htmlFor={`faq-q-${index}`} className="text-xs text-white/70">Question</Label>
                        <Input
                          id={`faq-q-${index}`}
                          value={faq.question}
                          onChange={(e) => handleUpdateFaq(index, { question: e.target.value })}
                          placeholder="e.g., What are mutual funds?"
                          className="bg-white/5 border-white/10 text-white mt-1 h-9"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor={`faq-a-${index}`} className="text-xs text-white/70">Answer</Label>
                        <Textarea
                          id={`faq-a-${index}`}
                          value={faq.answer}
                          onChange={(e) => handleUpdateFaq(index, { answer: e.target.value })}
                          placeholder="Type the answer here..."
                          className="bg-white/5 border-white/10 text-white mt-1 min-h-[80px]"
                          required
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex justify-end gap-3 pt-6 border-t border-white/10">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="border-white/20 text-white hover:bg-white/5"
              disabled={loading}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={loading}
              className="bg-gradient-to-r from-emerald-400 to-stockstrail-green-light hover:from-emerald-300 hover:to-stockstrail-green text-[#031815] font-semibold shadow-[0_0_20px_rgba(0,255,151,0.25)] hover:shadow-[0_0_30px_rgba(0,255,151,0.5)] transition-all duration-300 hover:-translate-y-0.5 border border-emerald-300/30 px-6"
            >
              {loading ? "Saving..." : (blog ? "Update Post" : "Create Post")}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
