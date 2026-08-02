"use client";
import { useState, useRef } from "react";
import { createClient } from "@/lib/supabase/client";
import { Upload, X, Loader2, ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ImageUploaderProps {
  label: string;
  value: string | null;
  onChange: (url: string | null) => void;
  storagePath: string; // e.g. "learning/categories/covers"
  altText?: string;
  onAltChange?: (alt: string) => void;
}

export function ImageUploader({ label, value, onChange, storagePath, altText, onAltChange }: ImageUploaderProps) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const uploadFile = async (file: File) => {
    setUploading(true);
    setError(null);
    try {
      const supabase = createClient();
      const ext = file.name.split(".").pop();
      const filename = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
      const { data, error: uploadErr } = await supabase.storage
        .from("learning")
        .upload(`${storagePath}/${filename}`, file, { upsert: true });
      if (uploadErr) throw uploadErr;
      const { data: { publicUrl } } = supabase.storage.from("learning").getPublicUrl(data.path);
      onChange(publicUrl);
    } catch (err: any) {
      setError(err.message ?? "Upload failed");
    } finally {
      setUploading(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) uploadFile(file);
  };

  const handleRemove = async () => {
    if (!value) return;
    try {
      const supabase = createClient();
      const path = value.split("/learning/")[1];
      if (path) await supabase.storage.from("learning").remove([path]);
    } catch {}
    onChange(null);
  };

  return (
    <div className="space-y-2">
      <Label className="text-white/70 text-sm">{label}</Label>

      {value ? (
        <div className="relative group rounded-xl overflow-hidden border border-white/10 bg-white/5 aspect-[16/9] w-full">
          <img src={value} alt={altText || label} className="absolute inset-0 w-full h-full object-contain" />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
            <Button size="sm" variant="ghost"
              onClick={() => inputRef.current?.click()}
              className="text-white hover:text-stockstrail-green-light hover:bg-white/10"
            >
              <Upload className="w-4 h-4 mr-1" /> Replace
            </Button>
            <Button size="sm" variant="ghost"
              onClick={handleRemove}
              className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
            >
              <X className="w-4 h-4 mr-1" /> Remove
            </Button>
          </div>
        </div>
      ) : (
        <div
          onDragOver={e => { e.preventDefault(); setDragOver(true); }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
          onClick={() => inputRef.current?.click()}
          className={`relative aspect-[16/9] w-full flex flex-col items-center justify-center rounded-xl border-2 border-dashed cursor-pointer transition-colors
            ${dragOver ? "border-stockstrail-green-light bg-stockstrail-green-light/10" : "border-white/20 bg-white/5 hover:border-white/40 hover:bg-white/10"}`}
        >
          {uploading ? (
            <Loader2 className="w-8 h-8 animate-spin text-stockstrail-green-light" />
          ) : (
            <>
              <ImageIcon className="w-8 h-8 text-white/30 mb-2" />
              <p className="text-sm text-white/50">Drag & drop or click to upload</p>
              <p className="text-xs text-white/30 mt-1">PNG, JPG, WebP — max 5MB</p>
            </>
          )}
        </div>
      )}

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={e => { const f = e.target.files?.[0]; if (f) uploadFile(f); }}
      />

      {onAltChange && (
        <Input
          placeholder="Alt text (for accessibility & SEO)"
          value={altText || ""}
          onChange={e => onAltChange(e.target.value)}
          className="bg-white/5 border-white/10 text-white placeholder:text-white/40 text-sm"
        />
      )}

      {error && <p className="text-red-400 text-xs">{error}</p>}
    </div>
  );
}
