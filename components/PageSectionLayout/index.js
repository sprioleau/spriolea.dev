
import { FadeInWhenVisible } from "../AnimationLibrary"
import SectionHeader from "../SectionHeader"

const PageSectionLayout = ({ sectionId, sectionTitle, center = false, offset, children }) => {
  return (
    <section className={`${sectionId} section`}>
      <div id={sectionId} className="marker" />
      <FadeInWhenVisible offset={offset} >
          <div className="container">
            <SectionHeader sectionTitle={sectionTitle} center={center} />
            <div className={`${sectionId}__main-content`}>
              {children}
            </div>
          </div>
      </FadeInWhenVisible>
    </section>
  )
}

export default PageSectionLayout
