import {useFormik} from 'formik';
import React from 'react';
import {View} from 'react-native';
import {Card} from 'react-native-paper';
import {Category} from '../../models/category';
import AppButton from '../common/button/button';
import AppInput from '../common/input/input';
import * as yup from 'yup';
import {translate} from '../../i18n';

interface Props {
  onSubmit: (category: Category) => void;
}

export const CategoryForm = (props: Props) => {
  const initialValues = {
    name: '',
    id: Math.random() * 1000,
    description: '',
    url: 'https://upload.wikimedia.org/wikipedia/en/2/2a/Greenland_%28film%29.png',
    movies: [],
  };
  const formik = useFormik({
    validationSchema: yup.object().shape({
      description: yup.string().required(translate('errors.required')),
      name: yup.string().required(translate('errors.required')),
    }),
    initialValues,
    onSubmit: (values, {resetForm}) => {
      props.onSubmit(values);
      resetForm(initialValues as any);
    },
  });

  return (
    <Card elevation={5} style={{margin: 20, borderRadius: 5, padding: 20}}>
      <AppInput
        value={formik.values.name}
        onChangeText={formik.handleChange('name')}
        onBlur={formik.handleBlur('name')}
        errorMessage={formik.touched.name ? formik.errors.name : ''}
        txPlaceholder="category.name"
      />
      <AppInput
        value={formik.values.description}
        onChangeText={formik.handleChange('description')}
        onBlur={formik.handleBlur('description')}
        errorMessage={
          formik.touched.description ? formik.errors.description : ''
        }
        txPlaceholder="category.desc"
      />
      <AppButton onPress={formik.handleSubmit} tx="category.create" />
    </Card>
  );
};
