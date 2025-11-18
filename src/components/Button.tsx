import Link from 'next/link'
import clsx from 'clsx'

function ButtonInner({
  arrow = false,
  children,
  variant,
}: {
  arrow?: boolean
  children: React.ReactNode
  variant?: 'whatsapp'
}) {
  const gradientClass = variant === 'whatsapp'
    ? 'bg-linear-to-b from-[#25d366] to-[#20ba5a]'
    : 'bg-linear-to-b from-white/80 to-white'
  const shadowClass = variant === 'whatsapp'
    ? 'shadow-[inset_0_1px_1px_#25d366]'
    : 'shadow-[inset_0_1px_1px_white]'
  const opacityClass = variant === 'whatsapp'
    ? 'opacity-40 transition-opacity group-hover:opacity-50'
    : 'opacity-10 transition-opacity group-hover:opacity-15'
  const shadowOpacityClass = variant === 'whatsapp'
    ? 'opacity-20 transition-opacity group-hover:opacity-25'
    : 'opacity-7.5 transition-opacity group-hover:opacity-10'

  return (
    <>
      <span className={clsx('absolute inset-0 rounded-md', gradientClass, opacityClass)} />
      <span className={clsx('absolute inset-0 rounded-md', shadowClass, shadowOpacityClass)} />
      <span className="relative z-10">{children}</span> {arrow ? <span aria-hidden="true" className="relative z-10">&rarr;</span> : null}
    </>
  )
}

export function Button({
    arrow,
    children,
    className,
    variant,
  ...props
}: { arrow?: boolean; variant?: 'whatsapp' } & (
  | React.ComponentPropsWithoutRef<typeof Link>
  | ({ href?: undefined } & React.ComponentPropsWithoutRef<'button'>)
)) {
  className = clsx(
      'group relative isolate flex-none rounded-md py-1.5 text-[0.8125rem]/6 font-semibold text-white',
      variant === 'whatsapp' ? 'bg-[#25d366]' : '',
      arrow ? 'pl-2.5 pr-[calc(9/16*1rem)]' : 'px-2.5',
      className,
  )

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props}>
      <ButtonInner arrow={arrow} variant={variant}>{children}</ButtonInner>
    </button>
  ) : (
    <Link className={className} {...props}>
      <ButtonInner arrow={arrow} variant={variant}>{children}</ButtonInner>
    </Link>
  )
}
