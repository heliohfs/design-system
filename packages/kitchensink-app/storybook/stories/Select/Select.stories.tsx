import { storiesOf } from '@storybook/react-native';
import React, { useState } from 'react';
import { ArtBoard } from '../ArtBoard';
import { Input, Select, Text } from '@tecsinapse/react-native-kit';

storiesOf('Input', module)
  .addDecorator(getStory => <ArtBoard>{getStory()}</ArtBoard>)
  .add('Select', () => {
    return <Component />;
  });

const options = new Array(20).fill(undefined).map((_, index) => ({
  key: index,
  label: `Option ${index}`,
}));

const searchBar = (<Input placeholder={"Busque a opção desejada"}/>)

const Component = () => {
  const [multiValue, setMultiValue] = useState<string[]>([]);
  const [singleValue, setSingleValue] = useState<string | undefined>();

  function handleSelectMultipleValues(key: string) {
    setMultiValue(value => {
      if (value.includes(key))
        return value.filter(value => value !== key);
      else
        return value.concat([key]);
    });
  }

  function handleSelectSingleValue(key: string) {
    setSingleValue(value => value === key ? undefined : key)
  }

  return (
    <>
      <Select
        options={options}
        label="Multiple values"
        placeholder="Select some values"
        value={multiValue}
        type={'multi'}
        onSelect={handleSelectMultipleValues}
        labelExtractor={item => item.label}
        keyExtractor={item => String(item.key)}
        searchBar={searchBar}
        selectModalTitle={'Selecione uma opção'}
        style={{
          marginBottom: 10
        }}
      />
      <Select
        options={options}
        label="Single value"
        placeholder="Select one value"
        value={singleValue}
        type={'single'}
        onSelect={handleSelectSingleValue}
        selectModalTitle={'Selecione uma opção'}
        labelExtractor={item => item.label}
        searchBar={searchBar}
        keyExtractor={item => String(item.key)}
      />
    </>
  );
};
