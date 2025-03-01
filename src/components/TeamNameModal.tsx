import { Button, FormControl, ModalOverlay, ModalContent, Modal, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Input } from "@chakra-ui/react"
import axios from "axios";
import { ChangeEvent, useState } from "react";
import { Config } from "../config";

interface TeamNameModalProps {
  isOpen: boolean,
  onClose: () => void;
}

export default function TeamNameModal({ isOpen, onClose }: TeamNameModalProps) {
  const [team, setTeam] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const jwt = localStorage.getItem("jwt");

  if (!jwt) {
    window.location.href = "/auth/";
    return null;
  }

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => setTeam(e.target.value);
  const isError = team === ''

  const createTeam = async () => {
    try {
      setIsSubmitting(true);

      const response = await axios.post(`${Config.API_BASE_URL}/puzzle/create/`, { teamName: team }, {
        headers: {
          Authorization: jwt
        }
      });

      if (response.status == 200) {
        console.log("Team created successfully");
        onClose();
      } else {
        console.error("Failed to create team");
      }
    } catch (error) {
      console.error("An error occurred", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Welcome! What is your team name?</ModalHeader>
          <ModalBody>
            <FormControl isInvalid={isError}>

              <Input placeholder='TeamHack' size='lg' _placeholder={{ color: "gray" }} onChange={handleInput} />
            </FormControl>

          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={
              async () => {
                if (!isError) {
                  console.log(team);
                  await createTeam();
                  onClose();
                }
              }
            }
              isLoading={isSubmitting}>
              Create team!
            </Button>
            <Button variant='ghost' onClick={() => window.location.href = "/"}>EXIT</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
