import { Box, useMediaQuery } from "@chakra-ui/react"
import PageTooSmall from "./PageTooSmall";
import { Colors } from "../config";

interface PageContentsProps {
    children: React.ReactNode;
    bg?: string;
}

export default function PageContents({children, bg}: PageContentsProps) {
    const [tooSmall] = useMediaQuery("(max-width: 800px)")
    
    return tooSmall ? <PageTooSmall/> : (
        <Box bg={bg ?? Colors.background} h="100vh" padding="2.5%" color={Colors.primaryTextColor} position={"fixed"} width={"100vw"}>
            <Box>
                {children}
            </Box>
        </Box>
    )
}