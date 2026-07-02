"use client";

import { useState, useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import { X, Bold, Italic, List, ListOrdered, Link as LinkIcon, Image as ImageIcon, Heading1, Heading2, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { createClient } from "@/lib/supabase/client";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Blog } from "./AdminBlogsContent";

interface BlogEditorModalProps {
  blog: Blog | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: () => void;
}

const MenuBar = ({ editor }: { editor: any }) => {
  if (!editor) return null;

  const addLink = () => {
    const previousUrl = editor.getAttributes('link').href
    const url = window.prompt('URL', previousUrl)
    if (url === null) return
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run()
      return
    }
    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
  }

  const addImage = () => {
    const url = window.prompt('Image URL')
    if (url) {
      editor.chain().focus().setImage({ src: url }).run()
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-1 p-2 bg-white/5 border-b border-white/10 rounded-t-md">
      <Button variant="ghost" size="sm" onClick={() => editor.chain().focus().toggleBold().run()} className={`h-8 w-8 p-0 ${editor.isActive('bold') ? 'bg-white/20' : ''}`}><Bold className="w-4 h-4" /></Button>
      <Button variant="ghost" size="sm" onClick={() => editor.chain().focus().toggleItalic().run()} className={`h-8 w-8 p-0 ${editor.isActive('italic') ? 'bg-white/20' : ''}`}><Italic className="w-4 h-4" /></Button>
      <div className="w-px h-6 bg-white/10 mx-1" />
      <Button variant="ghost" size="sm" onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} className={`h-8 w-8 p-0 ${editor.isActive('heading', { level: 1 }) ? 'bg-white/20' : ''}`}><Heading1 className="w-4 h-4" /></Button>
      <Button variant="ghost" size="sm" onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} className={`h-8 w-8 p-0 ${editor.isActive('heading', { level: 2 }) ? 'bg-white/20' : ''}`}><Heading2 className="w-4 h-4" /></Button>
      <div className="w-px h-6 bg-white/10 mx-1" />
      <Button variant="ghost" size="sm" onClick={() => editor.chain().focus().toggleBulletList().run()} className={`h-8 w-8 p-0 ${editor.isActive('bulletList') ? 'bg-white/20' : ''}`}><List className="w-4 h-4" /></Button>
      <Button variant="ghost" size="sm" onClick={() => editor.chain().focus().toggleOrderedList().run()} className={`h-8 w-8 p-0 ${editor.isActive('orderedList') ? 'bg-white/20' : ''}`}><ListOrdered className="w-4 h-4" /></Button>
      <Button variant="ghost" size="sm" onClick={() => editor.chain().focus().toggleBlockquote().run()} className={`h-8 w-8 p-0 ${editor.isActive('blockquote') ? 'bg-white/20' : ''}`}><Quote className="w-4 h-4" /></Button>
      <div className="w-px h-6 bg-white/10 mx-1" />
      <Button variant="ghost" size="sm" onClick={addLink} className={`h-8 w-8 p-0 ${editor.isActive('link') ? 'bg-white/20' : ''}`}><LinkIcon className="w-4 h-4" /></Button>
      <Button variant="ghost" size="sm" onClick={addImage} className="h-8 w-8 p-0"><ImageIcon className="w-4 h-4" /></Button>
    </div>
  )
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
    published: false,
  });
  
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      Link.configure({ openOnClick: false }),
    ],
    content: "",
    editorProps: {
      attributes: {
        class: 'prose prose-invert prose-sm sm:prose-base max-w-none focus:outline-none min-h-[300px] p-4 bg-white/5 rounded-b-md',
      },
    },
  });

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
          published: blog.published || false,
        });
        setTimeout(() => editor?.commands.setContent(blog.content || ""), 100);
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
          published: false,
        });
        setTimeout(() => editor?.commands.setContent(""), 100);
      }
    }
  }, [open, blog, editor]);

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

    // Check size (100 KB limit)
    if (file.size > 102400) {
      alert("Image exceeds the 100 KB limit. Please upload a smaller image.");
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editor) return;

    setLoading(true);
    try {
      const supabase = createClient();
      const content = editor.getHTML();

      const payload = {
        title: formData.title,
        slug: formData.slug || generateSlug(formData.title),
        excerpt: formData.excerpt,
        content: content,
        image_url: formData.image_url,
        image_alt: formData.image_alt,
        meta_title: formData.meta_title,
        meta_description: formData.meta_description,
        meta_keywords: formData.meta_keywords,
        published: formData.published,
      };

      if (blog) {
        // Update
        const { error } = await supabase.from("blogs").update(payload).eq("id", blog.id);
        if (error) throw error;
      } else {
        // Create
        // Need to get author_id from auth user
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
                <Label htmlFor="image" className="text-white/70">Cover Image (Max 100KB)</Label>
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

              <div className="flex items-center space-x-2 pt-6">
                <Switch
                  id="published"
                  checked={formData.published}
                  onCheckedChange={(checked) => setFormData({ ...formData, published: checked })}
                />
                <Label htmlFor="published" className="text-white/70">Publish post immediately</Label>
              </div>
            </div>
          </div>

          <div className="space-y-2 pt-4">
            <Label className="text-white/70">Content</Label>
            <div className="border border-white/10 rounded-md bg-[#0a1210]">
              <MenuBar editor={editor} />
              <EditorContent editor={editor} />
            </div>
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
