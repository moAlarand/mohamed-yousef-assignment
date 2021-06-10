import {useFormik} from 'formik';
import React, {useEffect} from 'react';
import {Card} from 'react-native-paper';
import AppButton from '../common/button/button';
import AppInput from '../common/input/input';
import * as yup from 'yup';
import {translate} from '../../i18n';
import {Movie} from '../../models/movie';

interface Props {
  onSubmit: (movie: Movie) => void;
  movie?: Movie;
}

const validationSchema = () =>
  yup.object().shape({
    description: yup.string().required(translate('errors.required') as string),
    name: yup.string().required(translate('errors.required') as string),
    rate: yup
      .string()
      .required(translate('errors.required') as string)
      .test(
        'number',
        translate('errors.invalidnumber') as string,
        value => !!value && !!parseInt(value),
      )
      .test(
        'max or min',
        translate('errors.maxOrMin') as string,
        value => !!value && parseInt(value) < 6 && parseInt(value) > 0,
      ),
  });

export const MovieForm = (props: Props) => {
  console.log(
    '🚀 ~ file: MovieForm.tsx ~ line 17 ~ MovieForm ~  props.movie',
    props.movie,
  );

  const initialValues = props.movie || {
    name: '',
    id: Math.random() * 1000,
    description: '',
    url: 'https://upload.wikimedia.org/wikipedia/en/2/2a/Greenland_%28film%29.png',
    rate: '',
  };
  const formik = useFormik({
    validationSchema: validationSchema(),
    initialValues,
    onSubmit: (values, {resetForm}) => {
      props.onSubmit(values);
      resetForm(initialValues as any);
    },
  });

  useEffect(() => {
    formik.setValues(props.movie || initialValues);
  }, [props.movie]);

  return (
    <Card elevation={5} style={{margin: 20, borderRadius: 5, padding: 20}}>
      <AppInput
        value={formik.values.name}
        onChangeText={formik.handleChange('name')}
        onBlur={formik.handleBlur('name')}
        errorMessage={formik.touched.name ? formik.errors.name : ''}
        txPlaceholder="movie.name"
      />
      <AppInput
        value={formik.values.rate}
        onChangeText={formik.handleChange('rate')}
        onBlur={formik.handleBlur('rate')}
        errorMessage={formik.touched.rate ? formik.errors.rate : ''}
        txPlaceholder="movie.rate"
      />
      <AppInput
        value={formik.values.description}
        onChangeText={formik.handleChange('description')}
        onBlur={formik.handleBlur('description')}
        errorMessage={
          formik.touched.description ? formik.errors.description : ''
        }
        txPlaceholder="movie.desc"
      />
      <AppButton
        onPress={formik.handleSubmit}
        tx={props.movie ? 'movie.update' : 'category.create'}
      />
    </Card>
  );
};
