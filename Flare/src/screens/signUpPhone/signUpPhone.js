import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class SignUpPhone extends Component {

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
    <ScrollView data-layer="0edf6887-52a9-4334-b396-0b73cdb5e9c8" style={styles.signUpPhone}>
        <ReactImage data-layer="2765d5da-d23d-4a5c-a270-bac05c40f5d5" source={require('./assets/background.png')} style={styles.signUpPhone_background} />
        <TouchableHighlight onPress={this.handlePress.bind(this, 'continueButton')}>
            <View data-layer="578bac8c-597a-4cca-ba9d-68bb1d89f583" style={styles.signUpPhone_continueButton}>
                <View data-layer="fd0aa98d-e2d3-41fb-91e6-5c79f8a52fd4" style={styles.signUpPhone_continueButton_xb1426f71}>
                    <Text data-layer="fe3a68aa-b9a2-49d2-8727-8c9226db0811" style={styles.signUpPhone_continueButton_xb1426f71_x21ea0b9d}>􀁽</Text>
                </View>
            </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.handlePress.bind(this, 'loginButton')}>
            <View data-layer="57aecf65-c2d1-4747-8c31-15452cf397a4" style={styles.signUpPhone_loginButton}>
                <View data-layer="865aed4b-1af0-4573-a9e8-644515eceae3" style={styles.signUpPhone_loginButton_x70226022}>
                    <View data-layer="db5d8fb6-2c64-4d24-97a7-3494a81ad8cd" style={styles.signUpPhone_loginButton_x70226022_loginRectangle}></View>
                    <Text data-layer="232a9464-6634-4cd5-8cb5-fd20facfb733" style={styles.signUpPhone_loginButton_x70226022_back}>BACK</Text>
                </View>
            </View>
        </TouchableHighlight>
        <View data-layer="17e61419-0202-4de9-a3eb-fe1c92e123e9" style={styles.signUpPhone_rectangle}></View>
        <View data-layer="3cd6275d-0bb2-4485-8061-bb046bb71fb9" style={styles.signUpPhone_phoneNumber0c92c229}>
            <Svg data-layer="468d4d94-2d91-40c7-b5c7-921226192982" style={styles.signUpPhone_phoneNumber0c92c229_underline} preserveAspectRatio="none" viewBox="-0.75 -0.75 278.5 1.5" fill="rgba(112, 112, 112, 1)"><SvgPath d="M 0 0 L 126.5976409912109 0 L 277 0"  /></Svg>
            <TextInput data-layer="db7cfe7b-0b4d-48d8-9de2-1402011fd86c" style={styles.signUpPhone_phoneNumber0c92c229_form} type="text" id="form-b1e8a436b2c0" name='form' placeholder='Phone Number' placeholderTextColor="rgba(112, 112, 112, 1)"  onChangeText={this.handleChangeTextinput.bind(this, 'form')} />
            <Text data-layer="143e9e3f-6fe3-48fd-a92d-77c26cedf5bd" style={styles.signUpPhone_phoneNumber0c92c229_x63c832e7}>􀌿</Text>
        </View>
        <View data-layer="6518e270-ae37-400b-8db1-80dcfba3cbe2" style={styles.signUpPhone_lensFlare}>
            <Svg data-layer="89aca43b-7ca3-43f8-bd7b-c326bf82d38b" style={styles.signUpPhone_lensFlare_ellipseBigBorder} preserveAspectRatio="none" viewBox="-0.75 -0.75 151.5 151.5" fill="transparent"><SvgPath d="M 75 0 C 116.4213562011719 0 150 33.57864761352539 150 75 C 150 116.4213562011719 116.4213562011719 150 75 150 C 33.57864761352539 150 0 116.4213562011719 0 75 C 0 33.57864761352539 33.57864761352539 0 75 0 Z"  /></Svg>
            <Svg data-layer="f13bfecf-c00c-431b-ace4-84ae08aff172" style={styles.signUpPhone_lensFlare_ellipse1} preserveAspectRatio="none" viewBox="0 0 20 20" fill="rgba(239, 71, 58, 1)"><SvgPath d="M 10 0 C 15.52284812927246 0 20 4.477152347564697 20 10 C 20 15.52284812927246 15.52284812927246 20 10 20 C 4.477152347564697 20 0 15.52284812927246 0 10 C 0 4.477152347564697 4.477152347564697 0 10 0 Z"  /></Svg>
            <Svg data-layer="5a471cab-4fff-47b0-8b28-cfb4f844f406" style={styles.signUpPhone_lensFlare_ellipse2} preserveAspectRatio="none" viewBox="0 0 20 20" fill="rgba(239, 71, 58, 1)"><SvgPath d="M 10 0 C 15.52284812927246 0 20 4.477152347564697 20 10 C 20 15.52284812927246 15.52284812927246 20 10 20 C 4.477152347564697 20 0 15.52284812927246 0 10 C 0 4.477152347564697 4.477152347564697 0 10 0 Z"  /></Svg>
            <Svg data-layer="91c9b759-9eab-435b-91d6-44fbee714088" style={styles.signUpPhone_lensFlare_ellipse3} preserveAspectRatio="none" viewBox="0 0 20 20" fill="rgba(239, 71, 58, 1)"><SvgPath d="M 10 0 C 15.52284812927246 0 20 4.477152347564697 20 10 C 20 15.52284812927246 15.52284812927246 20 10 20 C 4.477152347564697 20 0 15.52284812927246 0 10 C 0 4.477152347564697 4.477152347564697 0 10 0 Z"  /></Svg>
            <Svg data-layer="96101d0d-8dd7-49b4-b87f-45e32271e786" style={styles.signUpPhone_lensFlare_ellipse4} preserveAspectRatio="none" viewBox="0 0 20 20" fill="rgba(239, 71, 58, 1)"><SvgPath d="M 10 0 C 15.52284812927246 0 20 4.477152347564697 20 10 C 20 15.52284812927246 15.52284812927246 20 10 20 C 4.477152347564697 20 0 15.52284812927246 0 10 C 0 4.477152347564697 4.477152347564697 0 10 0 Z"  /></Svg>
            <Svg data-layer="efffcd92-4caf-4726-bb30-a4dbe402d07c" style={styles.signUpPhone_lensFlare_ellipse5} preserveAspectRatio="none" viewBox="0 0 20 20" fill="rgba(239, 71, 58, 1)"><SvgPath d="M 10 0 C 15.52284812927246 0 20 4.477152347564697 20 10 C 20 15.52284812927246 15.52284812927246 20 10 20 C 4.477152347564697 20 0 15.52284812927246 0 10 C 0 4.477152347564697 4.477152347564697 0 10 0 Z"  /></Svg>
            <Svg data-layer="54ce8818-7728-43be-a317-41f84bfcd855" style={styles.signUpPhone_lensFlare_ellipse6} preserveAspectRatio="none" viewBox="0 0 35 35" fill="rgba(239, 71, 58, 1)"><SvgPath d="M 17.5 0 C 27.16498184204102 0 35 7.835017204284668 35 17.5 C 35 27.16498184204102 27.16498184204102 35 17.5 35 C 7.835017204284668 35 0 27.16498184204102 0 17.5 C 0 7.835017204284668 7.835017204284668 0 17.5 0 Z"  /></Svg>
            <Svg data-layer="48395a8e-022c-4d90-afb1-144d4960eb65" style={styles.signUpPhone_lensFlare_ellipse7} preserveAspectRatio="none" viewBox="0 0 20 20" fill="rgba(239, 71, 58, 1)"><SvgPath d="M 10 0 C 15.52284812927246 0 20 4.477152347564697 20 10 C 20 15.52284812927246 15.52284812927246 20 10 20 C 4.477152347564697 20 0 15.52284812927246 0 10 C 0 4.477152347564697 4.477152347564697 0 10 0 Z"  /></Svg>
            <Svg data-layer="b2e6f5a5-4d91-41ce-a442-680fe0cabe33" style={styles.signUpPhone_lensFlare_ellipse8} preserveAspectRatio="none" viewBox="0 0 10 10" fill="rgba(239, 71, 58, 1)"><SvgPath d="M 5 0 C 7.76142406463623 0 10 2.238576173782349 10 5 C 10 7.76142406463623 7.76142406463623 10 5 10 C 2.238576173782349 10 0 7.76142406463623 0 5 C 0 2.238576173782349 2.238576173782349 0 5 0 Z"  /></Svg>
        </View>
        <Text data-layer="cd2e93ee-48cd-4ce3-99b4-d8150aff7b7b" style={styles.signUpPhone_youWillReceiveAnSmsToConfirmyourPhoneNumberFeesMayApply}>YOU WILL RECEIVE AN SMS TO CONFIRM
