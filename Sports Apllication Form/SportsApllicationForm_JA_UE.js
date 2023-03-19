/**
 * @NApiVersion 2.x
 * @NScriptType UserEventScript
 * @NModuleScope SameAccount
 */
define(['N/record', 'N/ui/serverWidget'],
/**
 * @param {record} record
 * @param {serverWidget} serverWidget
 */
function(record, serverWidget) {
   
    /**
     * Function definition to be triggered before record is loaded.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.newRecord - New record
     * @param {string} scriptContext.type - Trigger type
     * @param {Form} scriptContext.form - Current form
     * @Since 2015.2
     */
	 function beforeLoad(scriptContext) {
	    	try{
	        	log.debug('In BeforeLoad Function');
	        	if(scriptContext.type =='view'){
		        	var Btn1 = scriptContext.form.addButton({
		        		id: 'custpage_test',
		        		label:'Register',
		        		functionName: 'NextPage'
		        	});
	        	//scriptContext.form.clientScriptModulePath = 'SuiteScripts/ClientScript_Demo_JA_T.js';
	        	}
	       	}catch(e){
	        		log.error('Error in BeforeLoad Function '+e);
	        	}

	    }

	    /**
	     * Function definition to be triggered before record is loaded.
	     *
	     * @param {Object} scriptContext
	     * @param {Record} scriptContext.newRecord - New record
	     * @param {Record} scriptContext.oldRecord - Old record
	     * @param {string} scriptContext.type - Trigger type
	     * @Since 2015.2
	     */
	    function beforeSubmit(scriptContext) {
        
	    	
	    	
	    	
	    	
	    	
	    }

	    /**
	     * Function definition to be triggered before record is loaded.
	     *
	     * @param {Object} scriptContext
	     * @param {Record} scriptContext.newRecord - New record
	     * @param {Record} scriptContext.oldRecord - Old record
	     * @param {string} scriptContext.type - Trigger type
	     * @Since 2015.2
	     */
	    function afterSubmit(scriptContext) {
	     
//	    	  var loadRec=record.loadForm({
//	          	id: 'custom_sports_application_form'
//	           });
//	           var g_Value= loadRec.getValue('cust_name');
//	           
//	           var loadRec2=record.loadForm({
//	           	id: 'customrecord_s_application_form_ja_2023'
//	            });
//	         
//	       
//	              loadRec2.setValue({
//	  				fieldId: 'name',
//	  				value: g_Value,
//	  				ignoreFieldChange: true
//	  				});
	    	
	    	
	    	
	    	
	    	
	    	
//	    	  var   loadRec= context.newRecord.getValue({ fieldId: 'cust_name' });
//
//	            log.debug('error in after submite');
//             if(scriptContext.type !== scriptContext.UserEventType.CREATE){
//            	 return;
//            	 
//            	 var newRegistration= scriptContext.newRecord;
//            	 var newRegistrationFirstName = newRegistration.getValue({
//            		 fieldId : 'cust_first_name'
//            	 });
//            	 var newRegistrationLastName = newRegistration.getValue({
//            		 fieldId : 'cust_last_name'
//            	 });
//            	 var newRegistrationParentName = newRegistration.getValue({
//            		 fieldId : 'cust_parent_name'
//            	 });
//            	 var newRegistrationPhoneName = newRegistration.getValue({
//            		 fieldId : 'cust_phone'
//            	 });
//            	 var newRegistrationEmaiId1 = newRegistration.getValue({
//            		 fieldId : 'cust_email1'
//            	 });
//            	 var newRegistrationEmailId2 = newRegistration.getValue({
//            		 fieldId : 'cust_email2'
//            	 });
//            	 var newRegistrationSelectSports = newRegistration.getValue({
//            		 fieldId : 'custpage_select_sports'
//            	 });
//            	 var newRegistrationEducation = newRegistration.getValue({
//            		 fieldId : 'custpage_education'
//            	 });
//            	 var newRegistrationAddress = newRegistration.getValue({
//            		 fieldId : 'cust_address'
//            	 });
//            	 var newRegistrationComment = newRegistration.getValue({
//            		 fieldId : 'cust_comments'
//            	 });
//            	 var newRegistrationGender = newRegistration.getValue({
//            		 fieldId : ' custpage_gender'
//            	 });
//            	 
//
//            	 
//            	 if(newRegistrationFirstName){
//            		 var newTask= record.create({
//            			 type:record.Type.TASK,
//            			 isDynamic :true
//            		 });
//            		 newTask.setvalue({
//            			 fieldId:'name',
//            			 value:newRegistrationFirstName
//            		 });
//            		 newTask.setvalue({
//            			 fieldId:'custrecord_player_last_name',
//            			 value:newRegistrationLastName
//            		 });
//            		 newTask.setvalue({
//            			 fieldId:'custrecord_parent_name',
//            			 value:newRegistrationParentName
//            		 });
//            		 newTask.setvalue({
//            			 fieldId:'custrecord_parent_mobile_number',
//            			 value:newRegistrationPhoneName
//            		 });
//            		 newTask.setvalue({
//            			 fieldId:'custrecord_parent_email_id',
//            			 value:newRegistrationEmaiId1
//            		 });
//            		 newTask.setvalue({
//            			 fieldId:'custrecord_player_email_id',
//            			 value:newRegistrationEmaiId2
//            		 });
//            		 newTask.setvalue({
//            			 fieldId:'custrecord_sports',
//            			 value:newRegistrationSelectSports
//            		 });
//            		 newTask.setvalue({
//            			 fieldId:'custrecord_select_gender_',
//            			 value:newRegistrationGender
//            		 });
//            		 newTask.setvalue({
//            			 fieldId:'custrecord_education_',
//            			 value:newRegistrationEducation
//            		 });
//            		 newTask.setvalue({
//            			 fieldId:'custrecord_player_address',
//            			 value:newRegistrationAddress
//            		 });
//            		 newTask.setvalue({
//            			 fieldId:'custrecord_comment_question',
//            			 value:newRegistrationComment
//            		 });
//	                
//            		 
//            		 try {
//            			 var newTaskId = newTask.save();
//            			 log.debug('Succesfully seved');
//            			 
//            		 }catch(e){
//         				log.error('Error in afterSubmit function:',e);
//            		 }
           	 

         
}
	    return {
	        beforeLoad: beforeLoad,
	        beforeSubmit: beforeSubmit,
	        afterSubmit: afterSubmit
	    };
	    
	});
