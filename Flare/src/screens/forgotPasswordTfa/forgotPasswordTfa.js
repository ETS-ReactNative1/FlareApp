import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class ForgotPasswordTfa extends Component {

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
    <ScrollView data-layer="e5f59708-2638-44b8-b1ea-20899ca1c43c" style={styles.forgotPasswordTfa}>
        <ReactImage data-layer="fb47dce2-b923-4c84-82f3-3ba7d5eb9152" source={require('./assets/background.png')} style={styles.forgotPasswordTfa_background} />
        <TouchableHighlight onPress={this.handlePress.bind(this, 'continueButton')}>
            <View data-layer="9fbe76fb-fc17-444a-b9e1-574ca441ec19" style={styles.forgotPasswordTfa_continueButton}>
                <View data-layer="1b7d5dfb-8f0b-4e94-8895-d5fccab54f5d" style={styles.forgotPasswordTfa_continueButton_xec1055f4}>
                    <Text data-layer="f1cf7d23-645b-42ab-8574-18b2ca1c567e" style={styles.forgotPasswordTfa_continueButton_xec1055f4_xa9b388e4}>􀁽</Text>
                </View>
            </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.handlePress.bind(this, 'signUpButton')}>
            <View data-layer="ffd2dfa1-6b11-4424-a274-05ebc1ddc3ba" style={styles.forgotPasswordTfa_signUpButton}>
                <View data-layer="d9f1d228-423e-4980-9678-77c87a07338d" style={styles.forgotPasswordTfa_signUpButton_xeb4e6816}>
                    <View data-layer="c0ea6c0b-f621-40f0-b43e-c2c7b281bfcd" style={styles.forgotPasswordTfa_signUpButton_xeb4e6816_signUpRectangle}></View>
                    <Text data-layer="dda2be37-0379-4bdc-a7c8-2766c9fca6ab" style={styles.forgotPasswordTfa_signUpButton_xeb4e6816_back}>BACK</Text>
                </View>
            </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.handlePress.bind(this, 'resendButton')}>
            <View data-layer="ebcde013-32a6-42a0-bc49-cdffd419a12f" style={styles.forgotPasswordTfa_resendButton}>
                <View data-layer="16e44fd3-ca7b-48cf-a9d9-24de806ae99c" style={styles.forgotPasswordTfa_resendButton_xd83eab02}>
                    <View data-layer="77821fc1-5363-456e-978f-a5d4acbdd3db" style={styles.forgotPasswordTfa_resendButton_xd83eab02_resendRectangle}></View>
                    <Text data-layer="ec79f0e4-2511-496e-b390-4d080e3a1521" style={styles.forgotPasswordTfa_resendButton_xd83eab02_resend}>RESEND</Text>
                </View>
            </View>
        </TouchableHighlight>
        <View data-layer="b3030d6e-cb24-4997-9ec2-a20a52b9666e" style={styles.forgotPasswordTfa_rectangle}></View>
        <View data-layer="c2409ff3-e6d5-4d71-bc25-3958907a8753" style={styles.forgotPasswordTfa_tfa}>
            <Svg data-layer="a623a3df-f88a-46ef-b1bf-cddbf9469b82" style={styles.forgotPasswordTfa_tfa_underline} preserveAspectRatio="none" viewBox="-0.75 -0.75 277.741943359375 1.5" fill="rgba(112, 112, 112, 1)"><SvgPath d="M 0 0 L 126.2512130737305 0 L 276.2420043945312 0"  /></Svg>
            <TextInput data-layer="989628ea-78d7-4088-b08d-b61de82caf68" style={styles.forgotPasswordTfa_tfa_form} type="text" id="form-5fbd976f50de" name='form' placeholder='4 Digit Code' placeholderTextColor="rgba(112, 112, 112, 1)"  onChangeText={this.handleChangeTextinput.bind(this, 'form')} />
            <Text data-layer="bd30c6b1-2dbe-4093-aeec-67125ebb5d0a" style={styles.forgotPasswordTfa_tfa_xc62f695f}>􀞚</Text>
        </View>
        <View data-layer="865d16f2-9d6f-4dc4-90d7-ce542dde5fd2" style={styles.forgotPasswordTfa_lensFlare}>
            <Svg data-layer="7fd90996-2127-46db-8e13-7417a65b742e" style={styles.forgotPasswordTfa_lensFlare_ellipseBigBorder} preserveAspectRatio="none" viewBox="-0.75 -0.75 151.5 151.5" fill="transparent"><SvgPath d="M 75 0 C 116.4213562011719 0 150 33.57864761352539 150 75 C 150 116.4213562011719 116.4213562011719 150 75 150 C 33.57864761352539 150 0 116.4213562011719 0 75 C 0 33.57864761352539 33.57864761352539 0 75 0 Z"  /></Svg>
            <Svg data-layer="61aaa9e0-819b-44cb-9938-9165a07952c7" style={styles.forgotPasswordTfa_lensFlare_ellipse1} preserveAspectRatio="none" viewBox="0 0 20 20" fill="rgba(239, 71, 58, 1)"><SvgPath d="M 10 0 C 15.52284812927246 0 20 4.477152347564697 20 10 C 20 15.52284812927246 15.52284812927246 20 10 20 C 4.477152347564697 20 0 15.52284812927246 0 10 C 0 4.477152347564697 4.477152347564697 0 10 0 Z"  /></Svg>
            <Svg data-layer="da265ae9-a4c2-47f3-bdcf-2d5b8378b3e8" style={styles.forgotPasswordTfa_lensFlare_ellipse2} preserveAspectRatio="none" viewBox="0 0 20 20" fill="rgba(239, 71, 58, 1)"><SvgPath d="M 10 0 C 15.52284812927246 0 20 4.477152347564697 20 10 C 20 15.52284812927246 15.52284812927246 20 10 20 C 4.477152347564697 20 0 15.52284812927246 0 10 C 0 4.477152347564697 4.477152347564697 0 10 0 Z"  /></Svg>
            <Svg data-layer="65ccc7b2-f695-4b0c-9b4b-a3f0adb9b5bf" style={styles.forgotPasswordTfa_lensFlare_ellipse3} preserveAspectRatio="none" viewBox="0 0 20 20" fill="rgba(239, 71, 58, 1)"><SvgPath d="M 10 0 C 15.52284812927246 0 20 4.477152347564697 20 10 C 20 15.52284812927246 15.52284812927246 20 10 20 C 4.477152347564697 20 0 15.52284812927246 0 10 C 0 4.477152347564697 4.477152347564697 0 10 0 Z"  /></Svg>
            <Svg data-layer="a3042803-e274-4176-a88a-fc6f1f7a90d1" style={styles.forgotPasswordTfa_lensFlare_ellipse4} preserveAspectRatio="none" viewBox="0 0 20 20" fill="rgba(239, 71, 58, 1)"><SvgPath d="M 10 0 C 15.52284812927246 0 20 4.477152347564697 20 10 C 20 15.52284812927246 15.52284812927246 20 10 20 C 4.477152347564697 20 0 15.52284812927246 0 10 C 0 4.477152347564697 4.477152347564697 0 10 0 Z"  /></Svg>
            <Svg data-layer="34c3bfc6-7d6f-4711-b765-c32ff2798341" style={styles.forgotPasswordTfa_lensFlare_ellipse5} preserveAspectRatio="none" viewBox="0 0 20 20" fill="rgba(239, 71, 58, 1)"><SvgPath d="M 10 0 C 15.52284812927246 0 20 4.477152347564697 20 10 C 20 15.52284812927246 15.52284812927246 20 10 20 C 4.477152347564697 20 0 15.52284812927246 0 10 C 0 4.477152347564697 4.477152347564697 0 10 0 Z"  /></Svg>
            <Svg data-layer="409d2450-2e85-46fe-9271-33ff6729d3a6" style={styles.forgotPasswordTfa_lensFlare_ellipse6} preserveAspectRatio="none" viewBox="0 0 35 35" fill="rgba(239, 71, 58, 1)"><SvgPath d="M 17.5 0 C 27.16498184204102 0 35 7.835017204284668 35 17.5 C 35 27.16498184204102 27.16498184204102 35 17.5 35 C 7.835017204284668 35 0 27.16498184204102 0 17.5 C 0 7.835017204284668 7.835017204284668 0 17.5 0 Z"  /></Svg>
            <Svg data-layer="3cf79bde-cafe-4cf5-9414-426dc3251442" style={styles.forgotPasswordTfa_lensFlare_ellipse7} preserveAspectRatio="none" viewBox="0 0 20 20" fill="rgba(239, 71, 58, 1)"><SvgPath d="M 10 0 C 15.52284812927246 0 20 4.477152347564697 20 10 C 20 15.52284812927246 15.52284812927246 20 10 20 C 4.477152347564697 20 0 15.52284812927246 0 10 C 0 4.477152347564697 4.477152347564697 0 10 0 Z"  /></Svg>
            <Svg data-layer="ce7c91c1-7ca3-4fa3-ae59-5b03d68752ee" style={styles.forgotPasswordTfa_lensFlare_ellipse8} preserveAspectRatio="none" viewBox="0 0 10 10" fill="rgba(239, 71, 58, 1)"><SvgPath d="M 5 0 C 7.76142406463623 0 10 2.238576173782349 10 5 C 10 7.76142406463623 7.76142406463623 10 5 10 C 2.238576173782349 10 0 7.76142406463623 0 5 C 0 2.238576173782349 2.238576173782349 0 5 0 Z"  /></Svg>
        </View>
        <Text data-layer="ab2422e4-8548-4fcf-b8d0-827ed7851032" style={styles.forgotPasswordTfa_weSentYouA4DigitCodeenterItHere}>WE SENT YOU A 4 DIGIT CODE.
