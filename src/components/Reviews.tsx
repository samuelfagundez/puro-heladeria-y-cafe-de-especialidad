import { content } from '../content'

export default function Reviews() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-navy">Opiniones</p>
      <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
        Lo que dicen en Google
      </h2>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {content.reviews.map((review) => (
          <figure
            key={review.author}
            className="flex flex-col justify-between rounded-2xl border border-navy/15 bg-white/50 p-6"
          >
            <blockquote className="text-sm leading-relaxed text-ink/85">“{review.text}”</blockquote>
            <figcaption className="mt-4 flex items-center gap-2 text-sm font-semibold text-ink">
              <span className="flex text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 fill-current">
                    <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1-5.4 3.1 1.3-6-4.6-4.1 6.1-.6z" />
                  </svg>
                ))}
              </span>
              {review.author}
              <span className="font-normal text-ink/50">· Google</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
