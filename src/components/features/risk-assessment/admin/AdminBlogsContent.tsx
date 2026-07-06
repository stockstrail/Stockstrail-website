"use client";

import { useState, useEffect } from "react";
import { Plus, Edit2, Trash2, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatDate } from "@/lib/utils";
import { BlogEditorModal } from "./BlogEditorModal";

export interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image_url: string;
  image_alt?: string;
  content_images?: string[];
  published: boolean;
  author_id: string | null;
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  created_at: string;
  updated_at: string;
  author_name?: string;
}

export function AdminBlogsContent() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [editorOpen, setEditorOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const supabase = createClient();
      const { data, error } = await supabase
        .from("blogs")
        .select(`
          *,
          profiles:author_id (full_name)
        `)
        .order("created_at", { ascending: false });

      if (error) throw error;

      const formattedBlogs = data.map((b: any) => ({
        ...b,
        author_name: b.profiles?.full_name || "Vikrant Bhardwaj",
      }));
      setBlogs(formattedBlogs);
    } catch (err) {
      console.error("Error fetching blogs:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleCreate = () => {
    setSelectedBlog(null);
    setEditorOpen(true);
  };

  const handleEdit = (blog: Blog) => {
    setSelectedBlog(blog);
    setEditorOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this blog post?")) return;
    
    setDeletingId(id);
    try {
      const supabase = createClient();
      const { error } = await supabase.from("blogs").delete().eq("id", id);
      if (error) throw error;
      await fetchBlogs();
    } catch (err) {
      console.error("Error deleting blog:", err);
      alert("Failed to delete blog post.");
    } finally {
      setDeletingId(null);
    }
  };

  const handleSave = () => {
    fetchBlogs();
    setEditorOpen(false);
  };

  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-16 min-h-screen">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#072923] via-[#031815] to-[#010d0c] opacity-90" />
      <div className="max-w-7xl mx-auto space-y-8">
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <header className="space-y-2">
            <h1 className="font-product-sans text-4xl sm:text-5xl font-normal text-white">
              Manage <span className="gradient-text">Blogs</span>
            </h1>
            <p className="text-white/70 text-lg">
              Create, edit, and publish blog posts
            </p>
          </header>
          <Button 
            onClick={handleCreate}
            className="bg-gradient-to-r from-emerald-400 to-stockstrail-green-light hover:from-emerald-300 hover:to-stockstrail-green text-[#031815] font-semibold shadow-[0_0_20px_rgba(0,255,151,0.25)] hover:shadow-[0_0_30px_rgba(0,255,151,0.5)] transition-all duration-300 hover:-translate-y-0.5 border border-emerald-300/30 rounded-xl px-6"
          >
            <Plus className="w-5 h-5 mr-2" />
            Create Post
          </Button>
        </div>

        <Card className="bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-white text-xl">All Blog Posts</CardTitle>
            <CardDescription className="text-white/70">
              Total {blogs.length} post(s)
            </CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-center py-12 text-white/60">Loading...</div>
            ) : blogs.length === 0 ? (
              <div className="text-center py-12 text-white/60">
                No blog posts found. Create one to get started!
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-3 px-4 text-white/70 font-medium text-sm">Title</th>
                      <th className="text-left py-3 px-4 text-white/70 font-medium text-sm">Status</th>
                      <th className="text-left py-3 px-4 text-white/70 font-medium text-sm">Author</th>
                      <th className="text-left py-3 px-4 text-white/70 font-medium text-sm">Date</th>
                      <th className="text-right py-3 px-4 text-white/70 font-medium text-sm">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {blogs.map((blog) => (
                      <tr key={blog.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                        <td className="py-3 px-4 text-white font-medium">
                          {blog.title}
                        </td>
                        <td className="py-3 px-4">
                          <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium border ${blog.published ? 'bg-green-500/20 text-green-400 border-green-500/40' : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/40'}`}>
                            {blog.published ? 'Published' : 'Draft'}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-white/80">
                          {blog.author_name}
                        </td>
                        <td className="py-3 px-4 text-white/80 text-sm">
                          {formatDate(blog.created_at)}
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex items-center justify-end gap-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => window.open(`/blog/${blog.slug}`, '_blank')}
                              className="text-white/70 hover:text-stockstrail-green-light hover:bg-white/10 h-8"
                              disabled={!blog.published}
                            >
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleEdit(blog)}
                              className="text-white/70 hover:text-stockstrail-green-light hover:bg-white/10 h-8"
                            >
                              <Edit2 className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleDelete(blog.id)}
                              disabled={deletingId === blog.id}
                              className="text-red-400 hover:text-red-300 hover:bg-red-500/10 h-8"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>

        {editorOpen && (
          <BlogEditorModal 
            blog={selectedBlog} 
            open={editorOpen} 
            onOpenChange={setEditorOpen} 
            onSave={handleSave} 
          />
        )}
      </div>
    </section>
  );
}
