import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/comments.scss"
import script from "./scripts/giscus.inline"
import { Options } from "reading-time"

export default ((opts?: Options) => {
  const Comments: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    return (
      <footer class={`${displayClass ?? "comments"}`}>
        <hr />
        <div class="giscus">
        </div>
      </footer>
    )
  }

  Comments.afterDOMLoaded = script.toString()
  Comments.css = style
  return Comments
}) satisfies QuartzComponentConstructor