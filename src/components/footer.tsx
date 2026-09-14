
export default function Footer() {
  return (
    <div className="py-1 text-xs text-muted flex flex-col md:flex-row md:justify-between gap-2">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 md:px-8 xl:px-10">
        <a href="https://github.com/leonardonasc/">
          <p>Leonardo Nascimento</p>
        </a>
        <span>&copy; {new Date().getFullYear()} All rights reserved.</span>
      </div>
    </div>
  )
}
