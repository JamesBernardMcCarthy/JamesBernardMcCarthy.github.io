import React from "react";
import {
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
  Image,
  Avatar,
  VStack,
  StackDivider,
  Box,
  Center,
  IconButton,
  extendTheme,
  HStack,
  Tooltip,
  LinkBox,
  LinkOverlay,
  Link,
} from "@chakra-ui/react";
import { CheckIcon, EmailIcon, ExternalLinkIcon } from "@chakra-ui/icons";

export default function Body() {
  return (
    <Box className="Body" bg="gray.400">
      <VStack
        divider={<StackDivider borderColor="brand.100" />}
        spacing={4}
        align="stretch"
      >
        <Box padding="10px" bg="gray.300">
          <Text>
            The Research Deliberation Canvas (RDC) approach was inspired by the
            very successful Business Model Canvas. The RDC leverages a canvas to
            support the early phases of designing and developing a research
            proposal. In addition it can be used as a helpful tool to facilitate
            reviews within the proposal team as well as with the research office
            and others. The RDC is suitable to be used by academic based
            researchers, research office staff, researchers based in industry,
            NCPs, and funding agencies engaged in reviewing proposals. Some
            possible benefits of using the RDC during the design and review
            stages are listed below.
          </Text>
        </Box>
        <Tooltip
          label="Research Deliberation Canvas"
          aria-label="Canvas Tooltip"
        >
          <LinkBox
            className="ImageContainer"
            borderWidth="10px"
            borderRadius="lg"
            borderColor="gray.500"
            bg="gray.100"
          >
            <LinkOverlay
              href="https://zenodo.org/record/6109446"
              isExternal={true}
            />
            <Image
              className="FrontImage"
              src={require("../images/Front.jpg")}
              alt="Research Deliberation Canvas"
            />
          </LinkBox>
        </Tooltip>
        <Box padding="10px" bg="gray.300">
          <Heading>Research Proposal Design Process</Heading>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={CheckIcon} color="brand.100" />
              The canvas supports a consistent approach to rapidly begin the
              proposal design process in a structured fashion since this process
              is not regularly carried out by a newly formed group looking at a
              new call.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="brand.100" />
              The canvas has the potential to facilitate the development and
              sharing of best practises for proposal design with research office
              staff and researchers.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="brand.100" />
              The canvas is configurable to support different requirements from
              funding agencies, call types, research offices, etc.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="brand.100" />
              The RDC supports both top-down and bottom-up type calls.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="brand.100" />
              The RDC has the potential to be used as a training aid for new
              researchers and research office staff.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="brand.100" />
              The inclusion of remote research partners in the proposal design
              process is supported via the RDC.
            </ListItem>
          </List>
        </Box>
        <Box padding="10px" bg="gray.300">
          <Heading>Research Proposal Review Process</Heading>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={CheckIcon} color="brand.100" />
              The inclusion of difficult questions regarding strength and
              suitability of a proposal is easier to incorporate into the
              process using the canvas approach.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="brand.100" />
              The canvas promotes early Go/No-Go decisions in low success rate
              calls in order to preserve resources.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="brand.100" />
              The RDC has the potential to support a simplified review process
              between the PI or researcher and their respective research office.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="brand.100" />
              Deeper and more engaging reviews between the PI or researcher and
              their respective research offices can be achieved due to a more
              consistent approach when using the same canvas for design and
              review.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="brand.100" />
              The RDC approach can facilitate the development and sharing of
              best practises for proposal reviews with research office staff and
              researchers.
            </ListItem>
          </List>
        </Box>
        <Box padding="10px" bg="gray.300">
          <HStack>
            <Text width="50%">
              You can access the Research Deliberation Canvas either by clicking
              on the image above or by using this link{" "}
              <Link
                color="brand.100"
                href="https://zenodo.org/record/6109446"
                isExternal={true}
              >
                here.
              </Link>
              <br></br>
              You are also welcome to fill out the survey associated with the
              canvas{" "}
              <Link
                color="brand.100"
                href="https://cubs.eu.qualtrics.com/jfe/form/SV_3z84KoxTqPh4ZPU"
                isExternal={true}
              >
                here.
              </Link>
            </Text>
            <VStack width="50%">
              <Avatar
                borderWidth="2px"
                borderColor="brand.100"
                size="2xl"
                name="JB McCarthy"
                src={require("../images/Avatar.jpg")}
              />
              <Text>JB McCarthy</Text>
              <HStack>
                <Tooltip label="Send me an email" aria-label="UCC CUBS Tooltip">
                  <IconButton
                    variant="outline"
                    color="brand.100"
                    aria-label="Send email"
                    icon={<EmailIcon />}
                    onClick={() =>
                      (window.location = "mailto:jb.mccarthy@ucc.ie")
                    }
                  />
                </Tooltip>

                <Tooltip
                  label="Check out my UCC profile"
                  aria-label="UCC CUBS Tooltip"
                >
                  <IconButton
                    variant="outline"
                    conorScheme="brand.100"
                    color="brand.100"
                    aria-label="UCC CUBS page"
                    icon={<ExternalLinkIcon />}
                    onClick={() =>
                      window.open(
                        "https://www.cubsucc.com/faculty-directory/mr-james-b-mccarthy/#:~:text=Biography,University%20College%20Cork%20(UCC).&text=The%20FSIC%20research%20centre%20is,within%20Cork%20University%20Business%20School.",
                        "_blank"
                      )
                    }
                  />
                </Tooltip>
              </HStack>
            </VStack>
          </HStack>
        </Box>
      </VStack>
    </Box>
  );
}
