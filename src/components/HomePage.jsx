import { 	SimpleGrid, Box, AspectRatio, Image,
			Center, Flex, Spacer, VStack, 
			Heading, Text, Divider, IconButton, 
			Input, InputGroup, InputRightElement, 
			Button, Link } from "@chakra-ui/react"
import bannerImage from '../assets/banner_2.jpg'
import logo from '../assets/logo.png'
import { CheckIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import React from 'react'

function HomePage() {
	const [show, setShow] = React.useState(false)
	const handleClick = () => setShow(!show)

	return <>
		<header>
			<SimpleGrid columns={2} backgroundColor="#F8FCFB">
				<Box border="0.3vw solid #79D1C3" border-radius="30px">
					<AspectRatio ratio={8/9}>
						<Image
							src={bannerImage}
							alt="Banner photo"
							align="left"
							transform="scaleX(-1)"
							objectFit="cover"			
						/>
					</AspectRatio>
				</Box>
				<Center>
					<Flex color="#0C4537" w="50%" h="90%" align="center" flexDirection="column">
						<Image w="50%" src={logo} alt="Logo" align="center" fit="contain"/>
						<VStack align="left">
							<Spacer/>
							<Heading color="#1FAB89" fontSize="4xl" >{"FYM GYM TRAINING CENTER"}</Heading>
							<Spacer/>
							<Spacer/>
							<Spacer/>
							<Text fontSize="xl" as="i">Hola, inicia sesión</Text>
							<Spacer/>
							<Divider orientation="horizontal"></Divider>
							<Text>{"Correo electrónico:"}</Text>
							<InputGroup>
								<Input color="#448E7C" backgroundColor="#ffffff" size="sm" placeholder="ejemplo@correo.com"></Input>
								<InputRightElement height="100%" children={<CheckIcon color='green.500'/>}/>
							</InputGroup>
							<Text>{"Contraseña:"}</Text>
							<InputGroup>
						    	<InputRightElement height="100%" width="12%">
									<IconButton h='1.75rem' size='sm' icon={show?<ViewOffIcon/>:<ViewIcon/>} onClick={handleClick}>
							 			{show ? 'Hide' : 'Show'}
									</IconButton>
						        </InputRightElement>							
								<Input color="#448E7C" backgroundColor="#ffffff" size="sm" type={show?'text':'password'} placeholder="Ingrese su contraseña"></Input>
							</InputGroup>
							<Spacer/>
							<Button _hover={{backgroundColor: "#23C49C", color: "#ffffff"}} align="right">Iniciar sesión</Button>
							<Spacer/>
							<Spacer/>
							<Link _hover={{color: "#F7BE14"}} size="xs" as="em">¿Olvidaste tu contraseña?</Link>
							<Link _hover={{color: "#F7BE14"}} 	size="xs" as="em">¿No tienes una cuenta? Regístrate</Link>
						</VStack>
						
					</Flex>
				</Center>
			</SimpleGrid>	
		</header>
		
	</>
}

export default HomePage