import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class SignUpTfa extends Component {

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
    <ScrollView data-layer="0ed8b2c0-a58c-4c55-8278-4c2e0510bf1d" style={styles.signUpTfa}>
        <ReactImage data-layer="8aaabb5f-c700-4636-8e0a-abd6b074baae" source={require('./assets/background.png')} style={styles.signUpTfa_background} />
        <TouchableHighlight onPress={this.handlePress.bind(this, 'continueButton')}>
            <View data-layer="23a0f709-d22a-47a6-af9e-c83142531ff2" style={styles.signUpTfa_continueButton}>
                <View data-layer="a6017b55-0414-422f-8013-602136c5214d" style={styles.signUpTfa_continueButton_x6365830a}>
                    <Text data-layer="e0b97f23-69f0-4e74-b988-73b909b561a6" style={styles.signUpTfa_continueButton_x6365830a_x6a6aeb79}>􀁽</Text>
                </View>
            </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.handlePress.bind(this, 'loginButton')}>
            <View data-layer="29d4e7a3-8d9e-4ed6-8234-696df71c43c1" style={styles.signUpTfa_loginButton}>
                <View data-layer="1d4b6595-1c7a-4e7f-97b9-0be9cd779262" style={styles.signUpTfa_loginButton_x73b70c2c}>
                    <View data-layer="564351dc-b132-494f-bc40-21e6b741af62" style={styles.signUpTfa_loginButton_x73b70c2c_loginRectangle}></View>
                    <Text data-layer="8f4b7f4e-7410-4d12-90c2-4d35745f5c57" style={styles.signUpTfa_loginButton_x73b70c2c_back}>BACK</Text>
                </View>
            </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.handlePress.bind(this, 'resendButton')}>
            <View data-layer="544e0c6b-06d6-45af-9861-d8245dad560d" style={styles.signUpTfa_resendButton}>
                <View data-layer="aed7f91f-dede-4766-b786-c928ed7086f5" style={styles.signUpTfa_resendButton_xd77482dd}>
                    <View data-layer="ab68f45a-ba10-4ebb-8ac3-e61cbbcdb4c2" style={styles.signUpTfa_resendButton_xd77482dd_resendRectangle}></View>
                    <Text data-layer="378b3916-7a45-43fb-94b9-0e8091078d5c" style={styles.signUpTfa_resendButton_xd77482dd_resend}>RESEND</Text>
                </View>
            </View>
        </TouchableHighlight>
        <View data-layer="bf63723c-bdc2-4a19-abb8-70c51baa5223" style={styles.signUpTfa_rectangle}></View>
        <View data-layer="3375e513-768d-4c14-9cf6-2155f63be2cb" style={styles.signUpTfa_tfa}>
            <Svg data-layer="b19a4027-504f-419d-8e3c-64e5c820205a" style={styles.signUpTfa_tfa_underline} preserveAspectRatio="none" viewBox="-0.75 -0.75 277.741943359375 1.5" fill="rgba(112, 112, 112, 1)"><SvgPath d="M 0 0 L 126.2512130737305 0 L 276.2420043945312 0"  /></Svg>
            <TextInput data-layer="00f2aa57-16c1-427b-b62f-13b6a0c871c4" style={styles.signUpTfa_tfa_form} type="text" id="form-ebb934a21cc1" name='form' placeholder='4 Digit Code' placeholderTextColor="rgba(112, 112, 112, 1)"  onChangeText={this.handleChangeTextinput.bind(this, 'form')} />
            <Text data-layer="282de731-bad6-4728-b2eb-7488f3229001" style={styles.signUpTfa_tfa_x0064de9e}>􀞚</Text>
        </View>
        <View data-layer="83d40426-f69e-49a0-8a38-01d28ac75b3c" style={styles.signUpTfa_lensFlare}>
            <Svg data-layer="b251821a-d044-4b34-9f71-2c8a94276f65" style={styles.signUpTfa_lensFlare_ellipseBigBorder} preserveAspectRatio="none" viewBox="-0.75 -0.75 151.5 151.5" fill="transparent"><SvgPath d="M 75 0 C 116.4213562011719 0 150 33.57864761352539 150 75 C 150 116.4213562011719 116.4213562011719 150 75 150 C 33.57864761352539 150 0 116.4213562011719 0 75 C 0 33.57864761352539 33.57864761352539 0 75 0 Z"  /></Svg>
            <Svg data-layer="015a9945-29bd-4761-8964-bf706a4afc22" style={styles.signUpTfa_lensFlare_ellipse1} preserveAspectRatio="none" viewBox="0 0 20 20" fill="rgba(239, 71, 58, 1)"><SvgPath d="M 10 0 C 15.52284812927246 0 20 4.477152347564697 20 10 C 20 15.52284812927246 15.52284812927246 20 10 20 C 4.477152347564697 20 0 15.52284812927246 0 10 C 0 4.477152347564697 4.477152347564697 0 10 0 Z"  /></Svg>
            <Svg data-layer="c3879808-1a6f-4df7-a923-bcac6f04fb07" style={styles.signUpTfa_lensFlare_ellipse2} preserveAspectRatio="none" viewBox="0 0 20 20" fill="rgba(239, 71, 58, 1)"><SvgPath d="M 10 0 C 15.52284812927246 0 20 4.477152347564697 20 10 C 20 15.52284812927246 15.52284812927246 20 10 20 C 4.477152347564697 20 0 15.52284812927246 0 10 C 0 4.477152347564697 4.477152347564697 0 10 0 Z"  /></Svg>
            <Svg data-layer="6b2d7667-81f4-44cf-b1e2-f9fed1714b68" style={styles.signUpTfa_lensFlare_ellipse3} preserveAspectRatio="none" viewBox="0 0 20 20" fill="rgba(239, 71, 58, 1)"><SvgPath d="M 10 0 C 15.52284812927246 0 20 4.477152347564697 20 10 C 20 15.52284812927246 15.52284812927246 20 10 20 C 4.477152347564697 20 0 15.52284812927246 0 10 C 0 4.477152347564697 4.477152347564697 0 10 0 Z"  /></Svg>
            <Svg data-layer="41953c5d-d85a-4be4-8da5-66b063f11d4b" style={styles.signUpTfa_lensFlare_ellipse4} preserveAspectRatio="none" viewBox="0 0 20 20" fill="rgba(239, 71, 58, 1)"><SvgPath d="M 10 0 C 15.52284812927246 0 20 4.477152347564697 20 10 C 20 15.52284812927246 15.52284812927246 20 10 20 C 4.477152347564697 20 0 15.52284812927246 0 10 C 0 4.477152347564697 4.477152347564697 0 10 0 Z"  /></Svg>
            <Svg data-layer="10c9ba18-addb-499f-bf94-feab3d8ee4af" style={styles.signUpTfa_lensFlare_ellipse5} preserveAspectRatio="none" viewBox="0 0 20 20" fill="rgba(239, 71, 58, 1)"><SvgPath d="M 10 0 C 15.52284812927246 0 20 4.477152347564697 20 10 C 20 15.52284812927246 15.52284812927246 20 10 20 C 4.477152347564697 20 0 15.52284812927246 0 10 C 0 4.477152347564697 4.477152347564697 0 10 0 Z"  /></Svg>
            <Svg data-layer="ed9b7310-9286-4db4-b245-ad15414adaac" style={styles.signUpTfa_lensFlare_ellipse6} preserveAspectRatio="none" viewBox="0 0 35 35" fill="rgba(239, 71, 58, 1)"><SvgPath d="M 17.5 0 C 27.16498184204102 0 35 7.835017204284668 35 17.5 C 35 27.16498184204102 27.16498184204102 35 17.5 35 C 7.835017204284668 35 0 27.16498184204102 0 17.5 C 0 7.835017204284668 7.835017204284668 0 17.5 0 Z"  /></Svg>
            <Svg data-layer="def05a22-b809-4ddf-908a-ed3de4bf3f38" style={styles.signUpTfa_lensFlare_ellipse7} preserveAspectRatio="none" viewBox="0 0 20 20" fill="rgba(239, 71, 58, 1)"><SvgPath d="M 10 0 C 15.52284812927246 0 20 4.477152347564697 20 10 C 20 15.52284812927246 15.52284812927246 20 10 20 C 4.477152347564697 20 0 15.52284812927246 0 10 C 0 4.477152347564697 4.477152347564697 0 10 0 Z"  /></Svg>
            <Svg data-layer="852d9c38-ff4c-47e0-8135-75e31f59db43" style={styles.signUpTfa_lensFlare_ellipse8} preserveAspectRatio="none" viewBox="0 0 10 10" fill="rgba(239, 71, 58, 1)"><SvgPath d="M 5 0 C 7.76142406463623 0 10 2.238576173782349 10 5 C 10 7.76142406463623 7.76142406463623 10 5 10 C 2.238576173782349 10 0 7.76142406463623 0 5 C 0 2.238576173782349 2.238576173782349 0 5 0 Z"  /></Svg>
        </View>
        <Text data-layer="5b0bfd8b-cc37-47d3-9885-37d7be42cc16" style={styles.signUpTfa_weSentYouA4DigitCodeenterItHere}>WE SENT YOU A 4 DIGIT CODE.
