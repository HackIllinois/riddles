import PageContents from "../components/PageContents";
import { Image, Tab, TabList, TabPanel, TabPanels, Tabs, useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { Config } from "../config";
import "@fontsource/montserrat";

import Question0 from "../questions/Question0";
import Question1 from "../questions/Question1";
import Question2 from "../questions/Question2";
import Question3 from "../questions/Question3";
import Question4 from "../questions/Question4";
import Question5 from "../questions/Question5";
import Question6 from "../questions/Question6";
import Question7 from "../questions/Question7";
import Question8 from "../questions/Question8";
import { Navigate } from "react-router-dom";
import ModalWrapper from "../components/TeamNameModal";

interface TabPanelProps {
    children: React.ReactNode;
}

export interface QuestionProps {
    setData: (value: React.SetStateAction<PuzzleData>) => void;
    data: PuzzleData;
}

export interface PuzzleData {
    userId: string;
    lastCorrect: number;
    problemComplete: boolean[];
    teamName: string;
    score: number;
}


function createTab(idx: number, complete: boolean) {
    const src = complete ? "complete.svg" : `q${idx}.svg`;
    return <Tab> <Image draggable="false" minH={"100%"} src={`/${src}`} /> </Tab>;
}


function Panel({children}: TabPanelProps) {
    return <TabPanel alignContent="center" w="100%" minH="50vh"> {children} </TabPanel>;
}

const problems = Array.from({ length: Config.NUM_QUESTIONS }, (_, index) => index);

export default function Questions() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [data, setData] = useState({} as PuzzleData);
    const jwt = localStorage.getItem("jwt");

    if (!jwt) {
        return <Navigate to="/auth/" />
    }

    // FINISHED PUZZLE
    if (data && data.score == 9) {
        // alert("You are finished!");
        window.location.href = "/#/";
    }


    useEffect(() => {
        const apiUrl = `${Config.API_BASE_URL}/puzzle/status/`;

        axios.get(apiUrl, {headers: {Authorization: jwt}})
            .then(response => {
                setData({...response.data});
            })
            .catch((error: AxiosError) => {
                const response = error.response;
                if (response?.status == 404) {
                    onOpen();                    
                } if (response?.status == 401 || response?.status == 403) {
                    localStorage.removeItem("jwt");
                    window.location.href="/auth/"
                } else {
                    console.log(response);
                    return null;
                }
            });
        }, []);
    
    return (
        <PageContents>
            <ModalWrapper isOpen={isOpen} onClose={onClose}/> 
            <Tabs isFitted variant='soft-rounded'>
                <TabList marginBottom="2%">
                    {problems.map(idx => createTab(idx, data?.problemComplete?.[idx] || false))}
                </TabList>

                <TabPanels fontFamily={"Montserrat"} fontWeight={600}>
                    <Panel> <Question0 data={data} setData={setData} /> </Panel>
                    <Panel> <Question1 data={data} setData={setData}/> </Panel>
                    <Panel> <Question2 data={data} setData={setData}/> </Panel>
                    <Panel> <Question3 data={data} setData={setData}/> </Panel>
                    <Panel> <Question4 data={data} setData={setData} /> </Panel>
                    <Panel> <Question5 data={data} setData={setData} /> </Panel>
                    <Panel> <Question6 data={data} setData={setData} /> </Panel>
                    <Panel> <Question7 data={data} setData={setData}/> </Panel>
                    <Panel> <Question8 data={data} setData={setData}/> </Panel>
                </TabPanels>
            </Tabs>
        </PageContents>
    )
}