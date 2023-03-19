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
		        		label:'Create Form',
		        		functionName: 'NextPage'
		        	});
	        	scriptContext.form.clientScriptModulePath = 'SuiteScripts/ClientScript_Demo_JA_T.js';
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
	    	try{
    			if(scriptContext.type == 'edit'){
				
				var quoteRec = scriptContext.newRecord;
				var currentuser = runtime.getCurrentUser().id;//here we get the id of Current user internal id
				log.debug('currentuser:',currentuser);
				
				var customerName = quoteRec.getValue('entity');
				log.debug('custName:',customerName);
				if(customerName){
					var cusomertRec = record.load({
						type : record.Type.CUSTOMER,
						id : customerName
					});
					var customerEmail = custRec.getValue('email');	
					log.debug('customerEmail:',customerEmail);

					if(customerEmail){
						email.send({
							author:currentuser,
							recipients: customerEmail,
							subject: 'Quotes status',
							body: 'Your Quotes created Successfully',

						});
						log.debug('Email sent',customerEmail);
					}
				}
			}
    	}catch(e){
    		log.error('error in After Submite',e)
    		
    	}
	}

	    return {
	        beforeLoad: beforeLoad,
	        beforeSubmit: beforeSubmit,
	        afterSubmit: afterSubmit
	    };
	    
	});
