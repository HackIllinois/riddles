import { Box, useMediaQuery } from "@chakra-ui/react"
import PageTooSmall from "./PageTooSmall";
import { Colors } from "../config";

interface PageContentsProps {
    children: React.ReactNode;
    bg?: string;
}

export default function PageContents({ children, bg }: PageContentsProps) {
    const [tooSmall] = useMediaQuery("(max-width: 600px)")

    return <Box bg={bg ?? Colors.background} h="100vh" padding="2.5%" color={Colors.primaryTextColor} position={"fixed"} width={"100vw"}>
        {tooSmall ? <PageTooSmall /> : (
            <Box>
                {children}
            </Box>
        )}
    </Box>
}