ENTER IT HERE.</Text>
        <Text data-layer="b40da632-466c-46cf-9601-bbd7f2f50baf" style={styles.forgotPasswordTfa_checkyourmessages}>CHECK
YOUR
MESSAGES.</Text>
    </ScrollView>
    );
  }
}

ForgotPasswordTfa.propTypes = {

}

ForgotPasswordTfa.defaultProps = {

}


const styles = StyleSheet.create({
  "forgotPasswordTfa": {
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
  "forgotPasswordTfa_background": {
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
  "forgotPasswordTfa_background_flares": {
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
  "forgotPasswordTfa_background_backgroundBlur": {
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
  "forgotPasswordTfa_continueButton": {
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
  "forgotPasswordTfa_continueButton_xec1055f4": {
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
  "forgotPasswordTfa_continueButton_xec1055f4_xa9b388e4": {
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
  "forgotPasswordTfa_signUpButton": {
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
  "forgotPasswordTfa_signUpButton_xeb4e6816": {
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
  "forgotPasswordTfa_signUpButton_xeb4e6816_signUpRectangle": {
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
  "forgotPasswordTfa_signUpButton_xeb4e6816_back": {
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
  "forgotPasswordTfa_resendButton": {
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
  "forgotPasswordTfa_resendButton_xd83eab02": {
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
  "forgotPasswordTfa_resendButton_xd83eab02_resendRectangle": {
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
  "forgotPasswordTfa_resendButton_xd83eab02_resend": {
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
  "forgotPasswordTfa_rectangle": {
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
  "forgotPasswordTfa_tfa": {
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
  "forgotPasswordTfa_tfa_underline": {
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
  "forgotPasswordTfa_tfa_form": {
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
  "forgotPasswordTfa_tfa_form_textbox": {
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
  "forgotPasswordTfa_tfa_form_text": {
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
  "forgotPasswordTfa_tfa_form_x4DigitCode": {
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
  "forgotPasswordTfa_tfa_xc62f695f": {
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
  "forgotPasswordTfa_lensFlare": {
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
  "forgotPasswordTfa_lensFlare_ellipseBigBorder": {
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
  "forgotPasswordTfa_lensFlare_ellipse1": {
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
  "forgotPasswordTfa_lensFlare_ellipse2": {
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
  "forgotPasswordTfa_lensFlare_ellipse3": {
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
  "forgotPasswordTfa_lensFlare_ellipse4": {
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
  "forgotPasswordTfa_lensFlare_ellipse5": {
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
  "forgotPasswordTfa_lensFlare_ellipse6": {
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
  "forgotPasswordTfa_lensFlare_ellipse7": {
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
  "forgotPasswordTfa_lensFlare_ellipse8": {
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
  "forgotPasswordTfa_weSentYouA4DigitCodeenterItHere": {
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
  "forgotPasswordTfa_checkyourmessages": {
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