
export default function Footer() {
  return (
    <div className="py-1 text-xs text-muted mt-20 flex flex-col md:flex-row md:justify-between gap-2">
        <p>Leonardo Nascimento</p>
        <span>&copy; {new Date().getFullYear()} All rights reserved.</span>
    </div>
  )
}
