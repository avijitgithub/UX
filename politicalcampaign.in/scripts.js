'use strict';

(function($){

  $(function() {

    var datascource = {
      'name': 'Lao Lao',
      'title': 'Zonal Manager',
          'children': [
            { 'name': 'Tie Hua', 'title': 'Panchayat Head' },
            { 'name': 'Hei Hei', 'title': 'Panchayat Head',
              'children': [
                { 'name': 'Pang Pang', 'title': 'Village Head' },
                { 'name': 'Xiang Xiang', 'title': 'Village Head',
			'children': [
                { 'name': 'Nihar Behera', 'title': 'Ward Member' },
                { 'name': 'Rakesh Nayak', 'title': 'Ward Member','children': [
                { 'name': 'Sudhansu Lenka', 'title': 'Booth Head' },
                { 'name': 'Swapnil Sahu', 'title': 'Booth Head' }
              ]			 }
              ]				
			  }
              ]
            }
          ]
       };
	   
	   
	   var eastzonecovrage = {
      'name': 'East Zone',
      'title': 'Zone',
          'children': [
            { 'name': 'RamPur', 'title': 'Panchyat' },
            { 'name': 'SamPur', 'title': 'Panchyat',
              'children': [
                { 'name': 'Harpiur', 'title': 'Village' },
                { 'name': 'Rajpur', 'title': 'Village',
			'children': [
                { 'name': 'KamPur', 'title': 'Ward' },
                { 'name': 'DhamPur', 'title': 'Ward','children': [
                { 'name': 'Jila Sur', 'title': 'Booth' },
                { 'name': 'Mila Aur', 'title': 'Booth' }
              ]			 }
              ]				
			  }
              ]
            }
          ]
       }; 

	   
	    var westzonecovrage = {
      'name': 'West Zone',
      'title': 'Zone',
          'children': [
            { 'name': 'RamPur', 'title': 'Panchyat' },
            { 'name': 'SamPur', 'title': 'Panchyat',
              'children': [
                { 'name': 'Harpiur', 'title': 'Village' },
                { 'name': 'Rajpur', 'title': 'Village',
			'children': [
                { 'name': 'KamPur', 'title': 'Ward' },
                { 'name': 'DhamPur', 'title': 'Ward','children': [
                { 'name': 'Jila Sur', 'title': 'Booth' },
                { 'name': 'Mila Aur', 'title': 'Booth' }
              ]			 }
              ]				
			  }
              ]
            }
          ]
       }; 

	   
	   
    $('#zonemember-chart').orgchart({
      'data' : datascource,
      'depth': 2,
      'nodeContent': 'title',
      'exportButton': false,
      'exportFilename': 'MyOrgChart'
    });
	
	
	$('#eastzone').orgchart({
      'data' : eastzonecovrage,
      'depth': 4,
      'nodeContent': 'title',
      'exportButton': false,
      'exportFilename': 'MyOrgChart'
    });

	$('#westzone').orgchart({
      'data' : westzonecovrage,
      'depth': 4,
      'nodeContent': 'title',
      'exportButton': false,
      'exportFilename': 'MyOrgChart'
    });
	
  });

})(jQuery);