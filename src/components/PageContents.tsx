import { Box, useMediaQuery } from "@chakra-ui/react"
import PageTooSmall from "./PageTooSmall";

interface PageContentsProps {
    children: React.ReactNode;
    bg?: string;
}

export default function PageContents({children, bg}: PageContentsProps) {
    const [tooSmall] = useMediaQuery("(max-width: 800px)")
    
    return tooSmall ? <PageTooSmall/> : (
        <Box bg={bg ?? "white"} h="100vh">
            {children}
        </Box>
    )
}