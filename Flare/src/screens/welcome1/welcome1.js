import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class Welcome1 extends Component {

  constructor(props) {
      super(props);
      this.state = {
          
      };
  }


  handlePress(target, owner) {
    if (this.props.onPress) {
        let name;
        let id;
        let index = -1;
        if (target.search("::") > -1) {
            const varCount = target.split("::").length;
            if (varCount === 2) {
                name = target.split("::")[0];
                id = target.split("::")[1];
            } else if (varCount === 3) {
                name = target.split("::")[0];
                index = parseInt(target.split("::")[1]);
                id = target.split("::")[2];
            }
        } else {
            name = target;
        }
        this.props.onPress({ type: 'button', name: name, index: index, id: id, owner: owner });
    }
  }

  handleChangeTextinput(name, value) {
      let id;
      let index = -1;
      if (name.search('::') > -1) {
          const varCount = name.split("::").length;
          if (varCount === 2) {
              name = name.split("::")[0];
              id = name.split("::")[1];
          } else if (varCount === 3) {
              name = name.split("::")[0];
              index = name.split("::")[1];
              id = name.split("::")[2];
          }
      } else {
          name = name;
      }
      let state = this.state;
      state[name.split('::').join('')] = value;
      this.setState(state, () => {
          if (this.props.onChange) {
              this.props.onChange({ type: 'textinput', name: name, value: value, index: index, id: id });
          }
      });
  }

  render() {
    
    return (
    <ScrollView data-layer="74f31ffb-50eb-4104-a9fa-8b7d52f5aac4" style={styles.welcome1}>
        <ReactImage data-layer="831480b2-3594-4271-92cf-3ae0103db0a5" source={require('./assets/background.png')} style={styles.welcome1_background} />
        <TouchableHighlight onPress={this.handlePress.bind(this, 'loginButton')}>
            <View data-layer="709125da-1fec-449d-b59b-d83a1069934e" style={styles.welcome1_loginButton}>
                <View data-layer="07aebfe6-2a44-436f-bfd9-c76c0667be25" style={styles.welcome1_loginButton_xa6e18ae5}>
                    <View data-layer="29471104-9009-41c0-b508-70edce2bf631" style={styles.welcome1_loginButton_xa6e18ae5_loginRectangle}></View>
                    <Text data-layer="4ab7c880-c098-47b7-a4e7-ac2ab700ad12" style={styles.welcome1_loginButton_xa6e18ae5_login}>LOGIN</Text>
                </View>
            </View>
        </TouchableHighlight>
        <Text data-layer="a24d20ec-a095-4cd8-a158-59e5e9e83f26" style={styles.welcome1_alreadyHaveAnAccount}>ALREADY HAVE AN ACCOUNT?</Text>
        <Svg data-layer="ce11c8fc-255e-40df-8f65-e96a1df810e7" style={styles.welcome1_line25} preserveAspectRatio="none" viewBox="0 -0.5 125 1" fill="transparent"><SvgPath d="M 125 0 L 0 0"  /></Svg>
        <Text data-layer="b06da0c8-c693-495d-b2cb-e2814e861c49" style={styles.welcome1_or}>OR</Text>
        <Svg data-layer="8579bc89-c504-454e-b81d-4253e39f7804" style={styles.welcome1_line24} preserveAspectRatio="none" viewBox="0 -0.5 124 1" fill="transparent"><SvgPath d="M 124 0 L 0 0"  /></Svg>
        <TouchableHighlight onPress={this.handlePress.bind(this, 'signUpButton')}>
            <View data-layer="bb590824-a5c6-48d4-88c9-b347afee5c7c" style={styles.welcome1_signUpButton}>
                <View data-layer="e3ab30fa-593f-4a83-b4a3-6eb6c9ce7458" style={styles.welcome1_signUpButton_x13d229d6}>
                    <View data-layer="003472ae-c0ba-47a3-a521-508ea3b6716d" style={styles.welcome1_signUpButton_x13d229d6_signUpRectangle}></View>
                    <Text data-layer="1db35e63-abab-455a-8746-636253223b91" style={styles.welcome1_signUpButton_x13d229d6_signUp}>SIGN UP</Text>
                </View>
            </View>
        </TouchableHighlight>
        <View data-layer="6d3ff067-9a97-4f1a-8c24-9efb94d79a65" style={styles.welcome1_lensFlare}>
            <Svg data-layer="beb04585-b933-4af3-8cc3-1dc61431d3d8" style={styles.welcome1_lensFlare_ellipseBigBorder} preserveAspectRatio="none" viewBox="-0.75 -0.75 165.37646484375 165.37646484375" fill="transparent"><SvgPath d="M 81.93825531005859 0 C 127.1914978027344 0 163.8765106201172 36.68500900268555 163.8765106201172 81.93825531005859 C 163.8765106201172 127.1914978027344 127.1914978027344 163.8765106201172 81.93825531005859 163.8765106201172 C 36.68500900268555 163.8765106201172 0 127.1914978027344 0 81.93825531005859 C 0 36.68500900268555 36.68500900268555 0 81.93825531005859 0 Z"  /></Svg>
            <Svg data-layer="e8a793a0-bbdc-4d40-9a14-90208a2deaac" style={styles.welcome1_lensFlare_ellipse1} preserveAspectRatio="none" viewBox="0 0 21.85009765625 21.8502197265625" fill="rgba(239, 71, 58, 1)"><SvgPath d="M 10.92510032653809 0 C 16.95886611938477 0 21.85020065307617 4.891334533691406 21.85020065307617 10.92510032653809 C 21.85020065307617 16.95886611938477 16.95886611938477 21.85020065307617 10.92510032653809 21.85020065307617 C 4.891334533691406 21.85020065307617 0 16.95886611938477 0 10.92510032653809 C 0 4.891334533691406 4.891334533691406 0 10.92510032653809 0 Z"  /></Svg>
            <Svg data-layer="f83d8546-b661-4f06-9ac4-f8bfcb1cd3f5" style={styles.welcome1_lensFlare_ellipse2} preserveAspectRatio="none" viewBox="0 0 21.85009765625 21.8502197265625" fill="rgba(239, 71, 58, 1)"><SvgPath d="M 10.92510032653809 0 C 16.95886611938477 0 21.85020065307617 4.891334533691406 21.85020065307617 10.92510032653809 C 21.85020065307617 16.95886611938477 16.95886611938477 21.85020065307617 10.92510032653809 21.85020065307617 C 4.891334533691406 21.85020065307617 0 16.95886611938477 0 10.92510032653809 C 0 4.891334533691406 4.891334533691406 0 10.92510032653809 0 Z"  /></Svg>
            <Svg data-layer="92e0282c-784d-45b3-931b-c81555c21753" style={styles.welcome1_lensFlare_ellipse3} preserveAspectRatio="none" viewBox="0 0 21.85009765625 21.8502197265625" fill="rgba(239, 71, 58, 1)"><SvgPath d="M 10.92510032653809 0 C 16.95886611938477 0 21.85020065307617 4.891334533691406 21.85020065307617 10.92510032653809 C 21.85020065307617 16.95886611938477 16.95886611938477 21.85020065307617 10.92510032653809 21.85020065307617 C 4.891334533691406 21.85020065307617 0 16.95886611938477 0 10.92510032653809 C 0 4.891334533691406 4.891334533691406 0 10.92510032653809 0 Z"  /></Svg>
            <Svg data-layer="0184b8e2-05c0-40b9-b3ad-74d8d8bb9fa2" style={styles.welcome1_lensFlare_ellipse4} preserveAspectRatio="none" viewBox="0 0 21.85009765625 21.8502197265625" fill="rgba(239, 71, 58, 1)"><SvgPath d="M 10.92510032653809 0 C 16.95886611938477 0 21.85020065307617 4.891334533691406 21.85020065307617 10.92510032653809 C 21.85020065307617 16.95886611938477 16.95886611938477 21.85020065307617 10.92510032653809 21.85020065307617 C 4.891334533691406 21.85020065307617 0 16.95886611938477 0 10.92510032653809 C 0 4.891334533691406 4.891334533691406 0 10.92510032653809 0 Z"  /></Svg>
            <Svg data-layer="8aee1fe1-2de2-42c0-a87a-14d6ef4a0490" style={styles.welcome1_lensFlare_ellipse5} preserveAspectRatio="none" viewBox="0 0 21.85009765625 21.8502197265625" fill="rgba(239, 71, 58, 1)"><SvgPath d="M 10.92510032653809 0 C 16.95886611938477 0 21.85020065307617 4.891334533691406 21.85020065307617 10.92510032653809 C 21.85020065307617 16.95886611938477 16.95886611938477 21.85020065307617 10.92510032653809 21.85020065307617 C 4.891334533691406 21.85020065307617 0 16.95886611938477 0 10.92510032653809 C 0 4.891334533691406 4.891334533691406 0 10.92510032653809 0 Z"  /></Svg>
            <Svg data-layer="cdab66d5-2f13-4471-8f58-e2fc1f079818" style={styles.welcome1_lensFlare_ellipse6} preserveAspectRatio="none" viewBox="0 0 38.23779296875 38.23779296875" fill="rgba(239, 71, 58, 1)"><SvgPath d="M 19.11892509460449 0 C 29.67801666259766 0 38.23785018920898 8.559834480285645 38.23785018920898 19.11892509460449 C 38.23785018920898 29.67801666259766 29.67801666259766 38.23785018920898 19.11892509460449 38.23785018920898 C 8.559834480285645 38.23785018920898 0 29.67801666259766 0 19.11892509460449 C 0 8.559834480285645 8.559834480285645 0 19.11892509460449 0 Z"  /></Svg>
            <Svg data-layer="cd1eeeab-c133-4328-a4b4-bf0543005abb" style={styles.welcome1_lensFlare_ellipse7} preserveAspectRatio="none" viewBox="0 0 21.85009765625 21.8502197265625" fill="rgba(239, 71, 58, 1)"><SvgPath d="M 10.92510032653809 0 C 16.95886611938477 0 21.85020065307617 4.891334533691406 21.85020065307617 10.92510032653809 C 21.85020065307617 16.95886611938477 16.95886611938477 21.85020065307617 10.92510032653809 21.85020065307617 C 4.891334533691406 21.85020065307617 0 16.95886611938477 0 10.92510032653809 C 0 4.891334533691406 4.891334533691406 0 10.92510032653809 0 Z"  /></Svg>
            <Svg data-layer="39d86f3f-c9b2-4ed9-b4b2-4f2b9f0cf230" style={styles.welcome1_lensFlare_ellipse8} preserveAspectRatio="none" viewBox="0 0 10.925048828125 10.925048828125" fill="rgba(239, 71, 58, 1)"><SvgPath d="M 5.462550163269043 0 C 8.479433059692383 0 10.92510032653809 2.445667266845703 10.92510032653809 5.462550163269043 C 10.92510032653809 8.479433059692383 8.479433059692383 10.92510032653809 5.462550163269043 10.92510032653809 C 2.445667266845703 10.92510032653809 0 8.479433059692383 0 5.462550163269043 C 0 2.445667266845703 2.445667266845703 0 5.462550163269043 0 Z"  /></Svg>
        </View>
        <Text data-layer="e591e2f7-28b2-4655-ac09-de955ecca618" style={styles.welcome1_weHaveToMakeSureYoureHuman}>WE HAVE
TO MAKE
SURE
YOU’RE
HUMAN.</Text>
    </ScrollView>
    );
  }
}

