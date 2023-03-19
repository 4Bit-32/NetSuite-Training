/**
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 * @NModuleScope SameAccount
 */
define(['N/runtime','N/ui/serverWidget'],

function(runtime,serverWidget) {
   
    /**
     * Definition of the Suitelet script trigger point.
     *
     * @param {Object} context
     * @param {ServerRequest} context.request - Encapsulation of the incoming request
     * @param {ServerResponse} context.response - Encapsulation of the Suitelet response
     * @Since 2015.2
     */
    function onRequest(context) {
		try{
			var ScriptParam=runtime.getCurrentScript();
			log.debug('Total Goverance Unite '+ ScriptParam.getRemainingUsage());

			var request = context.request;
			var response = context.response;
			var form = serverWidget.createForm({title: 'Sports Application Form',
				id:'custom_sports_application_form'});

            //var fgMethod=form.addFieldGroup({id:'fieldgroup_method',label:'Gender'});
			if(request.method==='GET'){
                var first_Name = form.addField({
                  id: 'cust_first_name',
                  type: serverWidget.FieldType.TEXT,
                  label: 'Player First Name'
            });
              first_Name.isMandatory=true;

                var last_Name = form.addField({
                  id: 'cust_last_name',
                  type: serverWidget.FieldType.TEXT,
                  label: 'Player Last Name'
            });

               var parent_Name = form.addField({
                 id: 'cust_parent_name',
                 type: serverWidget.FieldType.TEXT,
                 label: 'Parent Name '
               });
                 parent_Name.isMandatory = true;

               var phone_Number = form.addField({
                 id: 'cust_phone',
                 type: serverWidget.FieldType.PHONE,
                 label: 'Parent Mobile Number'
            });
               phone_Number.isMandatory = true;

           
               var parent_Email = form.addField({
                id: 'cust_email1',
                type: serverWidget.FieldType.EMAIL,
                label: 'Parent Eamil Id'
            });
              parent_Email.isMandatory=true;
              
            var player_Email = form.addField({
                id: 'cust_email2',
                type: serverWidget.FieldType.EMAIL,
                label: 'Player Eamil Id'
            });
              player_Email.isMandatory=true;

            var option = form.addField({
                id: 'custpage_select_sports',
                type: serverWidget.FieldType.SELECT,
                label: 'Sports'
            });
            option.addSelectOption({
                value: 'null',
                text: '-Select Sport-'
            });
            option.addSelectOption({
                value: 'Hockey',
                text: 'Hockey'
            });
            option.addSelectOption({
                value: 'Badmintion',
                text: 'Badmintion'
            });
            option.addSelectOption({
                value: 'Vollyball',
                text: 'Vollyball'
            });
            option.addSelectOption({
                value: 'Cricket',
                text: 'Cricket'
            });
              option.isMandatory=true;
            var option2 = form.addField({
                id: 'custpage_gender',
                type: serverWidget.FieldType.SELECT,
                label:'Gender'
            });
            option2.addSelectOption({
                value: '-null',
                text: '-Select Gender-'
            });
            option2.addSelectOption({
                value: 'male',
                text: 'MALE'
            });
              option2.addSelectOption({
                value:'female',
                text:'FEMALE'
              })
              option2.isMandatory=true;
            var option3 = form.addField({
                id: 'custpage_education',
                type: serverWidget.FieldType.SELECT,
                label: 'Education'
            });
            option3.addSelectOption({
                value: '1',
                text: '10th'
            });

            option3.addSelectOption({
                value: '2',
                text: '12th'
            });
              option3.addSelectOption({
                value: '3',
                text: 'Under Graduate'
            });
              option3.addSelectOption({
                value: '4',
                text: 'Post Graduate'
            });
              option3.isMandatory=true;
             var player_Address = form.addField({
                id: 'cust_address',
                type: serverWidget.FieldType.TEXTAREA,
                label: 'Player Address'
            });
              player_Address.isMandatory=true;

             var comment = form.addField({
                id: 'cust_comments',
                type: serverWidget.FieldType.TEXTAREA,
                label: 'Comments / Question'
            });

               form.addSubmitButton({
                label: 'Click Submit'
            });

             context.response.writePage(form);

			}else if(context.request.method==='POST') //Post method
			{
//		    const firstName = request.parameters.cust_first_name;
//            log.debug('firstName:',firstName);
//            const lastName = request.parameters.cust_last_name;
//            log.debug('lastName:',lastName);
//            const parentName = request.parameters.cust_parent_name;
//            log.debug('parentName:',parentName);
//            const phoneNumber = request.parameters.cust_phone;
//            log.debug('phoneNumber:',phoneNumber);
//            const parentEmail = request.parameters.cust_email1;
//            log.debug('parenteEmail:',parentEmail);
//            const playerEmail = request.parameters.cust_email2;
//            log.debug('parenteEmail:',playerEmail);
//            const selectSports = request.parameters.custpage_select_sports;
//            log.debug('selectSports:',selectSports);
//            const gender =request.parameters.custpage_gender;
//            log.debug('gender:',gender);
//            const degree = request.parameters.custpage_education;
//            log.debug('degree:',degree);
//            const playerAddress = request.parameters.cust_address;
//            log.debug('playerAddress:',playerAddress);
//            const playerComments = request.parameters.cust_comments;
//            log.debug('playerComments:',playerComments);
            
            
            //SetValue
            
            var firstName=context.request.parameters.name;
            var lastName= context.request.parameters.custrecord_player_last_name;
            var parentName =context.request.parameters.custrecord_parent_name;
            var phoneNumber=context.request.parameters.custrecord_parent_mobile_number;
            var parentEmail=context.request.parameters.custrecord_parent_email_id;
            var playerEmail=context.request.parameters.custrecord_player_email_id;
            var selectSports =context.request.parameters.custrecord_sports;
            var gender=context.request.parameters.custrecord_select_gender_;
            var degree=context.request.parameters.custrecord_education_;
            var playerAddress=context.request.parameters.custrecord_player_address;
            var playerComments=context.request.parameters.custrecord_comment_question;
				
				
//            context.setValue({
//				fieldId: 'custrecord_player_last_name',
//				value: lastName,
//				ignoreFieldChange: true
//				});
//            context.setValue({
//				fieldId: 'custrecord_parent_name',
//				value: parentName,
//				ignoreFieldChange: true
//				});
//            context.setValue({
//				fieldId: 'custrecord_parent_mobile_number',
//				value: phoneNumber,
//				ignoreFieldChange: true
//				});
//            context.setValue({
//				fieldId: 'custrecord_parent_email_id',
//				value: parentEmail,
//				ignoreFieldChange: true
//				});
//            context.setValue({
//				fieldId: 'custrecord_player_email_id',
//				value: playerEmail,
//				ignoreFieldChange: true
//				});
//            context.setValue({
//				fieldId: 'custrecord_sports',
//				value: selectSports,
//				ignoreFieldChange: true
//				});
//            context.setValue({
//				fieldId: 'custrecord_select_gender_',
//				value: gender,
//				ignoreFieldChange: true
//				});
//            context.setValue({
//				fieldId: 'custrecord_education_',
//				value: degree,
//				ignoreFieldChange: true
//				});
//            context.setValue({
//				fieldId: 'custrecord_player_address',
//				value: playerAddress,
//				ignoreFieldChange: true
//				});
//            context.setValue({
//				fieldId: 'custrecord_comment_question',
//				value: playerComments,
//				ignoreFieldChange: true
//				});
            context.response.write('Your Application is Saved Succecfully');
            log.debug('Remaining Goverance Units '+ScriptParam.getRemainingUsage());
		}
			log.debug('Remaining Goverance Units '+ScriptParam.getRemainingUsage());
		}
		catch(e){
			log.error('Error in Suitelet '+e);
		}
    }

    return {
        onRequest: onRequest
    };
    
});
