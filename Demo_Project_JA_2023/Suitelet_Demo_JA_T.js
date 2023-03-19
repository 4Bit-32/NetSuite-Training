/**
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 * @NModuleScope SameAccount
 */
define(['N/runtime','N/record','N/ui/serverWidget','N/url','N/format'],

function(runtime,record,serverWidget,url,format) {
   
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
               

               var phone_Number = form.addField({
                 id: 'cust_phone',
                 type: serverWidget.FieldType.PHONE,
                 label: 'Parent Mobile Number'
            });
           

           
               var parent_Email = form.addField({
                id: 'cust_email1',
                type: serverWidget.FieldType.EMAIL,
                label: 'Parent Eamil Id'
            });
            
              
            var player_Email = form.addField({
                id: 'cust_email2',
                type: serverWidget.FieldType.EMAIL,
                label: 'Player Eamil Id'
            });
        

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
                value: '1',
                text: 'Hockey'
            });
            option.addSelectOption({
                value: '2',
                text: 'Badmintion'
            });
            option.addSelectOption({
                value: '3',
                text: 'Vollyball'
            });
            option.addSelectOption({
                value: '4',
                text: 'Cricket'
            });
             
            var option2 = form.addField({
                id: 'custpage_gender',
                type: serverWidget.FieldType.SELECT,
                label:'Gender'
            });
            option2.addSelectOption({
                value: '-null-',
                text: '-Select Gender-'
            });
            option2.addSelectOption({
                value: '1',
                text: 'MALE'
            });
              option2.addSelectOption({
                value:'2',
                text:'FEMALE'
              })
           
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
             var player_DOB = form.addField({
                  id: 'cust_dob',
                  type: serverWidget.FieldType.DATE,
                  label: 'Player DOB'
              });
             
             var player_Address = form.addField({
                id: 'cust_address',
                type: serverWidget.FieldType.TEXTAREA,
                label: 'Player Address'
            });
             

             var comment = form.addField({
                id: 'cust_comments',
                type: serverWidget.FieldType.TEXTAREA,
                label: 'Comments / Question'
            });

               form.addSubmitButton({
                label: 'Click Submit'
            });

             context.response.writePage(form);

			}else		{
		    var firstName = request.parameters.cust_first_name;
            log.debug('firstName:',firstName);
            var lastName = request.parameters.cust_last_name;
            log.debug('lastName:',lastName);
            var parentName = request.parameters.cust_parent_name;
            log.debug('parentName:',parentName);
            var phoneNumber = request.parameters.cust_phone;
            log.debug('phoneNumber:',phoneNumber);
            var parentEmail = request.parameters.cust_email1;
            log.debug('parenteEmail:',parentEmail);
            var playerEmail = request.parameters.cust_email2;
            log.debug('parenteEmail:',playerEmail);
            var selectSports = request.parameters.custpage_select_sports;
            log.debug('selectSports:',selectSports);
            var gender =request.parameters.custpage_gender;
            log.debug('gender:',gender);
            var degree = request.parameters.custpage_education;
            log.debug('degree:',degree);
            var playerDOB = request.parameters.cust_dob;
            log.debug('playerDOB:',playerDOB);
            var playerAddress = request.parameters.cust_address;
            log.debug('playerAddress:',playerAddress);
            var playerComments = request.parameters.cust_comments;
            log.debug('playerComments:',playerComments);
           
            
            
            //SetValue
            
            var date_Format= format.parse({
                value: playerDOB,
                type: format.Type.DATE
            });

            var customRec = record.create({
                type: 'customrecord_s_application_form_ja_2023',
                isDynamic: true
            });
            customRec.setValue({
				fieldId: 'name',
				value: firstName,
				ignoreFieldChange: true
				});
            customRec.setValue({
				fieldId: 'custrecord_player_last_name',
				value: lastName,
				ignoreFieldChange: true
				});
            customRec.setValue({
				fieldId: 'custrecord_parent_name',
				value: parentName,
				ignoreFieldChange: true
				});
            customRec.setValue({
				fieldId: 'custrecord_parent_mobile_number',
				value: phoneNumber,
				ignoreFieldChange: true
				});
            customRec.setValue({
				fieldId: 'custrecord_parent_email_id',
				value: parentEmail,
				ignoreFieldChange: true
				});
            customRec.setValue({
				fieldId: 'custrecord_player_email_id',
				value: playerEmail,
				ignoreFieldChange: true
				});
            customRec.setValue({
				fieldId: 'custrecord_sports',
				value: selectSports,
				ignoreFieldChange: true
				});
            customRec.setValue({
				fieldId: 'custrecord_select_gender_',
				value: gender,
				ignoreFieldChange: true
				});
            customRec.setValue({
				fieldId: 'custrecord_education_',
				value: degree,
				ignoreFieldChange: true
				});
            customRec.setValue({
				fieldId: 'custrecord_player_dob',
				value: date_Format,
				ignoreFieldChange: true
				});
            customRec.setValue({
				fieldId: 'custrecord_player_address',
				value: playerAddress,
				ignoreFieldChange: true
				});
            customRec.setValue({
				fieldId: 'custrecord_comment_question',
				value: playerComments,
				ignoreFieldChange: true
				});
            
            var recSaved = customRec.save();
            context.response.write('Your Application is Saved Succecfully');
            log.debug('Remaining Goverance Units '+ScriptParam.getRemainingUsage());
		}
			log.debug('Remaining Goverance Units '+ScriptParam.getRemainingUsage());
		}
		catch(e){
			log.error('Error in Suitelet ',e);
		}
    }

    return {
        onRequest: onRequest
    };
    
});