Welcome1.propTypes = {

}

Welcome1.defaultProps = {

}


const styles = StyleSheet.create({
  "welcome1": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 375,
    "height": 812,
    "left": 0,
    "top": 0
  },
  "welcome1_background": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "width": 1442,
    "height": 812,
    "left": -539,
    "top": 0
  },
  "welcome1_background_flares": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 1442,
    "height": 812,
    "left": 0,
    "top": 0
  },
  "welcome1_background_backgroundBlur": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 375,
    "height": 812,
    "left": 539,
    "top": 0
  },
  "welcome1_loginButton": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 300,
    "height": 50,
    "left": 38,
    "top": 722
  },
  "welcome1_loginButton_xa6e18ae5": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 300,
    "height": 50,
    "left": 0,
    "top": 0
  },
  "welcome1_loginButton_xa6e18ae5_loginRectangle": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 4,
    "borderTopColor": "rgba(239, 71, 58, 1)",
    "borderRightWidth": 4,
    "borderRightColor": "rgba(239, 71, 58, 1)",
    "borderBottomWidth": 4,
    "borderBottomColor": "rgba(239, 71, 58, 1)",
    "borderLeftWidth": 4,
    "borderLeftColor": "rgba(239, 71, 58, 1)",
    "borderTopLeftRadius": 25,
    "borderTopRightRadius": 25,
    "borderBottomLeftRadius": 25,
    "borderBottomRightRadius": 25,
    "width": 300,
    "height": 50,
    "left": 0,
    "top": 0
  },
  "welcome1_loginButton_xa6e18ae5_login": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(239, 71, 58, 1)",
    "fontSize": 17,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Poppins",
    "textAlign": "left",
    "lineHeight": 100,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 57,
    "height": 107,
    "left": 121,
    "top": -25
  },
  "welcome1_alreadyHaveAnAccount": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 214, 191, 1)",
    "fontSize": 15,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Poppins",
    "textAlign": "left",
    "lineHeight": 60,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 250,
    "height": 66,
    "left": 63,
    "top": 676.5
  },
  "welcome1_line25": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 125,
    "height": 1,
    "left": 213.5,
    "top": 682
  },
  "welcome1_or": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 214, 191, 1)",
    "fontSize": 17,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Poppins",
    "textAlign": "left",
    "lineHeight": 60,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 26,
    "height": 67,
    "left": 175,
    "top": 652
  },
  "welcome1_line24": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 124,
    "height": 1,
    "left": 38.5,
    "top": 682
  },
  "welcome1_signUpButton": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 300,
    "height": 50,
    "left": 38,
    "top": 592
  },
  "welcome1_signUpButton_x13d229d6": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 300,
    "height": 50,
    "left": 0,
    "top": 0
  },
  "welcome1_signUpButton_x13d229d6_signUpRectangle": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(239, 71, 58, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 25,
    "borderTopRightRadius": 25,
    "borderBottomLeftRadius": 25,
    "borderBottomRightRadius": 25,
    "width": 300,
    "height": 50,
    "left": 0,
    "top": 0
  },
  "welcome1_signUpButton_x13d229d6_signUp": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 17,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Poppins",
    "textAlign": "left",
    "lineHeight": 100,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 75,
    "height": 107,
    "left": 112,
    "top": -25
  },
  "welcome1_lensFlare": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 260,
    "height": 260,
    "left": 58.34,
    "top": 70.81
  },
  "welcome1_lensFlare_ellipseBigBorder": {
    "opacity": 0.25,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 163.88,
    "height": 163.88,
    "left": 0,
    "top": 0
  },
  "welcome1_lensFlare_ellipse1": {
    "opacity": 0.25,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 21.85,
    "height": 21.85,
    "left": 155.07,
    "top": 155.07
  },
  "welcome1_lensFlare_ellipse2": {
    "opacity": 0.25,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 21.85,
    "height": 21.85,
    "left": 166.15,
    "top": 166.15
  },
  "welcome1_lensFlare_ellipse3": {
    "opacity": 0.25,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 21.85,
    "height": 21.85,
    "left": 177.23,
    "top": 177.23
  },
  "welcome1_lensFlare_ellipse4": {
    "opacity": 0.25,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 21.85,
    "height": 21.85,
    "left": 182.77,
    "top": 182.77
  },
  "welcome1_lensFlare_ellipse5": {
    "opacity": 0.25,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 21.85,
    "height": 21.85,
    "left": 199.91,
    "top": 199.91
  },
  "welcome1_lensFlare_ellipse6": {
    "opacity": 0.25,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 38.24,
    "height": 38.24,
    "left": 221.76,
    "top": 221.76
  },
  "welcome1_lensFlare_ellipse7": {
    "opacity": 0.25,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 21.85,
    "height": 21.85,
    "left": 221.76,
    "top": 221.76
  },
  "welcome1_lensFlare_ellipse8": {
    "opacity": 0.25,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 10.93,
    "height": 10.93,
    "left": 243.61,
    "top": 243.61
  },
  "welcome1_weHaveToMakeSureYoureHuman": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 214, 191, 1)",
    "fontSize": 67,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Poppins",
    "textAlign": "left",
    "lineHeight": 96,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 333,
    "height": 506,
    "left": 20,
    "top": 38.5
  }
});