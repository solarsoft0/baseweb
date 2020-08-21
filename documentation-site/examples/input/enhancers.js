// @flow
import * as React from 'react';
import {Block} from 'baseui/block';
import {Search} from 'baseui/icon';
import {Input} from 'baseui/input';

export default () => (
  <React.Fragment>
    <Input
      startEnhancer="@"
      placeholder="Input with a start enhancer"
    />
    <br />
    <Input
      endEnhancer=".00"
      placeholder="Input with an end enhancer"
    />
    <br />
    <Input
      startEnhancer="$"
      endEnhancer=".00"
      placeholder="Input with start and end enhancers"
    />
    <br />
    <Input
      endEnhancer={<Search size="18px" />}
      placeholder="Input with an icon enhancer"
    />
    <br />
    <Input
      startEnhancer={({$isFocused}) => (
        <Block color={$isFocused ? 'primary' : 'mono500'}>@</Block>
      )}
      endEnhancer={({$isFocused}) => (
        <Block color={$isFocused ? 'primary' : 'mono500'}>
          .com
        </Block>
      )}
      placeholder="Input with function enhancers."
    />
  </React.Fragment>
);
