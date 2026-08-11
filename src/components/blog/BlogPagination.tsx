import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type BlogPaginationProps = {
  currentPage: number;
  totalPages: number;
};

type PageToken = number | 'ellipsis';

function getPageTokens(current: number, total: number): PageToken[] {
  const tokens: PageToken[] = [1];

  const windowStart = Math.max(2, current - 1);
  const windowEnd = Math.min(total - 1, current + 1);

  if (windowStart > 2) tokens.push('ellipsis');
  for (let page = windowStart; page <= windowEnd; page++) tokens.push(page);
  if (windowEnd < total - 1) tokens.push('ellipsis');

  if (total > 1) tokens.push(total);

  return tokens;
}

const pillBase =
  'inline-flex items-center justify-center h-10 min-w-10 px-3 rounded-full text-sm font-work-sans font-medium transition-all duration-300';
const pillIdle =
  'border border-white/10 text-white/70 hover:text-white hover:border-stockstrail-green-light/50 hover:bg-white/5';
const pillDisabled = 'border border-white/5 text-white/20 cursor-not-allowed';

const BlogPagination: React.FC<BlogPaginationProps> = ({ currentPage, totalPages }) => {
  if (totalPages <= 1) return null;

  const tokens = getPageTokens(currentPage, totalPages);
  const prevPage = currentPage > 1 ? currentPage - 1 : null;
  const nextPage = currentPage < totalPages ? currentPage + 1 : null;

  return (
    <nav aria-label="Blog pagination" className="mt-16 flex items-center justify-center gap-2 flex-wrap">
      {prevPage ? (
        <Link
          href={prevPage === 1 ? '/blog' : `/blog?page=${prevPage}`}
          aria-label="Previous page"
          className={`${pillBase} ${pillIdle}`}
        >
          <ChevronLeft className="h-4 w-4" />
        </Link>
      ) : (
        <span aria-hidden="true" className={`${pillBase} ${pillDisabled}`}>
          <ChevronLeft className="h-4 w-4" />
        </span>
      )}

      {tokens.map((token, i) =>
        token === 'ellipsis' ? (
          <span key={`ellipsis-${i}`} className="px-2 text-white/40 select-none">
            …
          </span>
        ) : (
          <Link
            key={token}
            href={token === 1 ? '/blog' : `/blog?page=${token}`}
            aria-current={token === currentPage ? 'page' : undefined}
            className={`${pillBase} ${
              token === currentPage
                ? 'bg-stockstrail-green-light text-stockstrail-bg shadow-[0_0_20px_rgba(0,255,151,0.35)]'
                : pillIdle
            }`}
          >
            {token}
          </Link>
        )
      )}

      {nextPage ? (
        <Link href={`/blog?page=${nextPage}`} aria-label="Next page" className={`${pillBase} ${pillIdle}`}>
          <ChevronRight className="h-4 w-4" />
        </Link>
      ) : (
        <span aria-hidden="true" className={`${pillBase} ${pillDisabled}`}>
          <ChevronRight className="h-4 w-4" />
        </span>
      )}
    </nav>
  );
};

export default BlogPagination;