ENTER IT HERE.</Text>
        <Text data-layer="30559018-59dc-4b6e-8ebf-f0ec4e6e3299" style={styles.signUpTfa_checkyourmessages}>CHECK
YOUR
MESSAGES.</Text>
    </ScrollView>
    );
  }
}

SignUpTfa.propTypes = {

}

SignUpTfa.defaultProps = {

}


const styles = StyleSheet.create({
  "signUpTfa": {
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
  "signUpTfa_background": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "width": 1442,
    "height": 812,
    "left": -559,
    "top": 0
  },
  "signUpTfa_background_flares": {
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
  "signUpTfa_background_backgroundBlur": {
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
    "left": 559,
    "top": 0
  },
  "signUpTfa_continueButton": {
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
    "width": 70,
    "height": 71,
    "left": 265,
    "top": 712
  },
  "signUpTfa_continueButton_x6365830a": {
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
    "width": 70,
    "height": 71,
    "left": 0,
    "top": 0
  },
  "signUpTfa_continueButton_x6365830a_x6a6aeb79": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(239, 71, 58, 1)",
    "fontSize": 60,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "SF Pro Text",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 70,
    "height": 71,
    "left": 0,
    "top": 0
  },
  "signUpTfa_loginButton": {
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
    "width": 125,
    "height": 50,
    "left": 40,
    "top": 722
  },
  "signUpTfa_loginButton_x73b70c2c": {
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
    "width": 125,
    "height": 50,
    "left": 0,
    "top": 0
  },
  "signUpTfa_loginButton_x73b70c2c_loginRectangle": {
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
    "width": 125,
    "height": 50,
    "left": 0,
    "top": 0
  },
  "signUpTfa_loginButton_x73b70c2c_back": {
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
    "width": 52,
    "height": 107,
    "left": 37,
    "top": -25
  },
  "signUpTfa_resendButton": {
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
    "width": 125,
    "height": 50,
    "left": 230,
    "top": 484
  },
  "signUpTfa_resendButton_xd77482dd": {
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
    "width": 125,
    "height": 50,
    "left": 0,
    "top": 0
  },
  "signUpTfa_resendButton_xd77482dd_resendRectangle": {
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
    "width": 125,
    "height": 50,
    "left": 0,
    "top": 0
  },
  "signUpTfa_resendButton_xd77482dd_resend": {
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
    "width": 71,
    "height": 107,
    "left": 27,
    "top": -25
  },
  "signUpTfa_rectangle": {
    "opacity": 0.8999999761581421,
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
    "borderTopLeftRadius": 10,
    "borderTopRightRadius": 10,
    "borderBottomLeftRadius": 10,
    "borderBottomRightRadius": 10,
    "width": 335,
    "height": 60,
    "left": 20,
    "top": 404
  },
  "signUpTfa_tfa": {
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
    "width": 300.24,
    "height": 30,
    "left": 37.76,
    "top": 419
  },
  "signUpTfa_tfa_underline": {
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
    "width": 278.24,
    "height": 2,
    "left": 23,
    "top": 28.5
  },
  "signUpTfa_tfa_form": {
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
    "paddingLeft": 5,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "textAlign": "left",
    "color": "rgba(0, 0, 0, 1)",
    "fontSize": 17,
    "fontFamily": "SF Pro Text",
    "width": 281,
    "height": 30,
    "left": 19,
    "top": 0
  },
  "signUpTfa_tfa_form_textbox": {
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
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 281,
    "height": 30,
    "left": 0,
    "top": 0
  },
  "signUpTfa_tfa_form_text": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 1)",
    "fontSize": 17,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "SF Pro Text",
    "textAlign": "left",
    "lineHeight": 83,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 276,
    "height": 86,
    "left": 5,
    "top": -26.5
  },
  "signUpTfa_tfa_form_x4DigitCode": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 17,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "SF Pro Text",
    "textAlign": "left",
    "lineHeight": 83,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 100,
    "height": 86,
    "left": 5,
    "top": -26.5
  },
  "signUpTfa_tfa_x0064de9e": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 17,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "SF Pro Text",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 20,
    "height": 20,
    "left": 0,
    "top": 5
  },
  "signUpTfa_lensFlare": {
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
    "width": 235,
    "height": 235,
    "left": 62,
    "top": 68
  },
  "signUpTfa_lensFlare_ellipseBigBorder": {
    "opacity": 0.25232601165771484,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 150,
    "height": 150,
    "left": 0,
    "top": 0
  },
  "signUpTfa_lensFlare_ellipse1": {
    "opacity": 0.25232601165771484,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 20,
    "height": 20,
    "left": 140,
    "top": 140
  },
  "signUpTfa_lensFlare_ellipse2": {
    "opacity": 0.25232601165771484,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 20,
    "height": 20,
    "left": 150,
    "top": 150
  },
  "signUpTfa_lensFlare_ellipse3": {
    "opacity": 0.25232601165771484,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 20,
    "height": 20,
    "left": 160,
    "top": 160
  },
  "signUpTfa_lensFlare_ellipse4": {
    "opacity": 0.25232601165771484,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 20,
    "height": 20,
    "left": 165,
    "top": 165
  },
  "signUpTfa_lensFlare_ellipse5": {
    "opacity": 0.25232601165771484,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 20,
    "height": 20,
    "left": 180,
    "top": 180
  },
  "signUpTfa_lensFlare_ellipse6": {
    "opacity": 0.25232601165771484,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 35,
    "height": 35,
    "left": 200,
    "top": 200
  },
  "signUpTfa_lensFlare_ellipse7": {
    "opacity": 0.25232601165771484,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 20,
    "height": 20,
    "left": 200,
    "top": 200
  },
  "signUpTfa_lensFlare_ellipse8": {
    "opacity": 0.25232601165771484,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 10,
    "height": 10,
    "left": 220,
    "top": 220
  },
  "signUpTfa_weSentYouA4DigitCodeenterItHere": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 214, 191, 1)",
    "fontSize": 15,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Poppins",
    "textAlign": "left",
    "lineHeight": 25,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 248,
    "height": 56,
    "left": 20,
    "top": 281
  },
  "signUpTfa_checkyourmessages": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 214, 191, 1)",
    "fontSize": 55,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Poppins",
    "textAlign": "left",
    "lineHeight": 73,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 340,
    "height": 241,
    "left": 20,
    "top": 42
  }
});