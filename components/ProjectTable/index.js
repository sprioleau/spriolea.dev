import React from "react";
import useMouse from "@react-hook/mouse-position"
import Image from "next/image";
import useWindowSize, { breakpoints as bp } from "../../hooks/useWindowSize";
import { sortByYearAndTitle } from "../../utils";
import { urlFor } from "../../libs/sanity/index";
import ProjectRow from "../ProjectRow";

const ProjectTable = ({ projects }) => {
	const [currentImage, setCurrentImage] = React.useState(null);
	const { windowSize } = useWindowSize();
	const smallerThanSmall = windowSize <= bp.sm;
	const smallerThanMedium = windowSize <= bp.md;

	const imageWidth = 325;

	const imageDimensions = {
		width: imageWidth,
		height: Math.floor(imageWidth * 0.5625),
	}

	const projectTableRef = React.useRef(null)
	const { clientX: x, clientY: y } = useMouse(projectTableRef, {
		enterDelay: 0,
		leaveDelay: 200,
	})

  return (
	<div className="other-work">
		<h3 className="other-work__section-title">Other Work</h3>
		<table>
			<thead>
				<tr className="other-work__header-row">
					<th>Year</th>
					<th>Project</th>
					{!smallerThanMedium && <th>Built for</th>}
					{!smallerThanSmall && <th>Built with</th>}
					<th>Links</th>
				</tr>
			</thead>
			<tbody ref={projectTableRef}>
				{projects.sort(sortByYearAndTitle).map((project) => (
					<ProjectRow
						key={project._id}
						project={project}
						smallerThanSmall={smallerThanSmall}
						smallerThanMedium={smallerThanMedium}
						setCurrentImage={setCurrentImage}
					/>
				))}
				</tbody>
		</table>
		{currentImage ? (
			<div
				className="other-work__image"
				style={{
					top: y + 20,
					left: x + 10,
				}}
			>
				<Image
					src={urlFor(currentImage).format("png").quality(100).width(imageDimensions.width).height(imageDimensions.height).url()}
					alt="project image"
					width={imageDimensions.width}
					height={imageDimensions.height}
					quality={100}
				/>
			</div>
		): null }
	</div>
  )
}

export default ProjectTable;
