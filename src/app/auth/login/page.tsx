"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Heading,
  VStack,
  Text,
} from "@chakra-ui/react";

type LoginFormInputs = {
  username: string;
  password: string;
};

export default function Login() {
  const [error, setError] = useState("");
  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormInputs>();

  const onSubmit = async (data: LoginFormInputs) => {
    const res = await signIn("credentials", {
      redirect: false,
      username: data.username,
      password: data.password,
    });

    if (res?.error) {
      setError("Invalid username or password");
    } else {
      router.push("/");
    }
  };

  return (
    <Box maxW="sm" mx="auto" mt={10} p={6} borderWidth="1px" borderRadius="md">
      <Heading as="h1" size="lg" textAlign="center" mb={6}>
        Login
      </Heading>

      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={4}>
          {/* Username Field */}
          <FormControl isInvalid={!!errors.username}>
            <FormLabel htmlFor="username">Username</FormLabel>
            <Input
              id="username"
              type="text"
              {...register("username", {
                required: "Username is required",
              })}
            />
            <FormErrorMessage>
              {errors.username && errors.username.message}
            </FormErrorMessage>
          </FormControl>

          {/* Password Field */}
          <FormControl isInvalid={!!errors.password}>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              id="password"
              type="password"
              {...register("password", {
                required: "Password is required",
              })}
            />
            <FormErrorMessage>
              {errors.password && errors.password.message}
            </FormErrorMessage>
          </FormControl>

          {/* Error Message */}
          {error && (
            <Text color="red.500" fontSize="sm">
              {error}
            </Text>
          )}

          {/* Submit Button */}
          <Button
            colorScheme="teal"
            isLoading={isSubmitting}
            type="submit"
            width="full"
          >
            Login
          </Button>
        </VStack>
      </form>
    </Box>
  );
}
