import { View, StyleSheet, } from 'react-native';
import React from 'react';
import { useFormik } from 'formik';
import validationSchema from './validations';
import { Input, FormControl, WarningOutlineIcon, Box , Button} from "native-base";


const FormWithFormik = () => {
  const { values, errors, touched, isSubmitting, handleSubmit, handleChange, handleBlur } = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
    onSubmit: async (values, bag) => {
      await new Promise((r) => setTimeout(r, 1000)); //1 saniye bekletme

      if (values.email === "test@test.com") {
        return bag.setErrors({ email: "Bu mail adresi zaten kullanılıyor." });
      }

      bag.resetForm(); //formu resetler

      console.log(values);
      console.log(bag);
    },
    validationSchema,
  });

  return (
    <View style={styles.container}>
      <Box alignItems="center" mb={2}>
        <FormControl isInvalid={errors.username && touched.username} w="100%">
          <FormControl.Label>Username</FormControl.Label>
          <Input
            placeholder="Username"
            value={values.username}
            onChangeText={handleChange("username")}
            onBlur={handleBlur("username")} //kutudan ayrıldığın anda hatayı gösterir.
            editable={!isSubmitting} //isSubmitting varsa edit edilememeli.
            height={50}
            fontSize={20}
          />
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            {errors.username}
          </FormControl.ErrorMessage>
        </FormControl>
      </Box>

      {/* <View style={styles.item}>
        <TextInput
          style={styles.input}
          placeholder="username"
          value={values.username}
          onChangeText={handleChange("username")}
          onBlur={handleBlur("username")} //kutudan ayrıldığın anda hatayı gösterir.
          editable={!isSubmitting} //isSubmitting varsa edit edilememeli.
        />
        {
          errors.username && touched.username && (<Text style={styles.error}>{errors.username}</Text>
          )}
      </View> */}

      <Box alignItems="center" mb={2}>
        <FormControl isInvalid={errors.email && touched.email} w="100%">
          <FormControl.Label>E-mail</FormControl.Label>
          <Input
            placeholder="e-mail"
            value={values.email}
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")} //kutudan ayrıldığın anda hatayı gösterir.
            editable={!isSubmitting} //isSubmitting varsa edit edilememeli.
            autoCapitalize='none'
            keyboardType='email-address'
            height={50}
            fontSize={20}
          />
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            {errors.email}
          </FormControl.ErrorMessage>
        </FormControl>
      </Box>

      {/* <View style={styles.item}>
        <TextInput
          style={styles.input}
          autoCapitalize='none'
          keyboardType='email-address'
          placeholder="e-mail"
          value={values.email}
          onChangeText={handleChange("email")}
          onBlur={handleBlur("email")}
          editable={!isSubmitting}
        />
        {
          errors.email && touched.email && (<Text style={styles.error}>{errors.email}</Text>
          )}
      </View> */}

      <Box alignItems="center" mb={2}>
        <FormControl isInvalid={errors.password && touched.password} w="100%">
          <FormControl.Label>Password</FormControl.Label>
          <Input
            placeholder="Password"
            secureTextEntry
            value={values.password}
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")} //kutudan ayrıldığın anda hatayı gösterir.
            editable={!isSubmitting} //isSubmitting varsa edit edilememeli.
            height={50}
            fontSize={20}
          />
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            {errors.password}
          </FormControl.ErrorMessage>
        </FormControl>
      </Box>

      {/* <View style={styles.item}>
        <TextInput
          style={styles.input}
          placeholder="password"
          secureTextEntry
          value={values.password}
          onChangeText={handleChange("password")}
          onBlur={handleBlur("password")}
          editable={!isSubmitting}
        />
        {
          errors.password && touched.password && (<Text style={styles.error}>{errors.password}</Text>
          )}
      </View> */}

<Box alignItems="center" mb={2}>
        <FormControl isInvalid={errors.passwordConfirm && touched.passwordConfirm} w="100%">
          <FormControl.Label>Password Confirm</FormControl.Label>
          <Input
            placeholder="Password Confirm"
            secureTextEntry
            value={values.passwordConfirm}
            onChangeText={handleChange("passwordConfirm")}
            onBlur={handleBlur("passwordConfirm")} //kutudan ayrıldığın anda hatayı gösterir.
            editable={!isSubmitting} //isSubmitting varsa edit edilememeli.
            height={50}
            fontSize={20}
          />
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            {errors.passwordConfirm}
          </FormControl.ErrorMessage>
        </FormControl>
      </Box>

      {/* <View style={styles.item}>
        <TextInput
          style={styles.input}
          placeholder="password confirm"
          secureTextEntry
          value={values.passwordConfirm}
          onChangeText={handleChange("passwordConfirm")}
          onBlur={handleBlur("passwordConfirm")}
          editable={!isSubmitting}
        />
        {
          errors.passwordConfirm && touched.passwordConfirm && (<Text style={styles.error}>{errors.passwordConfirm}</Text>
          )}
      </View> */}

      {/* <View style={styles.item}>
        <Button title="Register"
          onPress={handleSubmit}
          disabled={isSubmitting}
        />
      </View> */}

      <Button 
       size={"lg"}
       onPress={handleSubmit}
       isLoading={isSubmitting}
       isLoadingText="Submitting"
       disabled={isSubmitting}
       >
          REGISTER
        </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 20,

  },
  item: {
    marginBottom: 4,

  },

  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    fontSize: 24,
    width: "100%",

  },
  error: {
    color: "red",
  },
});

export default FormWithFormik;