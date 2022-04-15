import { 	Heading, VStack, Image, Flex, Spacer, IconButton, Button, Box, Text } from "@chakra-ui/react"
import React from 'react'
import logo from '../assets/logo_light.png'
import profile from '../assets/profile_light.png'

function MakeAppointment() {

	return <>
		<header>
			<VStack>
				<Flex backgroundColor="#80A8A2" w="100%" h="20%" align="center" flowDirection="ltr">
					<Image ml="10px" w="4%" src={logo} alt="Logo" align="center" fit="contain"/>
					<Heading ml="10px" as="em" color="#9ac6bb" fontSize="6xl" >{"FYM GYM"}</Heading>
					<Spacer/>
					<Image mt="10px" mb="10px" mr="10px" ml="10px" w="4%" src={profile} alt="Profile Picture" fit="contain"/>
				</Flex>
				<Flex w="100%" h="80%" flowDirection="ltr">
					<Box backgroundColor="#D7FBE8" w="20%">
						<Text>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus lobortis semper. Vestibulum a tristique nibh. Pellentesque facilisis enim lacus, nec ultrices felis faucibus ac. In nec interdum ex. Aenean velit mauris, malesuada id pulvinar at, viverra vitae purus. Duis congue ut ipsum eu suscipit. Mauris dignissim convallis lectus quis imperdiet. Sed fringilla libero neque, vel eleifend metus sagittis ut. Proin varius ultricies dui, vitae bibendum libero dignissim nec. Nunc tempus lectus sed mauris consectetur, eu egestas dolor mollis. Nam at ornare lorem. Donec posuere tortor vel odio ultricies, eu viverra massa sodales. Sed sed vehicula ante. Nunc ornare eros lectus, id condimentum leo pulvinar viverra." </Text>
					</Box>
					<Box backgroundColor="#ffffcc" w="80%">
						<Text> 	"Etiam luctus velit ac leo faucibus pretium. Suspendisse dictum vestibulum tempus. Aliquam nec massa tincidunt sem maximus egestas eu elementum lacus. Praesent pulvinar diam est, eu cursus arcu ultrices id. Donec euismod, nulla sed efficitur euismod, diam dui venenatis nisi, in luctus tellus lacus et justo. Etiam mattis maximus dignissim. Maecenas ultrices velit vitae congue auctor. Morbi tincidunt ipsum vitae urna scelerisque cursus. Nulla sagittis tempus aliquam. Praesent iaculis, ante in accumsan vehicula, nisi arcu tristique ante, sed ullamcorper neque sapien eget purus. Morbi hendrerit lectus quis augue bibendum, a accumsan purus pharetra. Nulla sit amet auctor urna. Vivamus a arcu vitae est convallis luctus. Nam et dolor efficitur, faucibus libero quis, porta diam. Cras non leo mattis, vestibulum leo sit amet, cursus massa. Quisque faucibus nunc blandit quam porttitor accumsan.
								Aliquam porta tortor ligula, vitae tincidunt ligula elementum sit amet. Nullam efficitur condimentum hendrerit. In ornare ultrices venenatis. Quisque euismod sem a ipsum feugiat, non cursus lacus aliquam. Praesent sed molestie turpis. Morbi id sodales felis, sit amet volutpat lorem. Donec tortor nulla, pharetra eget efficitur eu, consectetur eu arcu. Duis commodo est at eros luctus, vel malesuada diam egestas. Pellentesque odio felis, rutrum vitae elit vel, consectetur maximus nisl. Aliquam sit amet eros dapibus felis ultricies consectetur in eget ex. Sed iaculis nulla sed euismod rhoncus. Suspendisse dui nisl, consequat ac pellentesque sed, hendrerit in purus. Curabitur semper nibh posuere enim consequat euismod. Nam sapien sem, dignissim sit amet condimentum auctor, pretium quis est. Donec imperdiet nibh eu massa fermentum ornare." </Text>
					</Box>			
				</Flex>
			</VStack>
		</header>
	</>
}

export default MakeAppointment