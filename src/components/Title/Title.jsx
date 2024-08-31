import "./Title.css"

export default function Title({
    className,
    children
}) {
    return <div className={`title ${className}`}>
        <h1 className="title-text">{children}</h1>
        <span className="title-style"></span>
    </div>
}