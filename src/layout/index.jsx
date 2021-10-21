export default function Layout(props) {
  return (
    <div style={{color: 'red'}}>
      <aside>
        左边
      </aside>
      <article>
        {props.children}
      </article>
    </div>
  )
}