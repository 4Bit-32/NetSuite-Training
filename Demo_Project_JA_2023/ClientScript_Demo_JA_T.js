/**
 * @NApiVersion 2.x
 * @NScriptType ClientScript
 * @NModuleScope SameAccount
 */
define(['N/url'],

function(url) {
    
    /**
     * Function to be executed after page is initialized.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.mode - The mode in which the record is being accessed (create, copy, or edit)
     *
     * @since 2015.2
     */
    function pageInit(scriptContext) {
    	
    }

    
    function NextPage(){
    	//alert('In Client Page');
       var outPut = url.resolveScript({
        scriptId: 'customscript_sl_demo_ja_2023',
        deploymentId: 'customdeploy_sl_demo_jav_2023',
        returnExternalUrl: true
    });
    window.open('https://tstdrv1911674.app.netsuite.com/app/site/hosting/scriptlet.nl?script=6359&deploy=5');
    return true;
    }

    return {
	      pageInit: pageInit,
	      NextPage: NextPage

    };
    
});
