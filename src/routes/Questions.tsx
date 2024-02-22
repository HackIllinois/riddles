import PageContents from "../components/PageContents";
import { Image, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import Config from "../config";

import Question1 from "../questions/Question1";
import Question2 from "../questions/Question2";
import Question3 from "../questions/Question3";
import Question4 from "../questions/Question4";
import Question5 from "../questions/Question5";
import Question6 from "../questions/Question6";
import Question7 from "../questions/Question7";
import Question8 from "../questions/Question8";
import Question9 from "../questions/Question9";

interface TabPanelProps {
    children: React.ReactNode;
}

function createTab(idx: number) {
    return <Tab> <Image draggable="false" src={`/assets/q${idx}.svg`} /> </Tab>;
}


function Panel({children}: TabPanelProps) {
    return <TabPanel alignContent="center" w="100%" minH="50vh"> {children} </TabPanel>;
}

const problems = Array.from({ length: Config.NUM_QUESTIONS }, (_, index) => index + 1);

export default function Questions() {
    return (
        <PageContents>
            <Tabs isFitted variant='soft-rounded' colorScheme='green'>
                <TabList marginBottom="2%">
                    {problems.map(createTab)}
                </TabList>

                <TabPanels>
                    <Panel> <Question1 /> </Panel>
                    <Panel> <Question2 /> </Panel>
                    <Panel> <Question3 /> </Panel>
                    <Panel> <Question4 /> </Panel>
                    <Panel> <Question5 /> </Panel>
                    <Panel> <Question6 /> </Panel>
                    <Panel> <Question7 /> </Panel>
                    <Panel> <Question8 /> </Panel>
                    <Panel> <Question9 /> </Panel>
                </TabPanels>
            </Tabs>
        </PageContents>
    )
}