import { Box, useMediaQuery } from "@chakra-ui/react"
import PageTooSmall from "./PageTooSmall";

interface PageContentsProps {
    children: React.ReactNode;
    bg?: string;
}

export default function PageContents({children, bg}: PageContentsProps) {
    const [tooSmall] = useMediaQuery("(max-width: 800px)")
    
    return tooSmall ? <PageTooSmall/> : (
        <Box bg={bg ?? "teal"} h="100vh" padding="2.5%">
            <Box>
                {children}
            </Box>
        </Box>
    )
}