YOUR PHONE NUMBER. FEES MAY APPLY.</Text>
        <Text data-layer="b80f2913-e4cc-4473-9395-b4b93bf87d79" style={styles.signUpPhone_whatsyourphonenumber}>WHAT’S
YOUR
PHONE
NUMBER?</Text>
    </ScrollView>
    );
  }
}

SignUpPhone.propTypes = {

}

SignUpPhone.defaultProps = {

}


const styles = StyleSheet.create({
  "signUpPhone": {
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
  "signUpPhone_background": {
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
  "signUpPhone_background_flares": {
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
  "signUpPhone_background_backgroundBlur": {
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
  "signUpPhone_continueButton": {
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
  "signUpPhone_continueButton_xb1426f71": {
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
  "signUpPhone_continueButton_xb1426f71_x21ea0b9d": {
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
    "width": "auto",
    "height": "auto",
    "left": 0,
    "top": 0,
    "right": 0,
    "bottom": 0
  },
  "signUpPhone_loginButton": {
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
  "signUpPhone_loginButton_x70226022": {
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
    "width": "auto",
    "height": "auto",
    "left": 0,
    "top": 0,
    "right": 0,
    "bottom": 0
  },
  "signUpPhone_loginButton_x70226022_loginRectangle": {
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
    "width": "auto",
    "height": "auto",
    "left": 0,
    "top": 0,
    "right": 0,
    "bottom": 0
  },
  "signUpPhone_loginButton_x70226022_back": {
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
    "marginLeft": -26,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 52,
    "height": 107,
    "left": "50%",
    "top": -25
  },
  "signUpPhone_rectangle": {
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
  "signUpPhone_phoneNumber0c92c229": {
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
    "height": 30,
    "left": 37.76,
    "top": 419
  },
  "signUpPhone_phoneNumber0c92c229_underline": {
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
    "width": 279,
    "height": 2,
    "left": 22,
    "top": 28.5
  },
  "signUpPhone_phoneNumber0c92c229_form": {
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
    "paddingLeft": 4,
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
  "signUpPhone_phoneNumber0c92c229_form_textbox": {
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
  "signUpPhone_phoneNumber0c92c229_form_text": {
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
    "width": 277,
    "height": 86,
    "left": 4,
    "top": -26.5
  },
  "signUpPhone_phoneNumber0c92c229_form_phoneNumber": {
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
    "width": 119,
    "height": 86,
    "left": 4,
    "top": -26.5
  },
  "signUpPhone_phoneNumber0c92c229_x63c832e7": {
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
    "width": 19,
    "height": 20,
    "left": 0,
    "top": 5
  },
  "signUpPhone_lensFlare": {
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
  "signUpPhone_lensFlare_ellipseBigBorder": {
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
  "signUpPhone_lensFlare_ellipse1": {
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
  "signUpPhone_lensFlare_ellipse2": {
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
  "signUpPhone_lensFlare_ellipse3": {
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
  "signUpPhone_lensFlare_ellipse4": {
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
  "signUpPhone_lensFlare_ellipse5": {
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
  "signUpPhone_lensFlare_ellipse6": {
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
  "signUpPhone_lensFlare_ellipse7": {
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
  "signUpPhone_lensFlare_ellipse8": {
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
  "signUpPhone_youWillReceiveAnSmsToConfirmyourPhoneNumberFeesMayApply": {
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
    "width": 332,
    "height": 56,
    "left": 20,
    "top": 334
  },
  "signUpPhone_whatsyourphonenumber": {
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
    "width": 285,
    "height": 314,
    "left": 20,
    "top": 42
  }
});