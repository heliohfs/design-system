import styled from '@emotion/native';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { ArtBoard } from '../ArtBoard';
import { ProgressBar } from '@tecsinapse/react-native-kit';
import { Text, View } from 'react-native';

storiesOf('Progress', module)
  .addDecorator(getStory => <ArtBoard>{getStory()}</ArtBoard>)
  .add('ProgressBar', () => (
    <Container>
      <View>
        <Text>35/40</Text>
        <ProgressBar valueNow={35} valueMax={40} color={'success'} />
      </View>
      <View>
        <Text>109/240</Text>
        <ProgressBar valueNow={109} valueMax={240} color={'warning'} />
      </View>
      <View>
        <Text>2/10</Text>
        <ProgressBar valueNow={2} valueMax={10} color={'error'} />
      </View>
      <View>
        <Text>5/20</Text>
        <ProgressBar valueNow={5} valueMax={20} color={'primary'} />
      </View>
      <View>
        <Text>50%</Text>
        <ProgressBar segments={4} valueMin={-255} valueNow={372.5} valueMax={1000} color={'success'}/>
      </View>
      <View>
        <Text>50%</Text>
        <ProgressBar segments={4} valueNow={'1%'} color={'success'}/>
      </View>
    </Container>
  ));

const Container = styled.View`
  height: 100%;
  width: 100%;
  justify-content: space-around;
`;
