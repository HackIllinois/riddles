import PageContents from "../components/PageContents";
import { Image, Tab, TabList, TabPanel, TabPanels, Tabs, useDisclosure } from "@chakra-ui/react";
import Config from "../config";
import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";

import Question1 from "../questions/Question1";
import Question2 from "../questions/Question2";
import Question3 from "../questions/Question3";
import Question4 from "../questions/Question4";
import Question5 from "../questions/Question5";
import Question6 from "../questions/Question6";
import Question7 from "../questions/Question7";
import Question8 from "../questions/Question8";
import Question9 from "../questions/Question9";
import { Navigate } from "react-router-dom";
import ModalWrapper from "../components/TeamNameModal";

interface TabPanelProps {
    children: React.ReactNode;
}

interface PuzzleData {
    userId: string;
    lastCorrect: number;
    problemComplete: boolean[];
    teamName: string;
    score: number;
}

function createTab(idx: number, complete: boolean) {
    const src = complete ? "complete.svg" : `q${idx}.svg`;
    return <Tab> <Image draggable="false" minH={"100%"} src={`/assets/${src}`} /> </Tab>;
}


function Panel({children}: TabPanelProps) {
    return <TabPanel alignContent="center" w="100%" minH="50vh"> {children} </TabPanel>;
}

const problems = Array.from({ length: Config.NUM_QUESTIONS }, (_, index) => index + 1);

export default function Questions() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [data, setData] = useState({} as PuzzleData);
    const jwt = localStorage.getItem("jwt");

    if (!jwt) {
        return <Navigate to="/auth/" />
    }

    useEffect(() => {
        const apiUrl = `${Config.API_BASE_URL}/puzzle/status/`;

        axios.get(apiUrl, {headers: {Authorization: jwt}})
            .then(response => {
                console.log(response.data);
                setData({...response.data});

                // TODO: ADD A MODAL HERE
                console.log(data.score);
                if (data.score == 9) {
                    alert("You have finished!")
                }
            })
            .catch((error: AxiosError) => {
                const response = error.response;
                if (response?.status == 404) {
                    onOpen();                    
                } else {
                    console.log(response);
                    alert("Something went wrong! Please reach out to our staff...")
                    window.location.href = "/"
                    return null;

                }
            });
        }, []); // The empty dependency array ensures the effect runs only once on component mount
    
    return (
        <PageContents>
            <ModalWrapper isOpen={isOpen} onClose={onClose}/> 
            <Tabs isFitted variant='soft-rounded' colorScheme='green'>
                <TabList marginBottom="2%">
                    {problems.map(idx => createTab(idx, data?.problemComplete?.[idx] || false))}
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