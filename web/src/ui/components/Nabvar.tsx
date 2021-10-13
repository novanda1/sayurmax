import {
    Avatar,
    Box,
    Button,
    Container,
    Flex,
    Heading,
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverTrigger,
} from "@chakra-ui/react";
import { UserType } from "lib/generated/graphql";
import React from "react";

interface NabvarProps {
    user?: UserType;
}

export const Nabvar: React.FC<NabvarProps> = ({ user }) => {
    return (
        <Box py="4" boxShadow="md">
            <Container maxW="container.xl">
                <Flex justifyContent="space-between">
                    <Box>
                        <Heading size="md">Grocery</Heading>
                    </Box>
                    <Flex>
                        <AvatarPopover user={user} />
                    </Flex>
                </Flex>
            </Container>
        </Box>
    );
};

const AvatarPopover: React.FC<{ user: UserType }> = ({ user }) => {
    return (
        <Popover placement="bottom-end">
            <PopoverTrigger>
                <Button variant="unstyled" rounded="full">
                    <Avatar
                        size="sm"
                        name={user ? user.username : "A"}
                    ></Avatar>
                </Button>
            </PopoverTrigger>
            <PopoverContent>
                <PopoverBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore.
                </PopoverBody>
            </PopoverContent>
        </Popover>
    );
};
