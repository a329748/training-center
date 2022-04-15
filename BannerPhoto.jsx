import { Box, Image } from "@chakra-ui/react"
import bannerImage from '../assets/banner_1.jpg'

function BannerPhoto() {
	return <>
		<header>
			<Box d="flex" align-items="left">
				<Image boxSize="500px" src={bannerImage} alt="Banner photo"/>
			</Box>
		</header>
	</>
}

export default BannerPhoto