﻿const populationData = [
    {
      "countyFIPS": 0,
      "County Name": "Statewide Unallocated",
      "State": "AL",
      "population": 0
    },
    {
      "countyFIPS": 1001,
      "County Name": "Autauga County",
      "State": "AL",
      "population": 55869
    },
    {
      "countyFIPS": 1003,
      "County Name": "Baldwin County",
      "State": "AL",
      "population": 223234
    },
    {
      "countyFIPS": 1005,
      "County Name": "Barbour County",
      "State": "AL",
      "population": 24686
    },
    {
      "countyFIPS": 1007,
      "County Name": "Bibb County",
      "State": "AL",
      "population": 22394
    },
    {
      "countyFIPS": 1009,
      "County Name": "Blount County",
      "State": "AL",
      "population": 57826
    },
    {
      "countyFIPS": 1011,
      "County Name": "Bullock County",
      "State": "AL",
      "population": 10101
    },
    {
      "countyFIPS": 1013,
      "County Name": "Butler County",
      "State": "AL",
      "population": 19448
    },
    {
      "countyFIPS": 1015,
      "County Name": "Calhoun County",
      "State": "AL",
      "population": 113605
    },
    {
      "countyFIPS": 1017,
      "County Name": "Chambers County",
      "State": "AL",
      "population": 33254
    },
    {
      "countyFIPS": 1019,
      "County Name": "Cherokee County",
      "State": "AL",
      "population": 26196
    },
    {
      "countyFIPS": 1021,
      "County Name": "Chilton County",
      "State": "AL",
      "population": 44428
    },
    {
      "countyFIPS": 1023,
      "County Name": "Choctaw County",
      "State": "AL",
      "population": 12589
    },
    {
      "countyFIPS": 1025,
      "County Name": "Clarke County",
      "State": "AL",
      "population": 23622
    },
    {
      "countyFIPS": 1027,
      "County Name": "Clay County",
      "State": "AL",
      "population": 13235
    },
    {
      "countyFIPS": 1029,
      "County Name": "Cleburne County",
      "State": "AL",
      "population": 14910
    },
    {
      "countyFIPS": 1031,
      "County Name": "Coffee County",
      "State": "AL",
      "population": 52342
    },
    {
      "countyFIPS": 1033,
      "County Name": "Colbert County",
      "State": "AL",
      "population": 55241
    },
    {
      "countyFIPS": 1035,
      "County Name": "Conecuh County",
      "State": "AL",
      "population": 12067
    },
    {
      "countyFIPS": 1037,
      "County Name": "Coosa County",
      "State": "AL",
      "population": 10663
    },
    {
      "countyFIPS": 1039,
      "County Name": "Covington County",
      "State": "AL",
      "population": 37049
    },
    {
      "countyFIPS": 1041,
      "County Name": "Crenshaw County",
      "State": "AL",
      "population": 13772
    },
    {
      "countyFIPS": 1043,
      "County Name": "Cullman County",
      "State": "AL",
      "population": 83768
    },
    {
      "countyFIPS": 1045,
      "County Name": "Dale County",
      "State": "AL",
      "population": 49172
    },
    {
      "countyFIPS": 1047,
      "County Name": "Dallas County",
      "State": "AL",
      "population": 37196
    },
    {
      "countyFIPS": 1049,
      "County Name": "DeKalb County",
      "State": "AL",
      "population": 71513
    },
    {
      "countyFIPS": 1051,
      "County Name": "Elmore County",
      "State": "AL",
      "population": 81209
    },
    {
      "countyFIPS": 1053,
      "County Name": "Escambia County",
      "State": "AL",
      "population": 36633
    },
    {
      "countyFIPS": 1055,
      "County Name": "Etowah County",
      "State": "AL",
      "population": 102268
    },
    {
      "countyFIPS": 1057,
      "County Name": "Fayette County",
      "State": "AL",
      "population": 16302
    },
    {
      "countyFIPS": 1059,
      "County Name": "Franklin County",
      "State": "AL",
      "population": 31362
    },
    {
      "countyFIPS": 1061,
      "County Name": "Geneva County",
      "State": "AL",
      "population": 26271
    },
    {
      "countyFIPS": 1063,
      "County Name": "Greene County",
      "State": "AL",
      "population": 8111
    },
    {
      "countyFIPS": 1065,
      "County Name": "Hale County",
      "State": "AL",
      "population": 14651
    },
    {
      "countyFIPS": 1067,
      "County Name": "Henry County",
      "State": "AL",
      "population": 17205
    },
    {
      "countyFIPS": 1069,
      "County Name": "Houston County",
      "State": "AL",
      "population": 105882
    },
    {
      "countyFIPS": 1071,
      "County Name": "Jackson County",
      "State": "AL",
      "population": 51626
    },
    {
      "countyFIPS": 1073,
      "County Name": "Jefferson County",
      "State": "AL",
      "population": 658573
    },
    {
      "countyFIPS": 1075,
      "County Name": "Lamar County",
      "State": "AL",
      "population": 13805
    },
    {
      "countyFIPS": 1077,
      "County Name": "Lauderdale County",
      "State": "AL",
      "population": 92729
    },
    {
      "countyFIPS": 1079,
      "County Name": "Lawrence County",
      "State": "AL",
      "population": 32924
    },
    {
      "countyFIPS": 1081,
      "County Name": "Lee County",
      "State": "AL",
      "population": 164542
    },
    {
      "countyFIPS": 1083,
      "County Name": "Limestone County",
      "State": "AL",
      "population": 98915
    },
    {
      "countyFIPS": 1085,
      "County Name": "Lowndes County",
      "State": "AL",
      "population": 9726
    },
    {
      "countyFIPS": 1087,
      "County Name": "Macon County",
      "State": "AL",
      "population": 18068
    },
    {
      "countyFIPS": 1089,
      "County Name": "Madison County",
      "State": "AL",
      "population": 372909
    },
    {
      "countyFIPS": 1091,
      "County Name": "Marengo County",
      "State": "AL",
      "population": 18863
    },
    {
      "countyFIPS": 1093,
      "County Name": "Marion County",
      "State": "AL",
      "population": 29709
    },
    {
      "countyFIPS": 1095,
      "County Name": "Marshall County",
      "State": "AL",
      "population": 96774
    },
    {
      "countyFIPS": 1097,
      "County Name": "Mobile County",
      "State": "AL",
      "population": 413210
    },
    {
      "countyFIPS": 1099,
      "County Name": "Monroe County",
      "State": "AL",
      "population": 20733
    },
    {
      "countyFIPS": 1101,
      "County Name": "Montgomery County",
      "State": "AL",
      "population": 226486
    },
    {
      "countyFIPS": 1103,
      "County Name": "Morgan County",
      "State": "AL",
      "population": 119679
    },
    {
      "countyFIPS": 1105,
      "County Name": "Perry County",
      "State": "AL",
      "population": 8923
    },
    {
      "countyFIPS": 1107,
      "County Name": "Pickens County",
      "State": "AL",
      "population": 19930
    },
    {
      "countyFIPS": 1109,
      "County Name": "Pike County",
      "State": "AL",
      "population": 33114
    },
    {
      "countyFIPS": 1111,
      "County Name": "Randolph County",
      "State": "AL",
      "population": 22722
    },
    {
      "countyFIPS": 1113,
      "County Name": "Russell County",
      "State": "AL",
      "population": 57961
    },
    {
      "countyFIPS": 1115,
      "County Name": "St. Clair County",
      "State": "AL",
      "population": 89512
    },
    {
      "countyFIPS": 1117,
      "County Name": "Shelby County",
      "State": "AL",
      "population": 217702
    },
    {
      "countyFIPS": 1119,
      "County Name": "Sumter County",
      "State": "AL",
      "population": 12427
    },
    {
      "countyFIPS": 1121,
      "County Name": "Talladega County",
      "State": "AL",
      "population": 79978
    },
    {
      "countyFIPS": 1123,
      "County Name": "Tallapoosa County",
      "State": "AL",
      "population": 40367
    },
    {
      "countyFIPS": 1125,
      "County Name": "Tuscaloosa County",
      "State": "AL",
      "population": 209355
    },
    {
      "countyFIPS": 1127,
      "County Name": "Walker County",
      "State": "AL",
      "population": 63521
    },
    {
      "countyFIPS": 1129,
      "County Name": "Washington County",
      "State": "AL",
      "population": 16326
    },
    {
      "countyFIPS": 1131,
      "County Name": "Wilcox County",
      "State": "AL",
      "population": 10373
    },
    {
      "countyFIPS": 1133,
      "County Name": "Winston County",
      "State": "AL",
      "population": 23629
    },
    {
      "countyFIPS": 0,
      "County Name": "Statewide Unallocated",
      "State": "AK",
      "population": 0
    },
    {
      "countyFIPS": 2013,
      "County Name": "Aleutians East Borough",
      "State": "AK",
      "population": 3337
    },
    {
      "countyFIPS": 2016,
      "County Name": "Aleutians West Census Area",
      "State": "AK",
      "population": 5634
    },
    {
      "countyFIPS": 2020,
      "County Name": "Municipality of Anchorage",
      "State": "AK",
      "population": 288000
    },
    {
      "countyFIPS": 2050,
      "County Name": "Bethel Census Area",
      "State": "AK",
      "population": 18386
    },
    {
      "countyFIPS": 2060,
      "County Name": "Bristol Bay Borough",
      "State": "AK",
      "population": 836
    },
    {
      "countyFIPS": 2068,
      "County Name": "Denali Borough",
      "State": "AK",
      "population": 2097
    },
    {
      "countyFIPS": 2070,
      "County Name": "Dillingham Census Area",
      "State": "AK",
      "population": 4916
    },
    {
      "countyFIPS": 2090,
      "County Name": "Fairbanks North Star Borough",
      "State": "AK",
      "population": 96849
    },
    {
      "countyFIPS": 2100,
      "County Name": "Haines Borough",
      "State": "AK",
      "population": 2530
    },
    {
      "countyFIPS": 2105,
      "County Name": "Hoonah-Angoon Census Area",
      "State": "AK",
      "population": 2148
    },
    {
      "countyFIPS": 2110,
      "County Name": "City and Borough of Juneau",
      "State": "AK",
      "population": 31974
    },
    {
      "countyFIPS": 2122,
      "County Name": "Kenai Peninsula Borough",
      "State": "AK",
      "population": 58708
    },
    {
      "countyFIPS": 2130,
      "County Name": "Ketchikan Gateway Borough",
      "State": "AK",
      "population": 13901
    },
    {
      "countyFIPS": 2150,
      "County Name": "Kodiak Island Borough",
      "State": "AK",
      "population": 12998
    },
    {
      "countyFIPS": 2158,
      "County Name": "Kusilvak Census Area",
      "State": "AK",
      "population": 8314
    },
    {
      "countyFIPS": 2164,
      "County Name": "Lake and Peninsula Borough",
      "State": "AK",
      "population": 1592
    },
    {
      "countyFIPS": 2170,
      "County Name": "Matanuska-Susitna Borough",
      "State": "AK",
      "population": 108317
    },
    {
      "countyFIPS": 2180,
      "County Name": "Nome Census Area",
      "State": "AK",
      "population": 10004
    },
    {
      "countyFIPS": 2185,
      "County Name": "North Slope Borough",
      "State": "AK",
      "population": 9832
    },
    {
      "countyFIPS": 2188,
      "County Name": "Northwest Arctic Borough",
      "State": "AK",
      "population": 7621
    },
    {
      "countyFIPS": 2195,
      "County Name": "Petersburg Census Area",
      "State": "AK",
      "population": 3266
    },
    {
      "countyFIPS": 2198,
      "County Name": "Prince of Wales-Hyder Census Area",
      "State": "AK",
      "population": 6203
    },
    {
      "countyFIPS": 2220,
      "County Name": "Sitka City and Borough",
      "State": "AK",
      "population": 8493
    },
    {
      "countyFIPS": 2230,
      "County Name": "Skagway Municipality",
      "State": "AK",
      "population": 1183
    },
    {
      "countyFIPS": 2240,
      "County Name": "Southeast Fairbanks Census Area",
      "State": "AK",
      "population": 6893
    },
    {
      "countyFIPS": 2261,
      "County Name": "Valdez-Cordova Census Area",
      "State": "AK",
      "population": 9202
    },
    {
      "countyFIPS": 2270,
      "County Name": "Wade Hampton Census Area",
      "State": "AK",
      "population": 0
    },
    {
      "countyFIPS": 2275,
      "County Name": "Wrangell City and Borough",
      "State": "AK",
      "population": 2502
    },
    {
      "countyFIPS": 2282,
      "County Name": "Yakutat City and Borough",
      "State": "AK",
      "population": 579
    },
    {
      "countyFIPS": 2290,
      "County Name": "Yukon-Koyukuk Census Area",
      "State": "AK",
      "population": 5230
    },
    {
      "countyFIPS": 0,
      "County Name": "Statewide Unallocated",
      "State": "AZ",
      "population": 0
    },
    {
      "countyFIPS": 4001,
      "County Name": "Apache County",
      "State": "AZ",
      "population": 71887
    },
    {
      "countyFIPS": 4003,
      "County Name": "Cochise County",
      "State": "AZ",
      "population": 125922
    },
    {
      "countyFIPS": 4005,
      "County Name": "Coconino County",
      "State": "AZ",
      "population": 143476
    },
    {
      "countyFIPS": 4007,
      "County Name": "Gila County",
      "State": "AZ",
      "population": 54018
    },
    {
      "countyFIPS": 4009,
      "County Name": "Graham County",
      "State": "AZ",
      "population": 38837
    },
    {
      "countyFIPS": 4011,
      "County Name": "Greenlee County",
      "State": "AZ",
      "population": 9498
    },
    {
      "countyFIPS": 4012,
      "County Name": "La Paz County",
      "State": "AZ",
      "population": 21108
    },
    {
      "countyFIPS": 4013,
      "County Name": "Maricopa County",
      "State": "AZ",
      "population": 4485414
    },
    {
      "countyFIPS": 4015,
      "County Name": "Mohave County",
      "State": "AZ",
      "population": 212181
    },
    {
      "countyFIPS": 4017,
      "County Name": "Navajo County",
      "State": "AZ",
      "population": 110924
    },
    {
      "countyFIPS": 4019,
      "County Name": "Pima County",
      "State": "AZ",
      "population": 1047279
    },
    {
      "countyFIPS": 4021,
      "County Name": "Pinal County",
      "State": "AZ",
      "population": 462789
    },
    {
      "countyFIPS": 4023,
      "County Name": "Santa Cruz County",
      "State": "AZ",
      "population": 46498
    },
    {
      "countyFIPS": 4025,
      "County Name": "Yavapai County",
      "State": "AZ",
      "population": 235099
    },
    {
      "countyFIPS": 4027,
      "County Name": "Yuma County",
      "State": "AZ",
      "population": 213787
    },
    {
      "countyFIPS": 0,
      "County Name": "Statewide Unallocated",
      "State": "AR",
      "population": 0
    },
    {
      "countyFIPS": 5001,
      "County Name": "Arkansas County",
      "State": "AR",
      "population": 17486
    },
    {
      "countyFIPS": 5003,
      "County Name": "Ashley County",
      "State": "AR",
      "population": 19657
    },
    {
      "countyFIPS": 5005,
      "County Name": "Baxter County",
      "State": "AR",
      "population": 41932
    },
    {
      "countyFIPS": 5007,
      "County Name": "Benton County",
      "State": "AR",
      "population": 279141
    },
    {
      "countyFIPS": 5009,
      "County Name": "Boone County",
      "State": "AR",
      "population": 37432
    },
    {
      "countyFIPS": 5011,
      "County Name": "Bradley County",
      "State": "AR",
      "population": 10763
    },
    {
      "countyFIPS": 5013,
      "County Name": "Calhoun County",
      "State": "AR",
      "population": 5189
    },
    {
      "countyFIPS": 5015,
      "County Name": "Carroll County",
      "State": "AR",
      "population": 28380
    },
    {
      "countyFIPS": 5017,
      "County Name": "Chicot County",
      "State": "AR",
      "population": 10118
    },
    {
      "countyFIPS": 5019,
      "County Name": "Clark County",
      "State": "AR",
      "population": 22320
    },
    {
      "countyFIPS": 5021,
      "County Name": "Clay County",
      "State": "AR",
      "population": 14551
    },
    {
      "countyFIPS": 5023,
      "County Name": "Cleburne County",
      "State": "AR",
      "population": 24919
    },
    {
      "countyFIPS": 5025,
      "County Name": "Cleveland County",
      "State": "AR",
      "population": 7956
    },
    {
      "countyFIPS": 5027,
      "County Name": "Columbia County",
      "State": "AR",
      "population": 23457
    },
    {
      "countyFIPS": 5029,
      "County Name": "Conway County",
      "State": "AR",
      "population": 20846
    },
    {
      "countyFIPS": 5031,
      "County Name": "Craighead County",
      "State": "AR",
      "population": 110332
    },
    {
      "countyFIPS": 5033,
      "County Name": "Crawford County",
      "State": "AR",
      "population": 63257
    },
    {
      "countyFIPS": 5035,
      "County Name": "Crittenden County",
      "State": "AR",
      "population": 47955
    },
    {
      "countyFIPS": 5037,
      "County Name": "Cross County",
      "State": "AR",
      "population": 16419
    },
    {
      "countyFIPS": 5039,
      "County Name": "Dallas County",
      "State": "AR",
      "population": 7009
    },
    {
      "countyFIPS": 5041,
      "County Name": "Desha County",
      "State": "AR",
      "population": 11361
    },
    {
      "countyFIPS": 5043,
      "County Name": "Drew County",
      "State": "AR",
      "population": 18219
    },
    {
      "countyFIPS": 5045,
      "County Name": "Faulkner County",
      "State": "AR",
      "population": 126007
    },
    {
      "countyFIPS": 5047,
      "County Name": "Franklin County",
      "State": "AR",
      "population": 17715
    },
    {
      "countyFIPS": 5049,
      "County Name": "Fulton County",
      "State": "AR",
      "population": 12477
    },
    {
      "countyFIPS": 5051,
      "County Name": "Garland County",
      "State": "AR",
      "population": 99386
    },
    {
      "countyFIPS": 5053,
      "County Name": "Grant County",
      "State": "AR",
      "population": 18265
    },
    {
      "countyFIPS": 5055,
      "County Name": "Greene County",
      "State": "AR",
      "population": 45325
    },
    {
      "countyFIPS": 5057,
      "County Name": "Hempstead County",
      "State": "AR",
      "population": 21532
    },
    {
      "countyFIPS": 5059,
      "County Name": "Hot Spring County",
      "State": "AR",
      "population": 33771
    },
    {
      "countyFIPS": 5061,
      "County Name": "Howard County",
      "State": "AR",
      "population": 13202
    },
    {
      "countyFIPS": 5063,
      "County Name": "Independence County",
      "State": "AR",
      "population": 37825
    },
    {
      "countyFIPS": 5065,
      "County Name": "Izard County",
      "State": "AR",
      "population": 13629
    },
    {
      "countyFIPS": 5067,
      "County Name": "Jackson County",
      "State": "AR",
      "population": 16719
    },
    {
      "countyFIPS": 5069,
      "County Name": "Jefferson County",
      "State": "AR",
      "population": 66824
    },
    {
      "countyFIPS": 5071,
      "County Name": "Johnson County",
      "State": "AR",
      "population": 26578
    },
    {
      "countyFIPS": 5073,
      "County Name": "Lafayette County",
      "State": "AR",
      "population": 6624
    },
    {
      "countyFIPS": 5075,
      "County Name": "Lawrence County",
      "State": "AR",
      "population": 16406
    },
    {
      "countyFIPS": 5077,
      "County Name": "Lee County",
      "State": "AR",
      "population": 8857
    },
    {
      "countyFIPS": 5079,
      "County Name": "Lincoln County",
      "State": "AR",
      "population": 13024
    },
    {
      "countyFIPS": 5081,
      "County Name": "Little River County",
      "State": "AR",
      "population": 12259
    },
    {
      "countyFIPS": 5083,
      "County Name": "Logan County",
      "State": "AR",
      "population": 21466
    },
    {
      "countyFIPS": 5085,
      "County Name": "Lonoke County",
      "State": "AR",
      "population": 73309
    },
    {
      "countyFIPS": 5087,
      "County Name": "Madison County",
      "State": "AR",
      "population": 16576
    },
    {
      "countyFIPS": 5089,
      "County Name": "Marion County",
      "State": "AR",
      "population": 16694
    },
    {
      "countyFIPS": 5091,
      "County Name": "Miller County",
      "State": "AR",
      "population": 43257
    },
    {
      "countyFIPS": 5093,
      "County Name": "Mississippi County",
      "State": "AR",
      "population": 40651
    },
    {
      "countyFIPS": 5095,
      "County Name": "Monroe County",
      "State": "AR",
      "population": 6701
    },
    {
      "countyFIPS": 5097,
      "County Name": "Montgomery County",
      "State": "AR",
      "population": 8986
    },
    {
      "countyFIPS": 5099,
      "County Name": "Nevada County",
      "State": "AR",
      "population": 8252
    },
    {
      "countyFIPS": 5101,
      "County Name": "Newton County",
      "State": "AR",
      "population": 7753
    },
    {
      "countyFIPS": 5103,
      "County Name": "Ouachita County",
      "State": "AR",
      "population": 23382
    },
    {
      "countyFIPS": 5105,
      "County Name": "Perry County",
      "State": "AR",
      "population": 10455
    },
    {
      "countyFIPS": 5107,
      "County Name": "Phillips County",
      "State": "AR",
      "population": 17782
    },
    {
      "countyFIPS": 5109,
      "County Name": "Pike County",
      "State": "AR",
      "population": 10718
    },
    {
      "countyFIPS": 5111,
      "County Name": "Poinsett County",
      "State": "AR",
      "population": 23528
    },
    {
      "countyFIPS": 5113,
      "County Name": "Polk County",
      "State": "AR",
      "population": 19964
    },
    {
      "countyFIPS": 5115,
      "County Name": "Pope County",
      "State": "AR",
      "population": 64072
    },
    {
      "countyFIPS": 5117,
      "County Name": "Prairie County",
      "State": "AR",
      "population": 8062
    },
    {
      "countyFIPS": 5119,
      "County Name": "Pulaski County",
      "State": "AR",
      "population": 391911
    },
    {
      "countyFIPS": 5121,
      "County Name": "Randolph County",
      "State": "AR",
      "population": 17958
    },
    {
      "countyFIPS": 5123,
      "County Name": "St. Francis County",
      "State": "AR",
      "population": 24994
    },
    {
      "countyFIPS": 5125,
      "County Name": "Saline County",
      "State": "AR",
      "population": 122437
    },
    {
      "countyFIPS": 5127,
      "County Name": "Scott County",
      "State": "AR",
      "population": 10281
    },
    {
      "countyFIPS": 5129,
      "County Name": "Searcy County",
      "State": "AR",
      "population": 7881
    },
    {
      "countyFIPS": 5131,
      "County Name": "Sebastian County",
      "State": "AR",
      "population": 127827
    },
    {
      "countyFIPS": 5133,
      "County Name": "Sevier County",
      "State": "AR",
      "population": 17007
    },
    {
      "countyFIPS": 5135,
      "County Name": "Sharp County",
      "State": "AR",
      "population": 17442
    },
    {
      "countyFIPS": 5137,
      "County Name": "Stone County",
      "State": "AR",
      "population": 12506
    },
    {
      "countyFIPS": 5139,
      "County Name": "Union County",
      "State": "AR",
      "population": 38682
    },
    {
      "countyFIPS": 5141,
      "County Name": "Van Buren County",
      "State": "AR",
      "population": 16545
    },
    {
      "countyFIPS": 5143,
      "County Name": "Washington County",
      "State": "AR",
      "population": 239187
    },
    {
      "countyFIPS": 5145,
      "County Name": "White County",
      "State": "AR",
      "population": 78753
    },
    {
      "countyFIPS": 5147,
      "County Name": "Woodruff County",
      "State": "AR",
      "population": 6320
    },
    {
      "countyFIPS": 5149,
      "County Name": "Yell County",
      "State": "AR",
      "population": 21341
    },
    {
      "countyFIPS": 0,
      "County Name": "Statewide Unallocated",
      "State": "CA",
      "population": 0
    },
    {
      "countyFIPS": 6000,
      "County Name": "Grand Princess Cruise Ship",
      "State": "CA",
      "population": 0
    },
    {
      "countyFIPS": 6001,
      "County Name": "Alameda County",
      "State": "CA",
      "population": 1671329
    },
    {
      "countyFIPS": 6003,
      "County Name": "Alpine County",
      "State": "CA",
      "population": 1129
    },
    {
      "countyFIPS": 6005,
      "County Name": "Amador County",
      "State": "CA",
      "population": 39752
    },
    {
      "countyFIPS": 6007,
      "County Name": "Butte County",
      "State": "CA",
      "population": 219186
    },
    {
      "countyFIPS": 6009,
      "County Name": "Calaveras County",
      "State": "CA",
      "population": 45905
    },
    {
      "countyFIPS": 6011,
      "County Name": "Colusa County",
      "State": "CA",
      "population": 21547
    },
    {
      "countyFIPS": 6013,
      "County Name": "Contra Costa County",
      "State": "CA",
      "population": 1153526
    },
    {
      "countyFIPS": 6015,
      "County Name": "Del Norte County",
      "State": "CA",
      "population": 27812
    },
    {
      "countyFIPS": 6017,
      "County Name": "El Dorado County",
      "State": "CA",
      "population": 192843
    },
    {
      "countyFIPS": 6019,
      "County Name": "Fresno County",
      "State": "CA",
      "population": 999101
    },
    {
      "countyFIPS": 6021,
      "County Name": "Glenn County",
      "State": "CA",
      "population": 28393
    },
    {
      "countyFIPS": 6023,
      "County Name": "Humboldt County",
      "State": "CA",
      "population": 135558
    },
    {
      "countyFIPS": 6025,
      "County Name": "Imperial County",
      "State": "CA",
      "population": 181215
    },
    {
      "countyFIPS": 6027,
      "County Name": "Inyo County",
      "State": "CA",
      "population": 18039
    },
    {
      "countyFIPS": 6029,
      "County Name": "Kern County",
      "State": "CA",
      "population": 900202
    },
    {
      "countyFIPS": 6031,
      "County Name": "Kings County",
      "State": "CA",
      "population": 152940
    },
    {
      "countyFIPS": 6033,
      "County Name": "Lake County",
      "State": "CA",
      "population": 64386
    },
    {
      "countyFIPS": 6035,
      "County Name": "Lassen County",
      "State": "CA",
      "population": 30573
    },
    {
      "countyFIPS": 6037,
      "County Name": "Los Angeles County",
      "State": "CA",
      "population": 10039107
    },
    {
      "countyFIPS": 6039,
      "County Name": "Madera County",
      "State": "CA",
      "population": 157327
    },
    {
      "countyFIPS": 6041,
      "County Name": "Marin County",
      "State": "CA",
      "population": 258826
    },
    {
      "countyFIPS": 6043,
      "County Name": "Mariposa County",
      "State": "CA",
      "population": 17203
    },
    {
      "countyFIPS": 6045,
      "County Name": "Mendocino County",
      "State": "CA",
      "population": 86749
    },
    {
      "countyFIPS": 6047,
      "County Name": "Merced County",
      "State": "CA",
      "population": 277680
    },
    {
      "countyFIPS": 6049,
      "County Name": "Modoc County",
      "State": "CA",
      "population": 8841
    },
    {
      "countyFIPS": 6051,
      "County Name": "Mono County",
      "State": "CA",
      "population": 14444
    },
    {
      "countyFIPS": 6053,
      "County Name": "Monterey County",
      "State": "CA",
      "population": 434061
    },
    {
      "countyFIPS": 6055,
      "County Name": "Napa County",
      "State": "CA",
      "population": 137744
    },
    {
      "countyFIPS": 6057,
      "County Name": "Nevada County",
      "State": "CA",
      "population": 99755
    },
    {
      "countyFIPS": 6059,
      "County Name": "Orange County",
      "State": "CA",
      "population": 3175692
    },
    {
      "countyFIPS": 6061,
      "County Name": "Placer County",
      "State": "CA",
      "population": 398329
    },
    {
      "countyFIPS": 6063,
      "County Name": "Plumas County",
      "State": "CA",
      "population": 18807
    },
    {
      "countyFIPS": 6065,
      "County Name": "Riverside County",
      "State": "CA",
      "population": 2470546
    },
    {
      "countyFIPS": 6067,
      "County Name": "Sacramento County",
      "State": "CA",
      "population": 1552058
    },
    {
      "countyFIPS": 6069,
      "County Name": "San Benito County",
      "State": "CA",
      "population": 62808
    },
    {
      "countyFIPS": 6071,
      "County Name": "San Bernardino County",
      "State": "CA",
      "population": 2180085
    },
    {
      "countyFIPS": 6073,
      "County Name": "San Diego County",
      "State": "CA",
      "population": 3338330
    },
    {
      "countyFIPS": 6075,
      "County Name": "San Francisco County",
      "State": "CA",
      "population": 881549
    },
    {
      "countyFIPS": 6077,
      "County Name": "San Joaquin County",
      "State": "CA",
      "population": 762148
    },
    {
      "countyFIPS": 6079,
      "County Name": "San Luis Obispo County",
      "State": "CA",
      "population": 283111
    },
    {
      "countyFIPS": 6081,
      "County Name": "San Mateo County",
      "State": "CA",
      "population": 766573
    },
    {
      "countyFIPS": 6083,
      "County Name": "Santa Barbara County",
      "State": "CA",
      "population": 446499
    },
    {
      "countyFIPS": 6085,
      "County Name": "Santa Clara County",
      "State": "CA",
      "population": 1927852
    },
    {
      "countyFIPS": 6087,
      "County Name": "Santa Cruz County",
      "State": "CA",
      "population": 273213
    },
    {
      "countyFIPS": 6089,
      "County Name": "Shasta County",
      "State": "CA",
      "population": 180080
    },
    {
      "countyFIPS": 6091,
      "County Name": "Sierra County",
      "State": "CA",
      "population": 3005
    },
    {
      "countyFIPS": 6093,
      "County Name": "Siskiyou County",
      "State": "CA",
      "population": 43539
    },
    {
      "countyFIPS": 6095,
      "County Name": "Solano County",
      "State": "CA",
      "population": 447643
    },
    {
      "countyFIPS": 6097,
      "County Name": "Sonoma County",
      "State": "CA",
      "population": 494336
    },
    {
      "countyFIPS": 6099,
      "County Name": "Stanislaus County",
      "State": "CA",
      "population": 550660
    },
    {
      "countyFIPS": 6101,
      "County Name": "Sutter County",
      "State": "CA",
      "population": 96971
    },
    {
      "countyFIPS": 6103,
      "County Name": "Tehama County",
      "State": "CA",
      "population": 65084
    },
    {
      "countyFIPS": 6105,
      "County Name": "Trinity County",
      "State": "CA",
      "population": 12285
    },
    {
      "countyFIPS": 6107,
      "County Name": "Tulare County",
      "State": "CA",
      "population": 466195
    },
    {
      "countyFIPS": 6109,
      "County Name": "Tuolumne County",
      "State": "CA",
      "population": 54478
    },
    {
      "countyFIPS": 6111,
      "County Name": "Ventura County",
      "State": "CA",
      "population": 846006
    },
    {
      "countyFIPS": 6113,
      "County Name": "Yolo County",
      "State": "CA",
      "population": 220500
    },
    {
      "countyFIPS": 6115,
      "County Name": "Yuba County",
      "State": "CA",
      "population": 78668
    },
    {
      "countyFIPS": 0,
      "County Name": "Statewide Unallocated",
      "State": "CO",
      "population": 0
    },
    {
      "countyFIPS": 8001,
      "County Name": "Adams County",
      "State": "CO",
      "population": 517421
    },
    {
      "countyFIPS": 8003,
      "County Name": "Alamosa County",
      "State": "CO",
      "population": 16233
    },
    {
      "countyFIPS": 8005,
      "County Name": "Arapahoe County",
      "State": "CO",
      "population": 656590
    },
    {
      "countyFIPS": 8007,
      "County Name": "Archuleta County",
      "State": "CO",
      "population": 14029
    },
    {
      "countyFIPS": 8009,
      "County Name": "Baca County",
      "State": "CO",
      "population": 3581
    },
    {
      "countyFIPS": 8011,
      "County Name": "Bent County",
      "State": "CO",
      "population": 5577
    },
    {
      "countyFIPS": 8013,
      "County Name": "Boulder County",
      "State": "CO",
      "population": 326196
    },
    {
      "countyFIPS": 8014,
      "County Name": "Broomfield County and City",
      "State": "CO",
      "population": 70465
    },
    {
      "countyFIPS": 8015,
      "County Name": "Chaffee County",
      "State": "CO",
      "population": 20356
    },
    {
      "countyFIPS": 8017,
      "County Name": "Cheyenne County",
      "State": "CO",
      "population": 1831
    },
    {
      "countyFIPS": 8019,
      "County Name": "Clear Creek County",
      "State": "CO",
      "population": 9700
    },
    {
      "countyFIPS": 8021,
      "County Name": "Conejos County",
      "State": "CO",
      "population": 8205
    },
    {
      "countyFIPS": 8023,
      "County Name": "Costilla County",
      "State": "CO",
      "population": 3887
    },
    {
      "countyFIPS": 8025,
      "County Name": "Crowley County",
      "State": "CO",
      "population": 6061
    },
    {
      "countyFIPS": 8027,
      "County Name": "Custer County",
      "State": "CO",
      "population": 5068
    },
    {
      "countyFIPS": 8029,
      "County Name": "Delta County",
      "State": "CO",
      "population": 31162
    },
    {
      "countyFIPS": 8031,
      "County Name": "Denver County",
      "State": "CO",
      "population": 727211
    },
    {
      "countyFIPS": 8033,
      "County Name": "Dolores County",
      "State": "CO",
      "population": 2055
    },
    {
      "countyFIPS": 8035,
      "County Name": "Douglas County",
      "State": "CO",
      "population": 351154
    },
    {
      "countyFIPS": 8037,
      "County Name": "Eagle County",
      "State": "CO",
      "population": 55127
    },
    {
      "countyFIPS": 8039,
      "County Name": "Elbert County",
      "State": "CO",
      "population": 26729
    },
    {
      "countyFIPS": 8041,
      "County Name": "El Paso County",
      "State": "CO",
      "population": 720403
    },
    {
      "countyFIPS": 8043,
      "County Name": "Fremont County",
      "State": "CO",
      "population": 47839
    },
    {
      "countyFIPS": 8045,
      "County Name": "Garfield County",
      "State": "CO",
      "population": 60061
    },
    {
      "countyFIPS": 8047,
      "County Name": "Gilpin County",
      "State": "CO",
      "population": 6243
    },
    {
      "countyFIPS": 8049,
      "County Name": "Grand County",
      "State": "CO",
      "population": 15734
    },
    {
      "countyFIPS": 8051,
      "County Name": "Gunnison County",
      "State": "CO",
      "population": 17462
    },
    {
      "countyFIPS": 8053,
      "County Name": "Hinsdale County",
      "State": "CO",
      "population": 820
    },
    {
      "countyFIPS": 8055,
      "County Name": "Huerfano County",
      "State": "CO",
      "population": 6897
    },
    {
      "countyFIPS": 8057,
      "County Name": "Jackson County",
      "State": "CO",
      "population": 1392
    },
    {
      "countyFIPS": 8059,
      "County Name": "Jefferson County",
      "State": "CO",
      "population": 582881
    },
    {
      "countyFIPS": 8061,
      "County Name": "Kiowa County",
      "State": "CO",
      "population": 1406
    },
    {
      "countyFIPS": 8063,
      "County Name": "Kit Carson County",
      "State": "CO",
      "population": 7097
    },
    {
      "countyFIPS": 8065,
      "County Name": "Lake County",
      "State": "CO",
      "population": 8127
    },
    {
      "countyFIPS": 8067,
      "County Name": "La Plata County",
      "State": "CO",
      "population": 56221
    },
    {
      "countyFIPS": 8069,
      "County Name": "Larimer County",
      "State": "CO",
      "population": 356899
    },
    {
      "countyFIPS": 8071,
      "County Name": "Las Animas County",
      "State": "CO",
      "population": 14506
    },
    {
      "countyFIPS": 8073,
      "County Name": "Lincoln County",
      "State": "CO",
      "population": 5701
    },
    {
      "countyFIPS": 8075,
      "County Name": "Logan County",
      "State": "CO",
      "population": 22409
    },
    {
      "countyFIPS": 8077,
      "County Name": "Mesa County",
      "State": "CO",
      "population": 154210
    },
    {
      "countyFIPS": 8079,
      "County Name": "Mineral County",
      "State": "CO",
      "population": 769
    },
    {
      "countyFIPS": 8081,
      "County Name": "Moffat County",
      "State": "CO",
      "population": 13283
    },
    {
      "countyFIPS": 8083,
      "County Name": "Montezuma County",
      "State": "CO",
      "population": 26183
    },
    {
      "countyFIPS": 8085,
      "County Name": "Montrose County",
      "State": "CO",
      "population": 42758
    },
    {
      "countyFIPS": 8087,
      "County Name": "Morgan County",
      "State": "CO",
      "population": 29068
    },
    {
      "countyFIPS": 8089,
      "County Name": "Otero County",
      "State": "CO",
      "population": 18278
    },
    {
      "countyFIPS": 8091,
      "County Name": "Ouray County",
      "State": "CO",
      "population": 4952
    },
    {
      "countyFIPS": 8093,
      "County Name": "Park County",
      "State": "CO",
      "population": 18845
    },
    {
      "countyFIPS": 8095,
      "County Name": "Phillips County",
      "State": "CO",
      "population": 4265
    },
    {
      "countyFIPS": 8097,
      "County Name": "Pitkin County",
      "State": "CO",
      "population": 17767
    },
    {
      "countyFIPS": 8099,
      "County Name": "Prowers County",
      "State": "CO",
      "population": 12172
    },
    {
      "countyFIPS": 8101,
      "County Name": "Pueblo County",
      "State": "CO",
      "population": 168424
    },
    {
      "countyFIPS": 8103,
      "County Name": "Rio Blanco County",
      "State": "CO",
      "population": 6324
    },
    {
      "countyFIPS": 8105,
      "County Name": "Rio Grande County",
      "State": "CO",
      "population": 11267
    },
    {
      "countyFIPS": 8107,
      "County Name": "Routt County",
      "State": "CO",
      "population": 25638
    },
    {
      "countyFIPS": 8109,
      "County Name": "Saguache County",
      "State": "CO",
      "population": 6824
    },
    {
      "countyFIPS": 8111,
      "County Name": "San Juan County",
      "State": "CO",
      "population": 728
    },
    {
      "countyFIPS": 8113,
      "County Name": "San Miguel County",
      "State": "CO",
      "population": 8179
    },
    {
      "countyFIPS": 8115,
      "County Name": "Sedgwick County",
      "State": "CO",
      "population": 2248
    },
    {
      "countyFIPS": 8117,
      "County Name": "Summit County",
      "State": "CO",
      "population": 31011
    },
    {
      "countyFIPS": 8119,
      "County Name": "Teller County",
      "State": "CO",
      "population": 25388
    },
    {
      "countyFIPS": 8121,
      "County Name": "Washington County",
      "State": "CO",
      "population": 4908
    },
    {
      "countyFIPS": 8123,
      "County Name": "Weld County",
      "State": "CO",
      "population": 324492
    },
    {
      "countyFIPS": 8125,
      "County Name": "Yuma County",
      "State": "CO",
      "population": 10019
    },
    {
      "countyFIPS": 0,
      "County Name": "Statewide Unallocated",
      "State": "CT",
      "population": 0
    },
    {
      "countyFIPS": 9001,
      "County Name": "Fairfield County",
      "State": "CT",
      "population": 943332
    },
    {
      "countyFIPS": 9003,
      "County Name": "Hartford County",
      "State": "CT",
      "population": 891720
    },
    {
      "countyFIPS": 9005,
      "County Name": "Litchfield County",
      "State": "CT",
      "population": 180333
    },
    {
      "countyFIPS": 9007,
      "County Name": "Middlesex County",
      "State": "CT",
      "population": 162436
    },
    {
      "countyFIPS": 9009,
      "County Name": "New Haven County",
      "State": "CT",
      "population": 854757
    },
    {
      "countyFIPS": 9011,
      "County Name": "New London County",
      "State": "CT",
      "population": 265206
    },
    {
      "countyFIPS": 9013,
      "County Name": "Tolland County",
      "State": "CT",
      "population": 150721
    },
    {
      "countyFIPS": 9015,
      "County Name": "Windham County",
      "State": "CT",
      "population": 116782
    },
    {
      "countyFIPS": 0,
      "County Name": "Statewide Unallocated",
      "State": "DE",
      "population": 0
    },
    {
      "countyFIPS": 10001,
      "County Name": "Kent County",
      "State": "DE",
      "population": 180786
    },
    {
      "countyFIPS": 10003,
      "County Name": "New Castle County",
      "State": "DE",
      "population": 558753
    },
    {
      "countyFIPS": 10005,
      "County Name": "Sussex County",
      "State": "DE",
      "population": 234225
    },
    {
      "countyFIPS": 11001,
      "County Name": "Washington",
      "State": "DC",
      "population": 705749
    },
    {
      "countyFIPS": 0,
      "County Name": "Statewide Unallocated",
      "State": "FL",
      "population": 0
    },
    {
      "countyFIPS": 12001,
      "County Name": "Alachua County",
      "State": "FL",
      "population": 269043
    },
    {
      "countyFIPS": 12003,
      "County Name": "Baker County",
      "State": "FL",
      "population": 29210
    },
    {
      "countyFIPS": 12005,
      "County Name": "Bay County",
      "State": "FL",
      "population": 174705
    },
    {
      "countyFIPS": 12007,
      "County Name": "Bradford County",
      "State": "FL",
      "population": 28201
    },
    {
      "countyFIPS": 12009,
      "County Name": "Brevard County",
      "State": "FL",
      "population": 601942
    },
    {
      "countyFIPS": 12011,
      "County Name": "Broward County",
      "State": "FL",
      "population": 1952778
    },
    {
      "countyFIPS": 12013,
      "County Name": "Calhoun County",
      "State": "FL",
      "population": 14105
    },
    {
      "countyFIPS": 12015,
      "County Name": "Charlotte County",
      "State": "FL",
      "population": 188910
    },
    {
      "countyFIPS": 12017,
      "County Name": "Citrus County",
      "State": "FL",
      "population": 149657
    },
    {
      "countyFIPS": 12019,
      "County Name": "Clay County",
      "State": "FL",
      "population": 219252
    },
    {
      "countyFIPS": 12021,
      "County Name": "Collier County",
      "State": "FL",
      "population": 384902
    },
    {
      "countyFIPS": 12023,
      "County Name": "Columbia County",
      "State": "FL",
      "population": 71686
    },
    {
      "countyFIPS": 12027,
      "County Name": "DeSoto County",
      "State": "FL",
      "population": 38001
    },
    {
      "countyFIPS": 12029,
      "County Name": "Dixie County",
      "State": "FL",
      "population": 16826
    },
    {
      "countyFIPS": 12031,
      "County Name": "Duval County",
      "State": "FL",
      "population": 957755
    },
    {
      "countyFIPS": 12033,
      "County Name": "Escambia County",
      "State": "FL",
      "population": 318316
    },
    {
      "countyFIPS": 12035,
      "County Name": "Flagler County",
      "State": "FL",
      "population": 115081
    },
    {
      "countyFIPS": 12037,
      "County Name": "Franklin County",
      "State": "FL",
      "population": 12125
    },
    {
      "countyFIPS": 12039,
      "County Name": "Gadsden County",
      "State": "FL",
      "population": 45660
    },
    {
      "countyFIPS": 12041,
      "County Name": "Gilchrist County",
      "State": "FL",
      "population": 18582
    },
    {
      "countyFIPS": 12043,
      "County Name": "Glades County",
      "State": "FL",
      "population": 13811
    },
    {
      "countyFIPS": 12045,
      "County Name": "Gulf County",
      "State": "FL",
      "population": 13639
    },
    {
      "countyFIPS": 12047,
      "County Name": "Hamilton County",
      "State": "FL",
      "population": 14428
    },
    {
      "countyFIPS": 12049,
      "County Name": "Hardee County",
      "State": "FL",
      "population": 26937
    },
    {
      "countyFIPS": 12051,
      "County Name": "Hendry County",
      "State": "FL",
      "population": 42022
    },
    {
      "countyFIPS": 12053,
      "County Name": "Hernando County",
      "State": "FL",
      "population": 193920
    },
    {
      "countyFIPS": 12055,
      "County Name": "Highlands County",
      "State": "FL",
      "population": 106221
    },
    {
      "countyFIPS": 12057,
      "County Name": "Hillsborough County",
      "State": "FL",
      "population": 1471968
    },
    {
      "countyFIPS": 12059,
      "County Name": "Holmes County",
      "State": "FL",
      "population": 19617
    },
    {
      "countyFIPS": 12061,
      "County Name": "Indian River County",
      "State": "FL",
      "population": 159923
    },
    {
      "countyFIPS": 12063,
      "County Name": "Jackson County",
      "State": "FL",
      "population": 46414
    },
    {
      "countyFIPS": 12065,
      "County Name": "Jefferson County",
      "State": "FL",
      "population": 14246
    },
    {
      "countyFIPS": 12067,
      "County Name": "Lafayette County",
      "State": "FL",
      "population": 8422
    },
    {
      "countyFIPS": 12069,
      "County Name": "Lake County",
      "State": "FL",
      "population": 367118
    },
    {
      "countyFIPS": 12071,
      "County Name": "Lee County",
      "State": "FL",
      "population": 770577
    },
    {
      "countyFIPS": 12073,
      "County Name": "Leon County",
      "State": "FL",
      "population": 293582
    },
    {
      "countyFIPS": 12075,
      "County Name": "Levy County",
      "State": "FL",
      "population": 41503
    },
    {
      "countyFIPS": 12077,
      "County Name": "Liberty County",
      "State": "FL",
      "population": 8354
    },
    {
      "countyFIPS": 12079,
      "County Name": "Madison County",
      "State": "FL",
      "population": 18493
    },
    {
      "countyFIPS": 12081,
      "County Name": "Manatee County",
      "State": "FL",
      "population": 403253
    },
    {
      "countyFIPS": 12083,
      "County Name": "Marion County",
      "State": "FL",
      "population": 365579
    },
    {
      "countyFIPS": 12085,
      "County Name": "Martin County",
      "State": "FL",
      "population": 161000
    },
    {
      "countyFIPS": 12086,
      "County Name": "Miami-Dade County",
      "State": "FL",
      "population": 2716940
    },
    {
      "countyFIPS": 12087,
      "County Name": "Monroe County",
      "State": "FL",
      "population": 74228
    },
    {
      "countyFIPS": 12089,
      "County Name": "Nassau County",
      "State": "FL",
      "population": 88625
    },
    {
      "countyFIPS": 12091,
      "County Name": "Okaloosa County",
      "State": "FL",
      "population": 210738
    },
    {
      "countyFIPS": 12093,
      "County Name": "Okeechobee County",
      "State": "FL",
      "population": 42168
    },
    {
      "countyFIPS": 12095,
      "County Name": "Orange County",
      "State": "FL",
      "population": 1393452
    },
    {
      "countyFIPS": 12097,
      "County Name": "Osceola County",
      "State": "FL",
      "population": 375751
    },
    {
      "countyFIPS": 12099,
      "County Name": "Palm Beach County",
      "State": "FL",
      "population": 1496770
    },
    {
      "countyFIPS": 12101,
      "County Name": "Pasco County",
      "State": "FL",
      "population": 553947
    },
    {
      "countyFIPS": 12103,
      "County Name": "Pinellas County",
      "State": "FL",
      "population": 974996
    },
    {
      "countyFIPS": 12105,
      "County Name": "Polk County",
      "State": "FL",
      "population": 724777
    },
    {
      "countyFIPS": 12107,
      "County Name": "Putnam County",
      "State": "FL",
      "population": 74521
    },
    {
      "countyFIPS": 12109,
      "County Name": "St. Johns County",
      "State": "FL",
      "population": 264672
    },
    {
      "countyFIPS": 12111,
      "County Name": "St. Lucie County",
      "State": "FL",
      "population": 328297
    },
    {
      "countyFIPS": 12113,
      "County Name": "Santa Rosa County",
      "State": "FL",
      "population": 184313
    },
    {
      "countyFIPS": 12115,
      "County Name": "Sarasota County",
      "State": "FL",
      "population": 433742
    },
    {
      "countyFIPS": 12117,
      "County Name": "Seminole County",
      "State": "FL",
      "population": 471826
    },
    {
      "countyFIPS": 12119,
      "County Name": "Sumter County",
      "State": "FL",
      "population": 132420
    },
    {
      "countyFIPS": 12121,
      "County Name": "Suwannee County",
      "State": "FL",
      "population": 44417
    },
    {
      "countyFIPS": 12123,
      "County Name": "Taylor County",
      "State": "FL",
      "population": 21569
    },
    {
      "countyFIPS": 12125,
      "County Name": "Union County",
      "State": "FL",
      "population": 15237
    },
    {
      "countyFIPS": 12127,
      "County Name": "Volusia County",
      "State": "FL",
      "population": 553284
    },
    {
      "countyFIPS": 12129,
      "County Name": "Wakulla County",
      "State": "FL",
      "population": 33739
    },
    {
      "countyFIPS": 12131,
      "County Name": "Walton County",
      "State": "FL",
      "population": 74071
    },
    {
      "countyFIPS": 12133,
      "County Name": "Washington County",
      "State": "FL",
      "population": 25473
    },
    {
      "countyFIPS": 0,
      "County Name": "Statewide Unallocated",
      "State": "GA",
      "population": 0
    },
    {
      "countyFIPS": 13001,
      "County Name": "Appling County",
      "State": "GA",
      "population": 18386
    },
    {
      "countyFIPS": 13003,
      "County Name": "Atkinson County",
      "State": "GA",
      "population": 8165
    },
    {
      "countyFIPS": 13005,
      "County Name": "Bacon County",
      "State": "GA",
      "population": 11164
    },
    {
      "countyFIPS": 13007,
      "County Name": "Baker County",
      "State": "GA",
      "population": 3038
    },
    {
      "countyFIPS": 13009,
      "County Name": "Baldwin County",
      "State": "GA",
      "population": 44890
    },
    {
      "countyFIPS": 13011,
      "County Name": "Banks County",
      "State": "GA",
      "population": 19234
    },
    {
      "countyFIPS": 13013,
      "County Name": "Barrow County",
      "State": "GA",
      "population": 83240
    },
    {
      "countyFIPS": 13015,
      "County Name": "Bartow County",
      "State": "GA",
      "population": 107738
    },
    {
      "countyFIPS": 13017,
      "County Name": "Ben Hill County",
      "State": "GA",
      "population": 16700
    },
    {
      "countyFIPS": 13019,
      "County Name": "Berrien County",
      "State": "GA",
      "population": 19397
    },
    {
      "countyFIPS": 13021,
      "County Name": "Bibb County",
      "State": "GA",
      "population": 153159
    },
    {
      "countyFIPS": 13023,
      "County Name": "Bleckley County",
      "State": "GA",
      "population": 12873
    },
    {
      "countyFIPS": 13025,
      "County Name": "Brantley County",
      "State": "GA",
      "population": 19109
    },
    {
      "countyFIPS": 13027,
      "County Name": "Brooks County",
      "State": "GA",
      "population": 15457
    },
    {
      "countyFIPS": 13029,
      "County Name": "Bryan County",
      "State": "GA",
      "population": 39627
    },
    {
      "countyFIPS": 13031,
      "County Name": "Bulloch County",
      "State": "GA",
      "population": 79608
    },
    {
      "countyFIPS": 13033,
      "County Name": "Burke County",
      "State": "GA",
      "population": 22383
    },
    {
      "countyFIPS": 13035,
      "County Name": "Butts County",
      "State": "GA",
      "population": 24936
    },
    {
      "countyFIPS": 13037,
      "County Name": "Calhoun County",
      "State": "GA",
      "population": 6189
    },
    {
      "countyFIPS": 13039,
      "County Name": "Camden County",
      "State": "GA",
      "population": 54666
    },
    {
      "countyFIPS": 13043,
      "County Name": "Candler County",
      "State": "GA",
      "population": 10803
    },
    {
      "countyFIPS": 13045,
      "County Name": "Carroll County",
      "State": "GA",
      "population": 119992
    },
    {
      "countyFIPS": 13047,
      "County Name": "Catoosa County",
      "State": "GA",
      "population": 67580
    },
    {
      "countyFIPS": 13049,
      "County Name": "Charlton County",
      "State": "GA",
      "population": 13392
    },
    {
      "countyFIPS": 13051,
      "County Name": "Chatham County",
      "State": "GA",
      "population": 289430
    },
    {
      "countyFIPS": 13053,
      "County Name": "Chattahoochee County",
      "State": "GA",
      "population": 10907
    },
    {
      "countyFIPS": 13055,
      "County Name": "Chattooga County",
      "State": "GA",
      "population": 24789
    },
    {
      "countyFIPS": 13057,
      "County Name": "Cherokee County",
      "State": "GA",
      "population": 258773
    },
    {
      "countyFIPS": 13059,
      "County Name": "Clarke County",
      "State": "GA",
      "population": 128331
    },
    {
      "countyFIPS": 13061,
      "County Name": "Clay County",
      "State": "GA",
      "population": 2834
    },
    {
      "countyFIPS": 13063,
      "County Name": "Clayton County",
      "State": "GA",
      "population": 292256
    },
    {
      "countyFIPS": 13065,
      "County Name": "Clinch County",
      "State": "GA",
      "population": 6618
    },
    {
      "countyFIPS": 13067,
      "County Name": "Cobb County",
      "State": "GA",
      "population": 760141
    },
    {
      "countyFIPS": 13069,
      "County Name": "Coffee County",
      "State": "GA",
      "population": 43273
    },
    {
      "countyFIPS": 13071,
      "County Name": "Colquitt County",
      "State": "GA",
      "population": 45600
    },
    {
      "countyFIPS": 13073,
      "County Name": "Columbia County",
      "State": "GA",
      "population": 156714
    },
    {
      "countyFIPS": 13075,
      "County Name": "Cook County",
      "State": "GA",
      "population": 17270
    },
    {
      "countyFIPS": 13077,
      "County Name": "Coweta County",
      "State": "GA",
      "population": 148509
    },
    {
      "countyFIPS": 13079,
      "County Name": "Crawford County",
      "State": "GA",
      "population": 12404
    },
    {
      "countyFIPS": 13081,
      "County Name": "Crisp County",
      "State": "GA",
      "population": 22372
    },
    {
      "countyFIPS": 13083,
      "County Name": "Dade County",
      "State": "GA",
      "population": 16116
    },
    {
      "countyFIPS": 13085,
      "County Name": "Dawson County",
      "State": "GA",
      "population": 26108
    },
    {
      "countyFIPS": 13087,
      "County Name": "Decatur County",
      "State": "GA",
      "population": 26404
    },
    {
      "countyFIPS": 13089,
      "County Name": "DeKalb County",
      "State": "GA",
      "population": 759297
    },
    {
      "countyFIPS": 13091,
      "County Name": "Dodge County",
      "State": "GA",
      "population": 20605
    },
    {
      "countyFIPS": 13093,
      "County Name": "Dooly County",
      "State": "GA",
      "population": 13390
    },
    {
      "countyFIPS": 13095,
      "County Name": "Dougherty County",
      "State": "GA",
      "population": 87956
    },
    {
      "countyFIPS": 13097,
      "County Name": "Douglas County",
      "State": "GA",
      "population": 146343
    },
    {
      "countyFIPS": 13099,
      "County Name": "Early County",
      "State": "GA",
      "population": 10190
    },
    {
      "countyFIPS": 13101,
      "County Name": "Echols County",
      "State": "GA",
      "population": 4006
    },
    {
      "countyFIPS": 13103,
      "County Name": "Effingham County",
      "State": "GA",
      "population": 64296
    },
    {
      "countyFIPS": 13105,
      "County Name": "Elbert County",
      "State": "GA",
      "population": 19194
    },
    {
      "countyFIPS": 13107,
      "County Name": "Emanuel County",
      "State": "GA",
      "population": 22646
    },
    {
      "countyFIPS": 13109,
      "County Name": "Evans County",
      "State": "GA",
      "population": 10654
    },
    {
      "countyFIPS": 13111,
      "County Name": "Fannin County",
      "State": "GA",
      "population": 26188
    },
    {
      "countyFIPS": 13113,
      "County Name": "Fayette County",
      "State": "GA",
      "population": 114421
    },
    {
      "countyFIPS": 13115,
      "County Name": "Floyd County",
      "State": "GA",
      "population": 98498
    },
    {
      "countyFIPS": 13117,
      "County Name": "Forsyth County",
      "State": "GA",
      "population": 244252
    },
    {
      "countyFIPS": 13119,
      "County Name": "Franklin County",
      "State": "GA",
      "population": 23349
    },
    {
      "countyFIPS": 13121,
      "County Name": "Fulton County",
      "State": "GA",
      "population": 1063937
    },
    {
      "countyFIPS": 13123,
      "County Name": "Gilmer County",
      "State": "GA",
      "population": 31369
    },
    {
      "countyFIPS": 13125,
      "County Name": "Glascock County",
      "State": "GA",
      "population": 2971
    },
    {
      "countyFIPS": 13127,
      "County Name": "Glynn County",
      "State": "GA",
      "population": 85292
    },
    {
      "countyFIPS": 13129,
      "County Name": "Gordon County",
      "State": "GA",
      "population": 57963
    },
    {
      "countyFIPS": 13131,
      "County Name": "Grady County",
      "State": "GA",
      "population": 24633
    },
    {
      "countyFIPS": 13133,
      "County Name": "Greene County",
      "State": "GA",
      "population": 18324
    },
    {
      "countyFIPS": 13135,
      "County Name": "Gwinnett County",
      "State": "GA",
      "population": 936250
    },
    {
      "countyFIPS": 13137,
      "County Name": "Habersham County",
      "State": "GA",
      "population": 45328
    },
    {
      "countyFIPS": 13139,
      "County Name": "Hall County",
      "State": "GA",
      "population": 204441
    },
    {
      "countyFIPS": 13141,
      "County Name": "Hancock County",
      "State": "GA",
      "population": 8457
    },
    {
      "countyFIPS": 13143,
      "County Name": "Haralson County",
      "State": "GA",
      "population": 29792
    },
    {
      "countyFIPS": 13145,
      "County Name": "Harris County",
      "State": "GA",
      "population": 35236
    },
    {
      "countyFIPS": 13147,
      "County Name": "Hart County",
      "State": "GA",
      "population": 26205
    },
    {
      "countyFIPS": 13149,
      "County Name": "Heard County",
      "State": "GA",
      "population": 11923
    },
    {
      "countyFIPS": 13151,
      "County Name": "Henry County",
      "State": "GA",
      "population": 234561
    },
    {
      "countyFIPS": 13153,
      "County Name": "Houston County",
      "State": "GA",
      "population": 157863
    },
    {
      "countyFIPS": 13155,
      "County Name": "Irwin County",
      "State": "GA",
      "population": 9416
    },
    {
      "countyFIPS": 13157,
      "County Name": "Jackson County",
      "State": "GA",
      "population": 72977
    },
    {
      "countyFIPS": 13159,
      "County Name": "Jasper County",
      "State": "GA",
      "population": 14219
    },
    {
      "countyFIPS": 13161,
      "County Name": "Jeff Davis County",
      "State": "GA",
      "population": 15115
    },
    {
      "countyFIPS": 13163,
      "County Name": "Jefferson County",
      "State": "GA",
      "population": 15362
    },
    {
      "countyFIPS": 13165,
      "County Name": "Jenkins County",
      "State": "GA",
      "population": 8676
    },
    {
      "countyFIPS": 13167,
      "County Name": "Johnson County",
      "State": "GA",
      "population": 9643
    },
    {
      "countyFIPS": 13169,
      "County Name": "Jones County",
      "State": "GA",
      "population": 28735
    },
    {
      "countyFIPS": 13171,
      "County Name": "Lamar County",
      "State": "GA",
      "population": 19077
    },
    {
      "countyFIPS": 13173,
      "County Name": "Lanier County",
      "State": "GA",
      "population": 10423
    },
    {
      "countyFIPS": 13175,
      "County Name": "Laurens County",
      "State": "GA",
      "population": 47546
    },
    {
      "countyFIPS": 13177,
      "County Name": "Lee County",
      "State": "GA",
      "population": 29992
    },
    {
      "countyFIPS": 13179,
      "County Name": "Liberty County",
      "State": "GA",
      "population": 61435
    },
    {
      "countyFIPS": 13181,
      "County Name": "Lincoln County",
      "State": "GA",
      "population": 7921
    },
    {
      "countyFIPS": 13183,
      "County Name": "Long County",
      "State": "GA",
      "population": 19559
    },
    {
      "countyFIPS": 13185,
      "County Name": "Lowndes County",
      "State": "GA",
      "population": 117406
    },
    {
      "countyFIPS": 13187,
      "County Name": "Lumpkin County",
      "State": "GA",
      "population": 33610
    },
    {
      "countyFIPS": 13189,
      "County Name": "McDuffie County",
      "State": "GA",
      "population": 21312
    },
    {
      "countyFIPS": 13191,
      "County Name": "McIntosh County",
      "State": "GA",
      "population": 14378
    },
    {
      "countyFIPS": 13193,
      "County Name": "Macon County",
      "State": "GA",
      "population": 12947
    },
    {
      "countyFIPS": 13195,
      "County Name": "Madison County",
      "State": "GA",
      "population": 29880
    },
    {
      "countyFIPS": 13197,
      "County Name": "Marion County",
      "State": "GA",
      "population": 8359
    },
    {
      "countyFIPS": 13199,
      "County Name": "Meriwether County",
      "State": "GA",
      "population": 21167
    },
    {
      "countyFIPS": 13201,
      "County Name": "Miller County",
      "State": "GA",
      "population": 5718
    },
    {
      "countyFIPS": 13205,
      "County Name": "Mitchell County",
      "State": "GA",
      "population": 21863
    },
    {
      "countyFIPS": 13207,
      "County Name": "Monroe County",
      "State": "GA",
      "population": 27578
    },
    {
      "countyFIPS": 13209,
      "County Name": "Montgomery County",
      "State": "GA",
      "population": 9172
    },
    {
      "countyFIPS": 13211,
      "County Name": "Morgan County",
      "State": "GA",
      "population": 19276
    },
    {
      "countyFIPS": 13213,
      "County Name": "Murray County",
      "State": "GA",
      "population": 40096
    },
    {
      "countyFIPS": 13215,
      "County Name": "Muscogee County",
      "State": "GA",
      "population": 195769
    },
    {
      "countyFIPS": 13217,
      "County Name": "Newton County",
      "State": "GA",
      "population": 111744
    },
    {
      "countyFIPS": 13219,
      "County Name": "Oconee County",
      "State": "GA",
      "population": 40280
    },
    {
      "countyFIPS": 13221,
      "County Name": "Oglethorpe County",
      "State": "GA",
      "population": 15259
    },
    {
      "countyFIPS": 13223,
      "County Name": "Paulding County",
      "State": "GA",
      "population": 168667
    },
    {
      "countyFIPS": 13225,
      "County Name": "Peach County",
      "State": "GA",
      "population": 27546
    },
    {
      "countyFIPS": 13227,
      "County Name": "Pickens County",
      "State": "GA",
      "population": 32591
    },
    {
      "countyFIPS": 13229,
      "County Name": "Pierce County",
      "State": "GA",
      "population": 19465
    },
    {
      "countyFIPS": 13231,
      "County Name": "Pike County",
      "State": "GA",
      "population": 18962
    },
    {
      "countyFIPS": 13233,
      "County Name": "Polk County",
      "State": "GA",
      "population": 42613
    },
    {
      "countyFIPS": 13235,
      "County Name": "Pulaski County",
      "State": "GA",
      "population": 11137
    },
    {
      "countyFIPS": 13237,
      "County Name": "Putnam County",
      "State": "GA",
      "population": 22119
    },
    {
      "countyFIPS": 13239,
      "County Name": "Quitman County",
      "State": "GA",
      "population": 2299
    },
    {
      "countyFIPS": 13241,
      "County Name": "Rabun County",
      "State": "GA",
      "population": 17137
    },
    {
      "countyFIPS": 13243,
      "County Name": "Randolph County",
      "State": "GA",
      "population": 6778
    },
    {
      "countyFIPS": 13245,
      "County Name": "Richmond County",
      "State": "GA",
      "population": 202518
    },
    {
      "countyFIPS": 13247,
      "County Name": "Rockdale County",
      "State": "GA",
      "population": 90896
    },
    {
      "countyFIPS": 13249,
      "County Name": "Schley County",
      "State": "GA",
      "population": 5257
    },
    {
      "countyFIPS": 13251,
      "County Name": "Screven County",
      "State": "GA",
      "population": 13966
    },
    {
      "countyFIPS": 13253,
      "County Name": "Seminole County",
      "State": "GA",
      "population": 8090
    },
    {
      "countyFIPS": 13255,
      "County Name": "Spalding County",
      "State": "GA",
      "population": 66703
    },
    {
      "countyFIPS": 13257,
      "County Name": "Stephens County",
      "State": "GA",
      "population": 25925
    },
    {
      "countyFIPS": 13259,
      "County Name": "Stewart County",
      "State": "GA",
      "population": 6621
    },
    {
      "countyFIPS": 13261,
      "County Name": "Sumter County",
      "State": "GA",
      "population": 29524
    },
    {
      "countyFIPS": 13263,
      "County Name": "Talbot County",
      "State": "GA",
      "population": 6195
    },
    {
      "countyFIPS": 13265,
      "County Name": "Taliaferro County",
      "State": "GA",
      "population": 1537
    },
    {
      "countyFIPS": 13267,
      "County Name": "Tattnall County",
      "State": "GA",
      "population": 25286
    },
    {
      "countyFIPS": 13269,
      "County Name": "Taylor County",
      "State": "GA",
      "population": 8020
    },
    {
      "countyFIPS": 13271,
      "County Name": "Telfair County",
      "State": "GA",
      "population": 15860
    },
    {
      "countyFIPS": 13273,
      "County Name": "Terrell County",
      "State": "GA",
      "population": 8531
    },
    {
      "countyFIPS": 13275,
      "County Name": "Thomas County",
      "State": "GA",
      "population": 44451
    },
    {
      "countyFIPS": 13277,
      "County Name": "Tift County",
      "State": "GA",
      "population": 40644
    },
    {
      "countyFIPS": 13279,
      "County Name": "Toombs County",
      "State": "GA",
      "population": 26830
    },
    {
      "countyFIPS": 13281,
      "County Name": "Towns County",
      "State": "GA",
      "population": 12037
    },
    {
      "countyFIPS": 13283,
      "County Name": "Treutlen County",
      "State": "GA",
      "population": 6901
    },
    {
      "countyFIPS": 13285,
      "County Name": "Troup County",
      "State": "GA",
      "population": 69922
    },
    {
      "countyFIPS": 13287,
      "County Name": "Turner County",
      "State": "GA",
      "population": 7985
    },
    {
      "countyFIPS": 13289,
      "County Name": "Twiggs County",
      "State": "GA",
      "population": 8120
    },
    {
      "countyFIPS": 13291,
      "County Name": "Union County",
      "State": "GA",
      "population": 24511
    },
    {
      "countyFIPS": 13293,
      "County Name": "Upson County",
      "State": "GA",
      "population": 26320
    },
    {
      "countyFIPS": 13295,
      "County Name": "Walker County",
      "State": "GA",
      "population": 69761
    },
    {
      "countyFIPS": 13297,
      "County Name": "Walton County",
      "State": "GA",
      "population": 94593
    },
    {
      "countyFIPS": 13299,
      "County Name": "Ware County",
      "State": "GA",
      "population": 35734
    },
    {
      "countyFIPS": 13301,
      "County Name": "Warren County",
      "State": "GA",
      "population": 5254
    },
    {
      "countyFIPS": 13303,
      "County Name": "Washington County",
      "State": "GA",
      "population": 20374
    },
    {
      "countyFIPS": 13305,
      "County Name": "Wayne County",
      "State": "GA",
      "population": 29927
    },
    {
      "countyFIPS": 13307,
      "County Name": "Webster County",
      "State": "GA",
      "population": 2607
    },
    {
      "countyFIPS": 13309,
      "County Name": "Wheeler County",
      "State": "GA",
      "population": 7855
    },
    {
      "countyFIPS": 13311,
      "County Name": "White County",
      "State": "GA",
      "population": 30798
    },
    {
      "countyFIPS": 13313,
      "County Name": "Whitfield County",
      "State": "GA",
      "population": 104628
    },
    {
      "countyFIPS": 13315,
      "County Name": "Wilcox County",
      "State": "GA",
      "population": 8635
    },
    {
      "countyFIPS": 13317,
      "County Name": "Wilkes County",
      "State": "GA",
      "population": 9777
    },
    {
      "countyFIPS": 13319,
      "County Name": "Wilkinson County",
      "State": "GA",
      "population": 8954
    },
    {
      "countyFIPS": 13321,
      "County Name": "Worth County",
      "State": "GA",
      "population": 20247
    },
    {
      "countyFIPS": 0,
      "County Name": "Statewide Unallocated",
      "State": "HI",
      "population": 0
    },
    {
      "countyFIPS": 15001,
      "County Name": "Hawaii County",
      "State": "HI",
      "population": 201513
    },
    {
      "countyFIPS": 15003,
      "County Name": "Honolulu County",
      "State": "HI",
      "population": 974563
    },
    {
      "countyFIPS": 15005,
      "County Name": "Kalawao County",
      "State": "HI",
      "population": 86
    },
    {
      "countyFIPS": 15007,
      "County Name": "Kauai County",
      "State": "HI",
      "population": 72293
    },
    {
      "countyFIPS": 15009,
      "County Name": "Maui County",
      "State": "HI",
      "population": 167417
    },
    {
      "countyFIPS": 0,
      "County Name": "Statewide Unallocated",
      "State": "ID",
      "population": 0
    },
    {
      "countyFIPS": 16001,
      "County Name": "Ada County",
      "State": "ID",
      "population": 481587
    },
    {
      "countyFIPS": 16003,
      "County Name": "Adams County",
      "State": "ID",
      "population": 4294
    },
    {
      "countyFIPS": 16005,
      "County Name": "Bannock County",
      "State": "ID",
      "population": 87808
    },
    {
      "countyFIPS": 16007,
      "County Name": "Bear Lake County",
      "State": "ID",
      "population": 6125
    },
    {
      "countyFIPS": 16009,
      "County Name": "Benewah County",
      "State": "ID",
      "population": 9298
    },
    {
      "countyFIPS": 16011,
      "County Name": "Bingham County",
      "State": "ID",
      "population": 46811
    },
    {
      "countyFIPS": 16013,
      "County Name": "Blaine County",
      "State": "ID",
      "population": 23021
    },
    {
      "countyFIPS": 16015,
      "County Name": "Boise County",
      "State": "ID",
      "population": 7831
    },
    {
      "countyFIPS": 16017,
      "County Name": "Bonner County",
      "State": "ID",
      "population": 45739
    },
    {
      "countyFIPS": 16019,
      "County Name": "Bonneville County",
      "State": "ID",
      "population": 119062
    },
    {
      "countyFIPS": 16021,
      "County Name": "Boundary County",
      "State": "ID",
      "population": 12245
    },
    {
      "countyFIPS": 16023,
      "County Name": "Butte County",
      "State": "ID",
      "population": 2597
    },
    {
      "countyFIPS": 16025,
      "County Name": "Camas County",
      "State": "ID",
      "population": 1106
    },
    {
      "countyFIPS": 16027,
      "County Name": "Canyon County",
      "State": "ID",
      "population": 229849
    },
    {
      "countyFIPS": 16029,
      "County Name": "Caribou County",
      "State": "ID",
      "population": 7155
    },
    {
      "countyFIPS": 16031,
      "County Name": "Cassia County",
      "State": "ID",
      "population": 24030
    },
    {
      "countyFIPS": 16033,
      "County Name": "Clark County",
      "State": "ID",
      "population": 845
    },
    {
      "countyFIPS": 16035,
      "County Name": "Clearwater County",
      "State": "ID",
      "population": 8756
    },
    {
      "countyFIPS": 16037,
      "County Name": "Custer County",
      "State": "ID",
      "population": 4315
    },
    {
      "countyFIPS": 16039,
      "County Name": "Elmore County",
      "State": "ID",
      "population": 27511
    },
    {
      "countyFIPS": 16041,
      "County Name": "Franklin County",
      "State": "ID",
      "population": 13876
    },
    {
      "countyFIPS": 16043,
      "County Name": "Fremont County",
      "State": "ID",
      "population": 13099
    },
    {
      "countyFIPS": 16045,
      "County Name": "Gem County",
      "State": "ID",
      "population": 18112
    },
    {
      "countyFIPS": 16047,
      "County Name": "Gooding County",
      "State": "ID",
      "population": 15179
    },
    {
      "countyFIPS": 16049,
      "County Name": "Idaho County",
      "State": "ID",
      "population": 16667
    },
    {
      "countyFIPS": 16051,
      "County Name": "Jefferson County",
      "State": "ID",
      "population": 29871
    },
    {
      "countyFIPS": 16053,
      "County Name": "Jerome County",
      "State": "ID",
      "population": 24412
    },
    {
      "countyFIPS": 16055,
      "County Name": "Kootenai County",
      "State": "ID",
      "population": 165697
    },
    {
      "countyFIPS": 16057,
      "County Name": "Latah County",
      "State": "ID",
      "population": 40108
    },
    {
      "countyFIPS": 16059,
      "County Name": "Lemhi County",
      "State": "ID",
      "population": 8027
    },
    {
      "countyFIPS": 16061,
      "County Name": "Lewis County",
      "State": "ID",
      "population": 3838
    },
    {
      "countyFIPS": 16063,
      "County Name": "Lincoln County",
      "State": "ID",
      "population": 5366
    },
    {
      "countyFIPS": 16065,
      "County Name": "Madison County",
      "State": "ID",
      "population": 39907
    },
    {
      "countyFIPS": 16067,
      "County Name": "Minidoka County",
      "State": "ID",
      "population": 21039
    },
    {
      "countyFIPS": 16069,
      "County Name": "Nez Perce County",
      "State": "ID",
      "population": 40408
    },
    {
      "countyFIPS": 16071,
      "County Name": "Oneida County",
      "State": "ID",
      "population": 4531
    },
    {
      "countyFIPS": 16073,
      "County Name": "Owyhee County",
      "State": "ID",
      "population": 11823
    },
    {
      "countyFIPS": 16075,
      "County Name": "Payette County",
      "State": "ID",
      "population": 23951
    },
    {
      "countyFIPS": 16077,
      "County Name": "Power County",
      "State": "ID",
      "population": 7681
    },
    {
      "countyFIPS": 16079,
      "County Name": "Shoshone County",
      "State": "ID",
      "population": 12882
    },
    {
      "countyFIPS": 16081,
      "County Name": "Teton County",
      "State": "ID",
      "population": 12142
    },
    {
      "countyFIPS": 16083,
      "County Name": "Twin Falls County",
      "State": "ID",
      "population": 86878
    },
    {
      "countyFIPS": 16085,
      "County Name": "Valley County",
      "State": "ID",
      "population": 11392
    },
    {
      "countyFIPS": 16087,
      "County Name": "Washington County",
      "State": "ID",
      "population": 10194
    },
    {
      "countyFIPS": 0,
      "County Name": "Statewide Unallocated",
      "State": "IL",
      "population": 0
    },
    {
      "countyFIPS": 17001,
      "County Name": "Adams County",
      "State": "IL",
      "population": 65435
    },
    {
      "countyFIPS": 17003,
      "County Name": "Alexander County",
      "State": "IL",
      "population": 5761
    },
    {
      "countyFIPS": 17005,
      "County Name": "Bond County",
      "State": "IL",
      "population": 16426
    },
    {
      "countyFIPS": 17007,
      "County Name": "Boone County",
      "State": "IL",
      "population": 53544
    },
    {
      "countyFIPS": 17009,
      "County Name": "Brown County",
      "State": "IL",
      "population": 6578
    },
    {
      "countyFIPS": 17011,
      "County Name": "Bureau County",
      "State": "IL",
      "population": 32628
    },
    {
      "countyFIPS": 17013,
      "County Name": "Calhoun County",
      "State": "IL",
      "population": 4739
    },
    {
      "countyFIPS": 17015,
      "County Name": "Carroll County",
      "State": "IL",
      "population": 14305
    },
    {
      "countyFIPS": 17017,
      "County Name": "Cass County",
      "State": "IL",
      "population": 12147
    },
    {
      "countyFIPS": 17019,
      "County Name": "Champaign County",
      "State": "IL",
      "population": 209689
    },
    {
      "countyFIPS": 17021,
      "County Name": "Christian County",
      "State": "IL",
      "population": 32304
    },
    {
      "countyFIPS": 17023,
      "County Name": "Clark County",
      "State": "IL",
      "population": 15441
    },
    {
      "countyFIPS": 17025,
      "County Name": "Clay County",
      "State": "IL",
      "population": 13184
    },
    {
      "countyFIPS": 17027,
      "County Name": "Clinton County",
      "State": "IL",
      "population": 37562
    },
    {
      "countyFIPS": 17029,
      "County Name": "Coles County",
      "State": "IL",
      "population": 50621
    },
    {
      "countyFIPS": 17031,
      "County Name": "Cook County",
      "State": "IL",
      "population": 5150233
    },
    {
      "countyFIPS": 17033,
      "County Name": "Crawford County",
      "State": "IL",
      "population": 18667
    },
    {
      "countyFIPS": 17035,
      "County Name": "Cumberland County",
      "State": "IL",
      "population": 10766
    },
    {
      "countyFIPS": 17037,
      "County Name": "DeKalb County",
      "State": "IL",
      "population": 104897
    },
    {
      "countyFIPS": 17039,
      "County Name": "De Witt County",
      "State": "IL",
      "population": 15638
    },
    {
      "countyFIPS": 17041,
      "County Name": "Douglas County",
      "State": "IL",
      "population": 19465
    },
    {
      "countyFIPS": 17043,
      "County Name": "DuPage County",
      "State": "IL",
      "population": 922921
    },
    {
      "countyFIPS": 17045,
      "County Name": "Edgar County",
      "State": "IL",
      "population": 17161
    },
    {
      "countyFIPS": 17047,
      "County Name": "Edwards County",
      "State": "IL",
      "population": 6395
    },
    {
      "countyFIPS": 17049,
      "County Name": "Effingham County",
      "State": "IL",
      "population": 34008
    },
    {
      "countyFIPS": 17051,
      "County Name": "Fayette County",
      "State": "IL",
      "population": 21336
    },
    {
      "countyFIPS": 17053,
      "County Name": "Ford County",
      "State": "IL",
      "population": 12961
    },
    {
      "countyFIPS": 17055,
      "County Name": "Franklin County",
      "State": "IL",
      "population": 38469
    },
    {
      "countyFIPS": 17057,
      "County Name": "Fulton County",
      "State": "IL",
      "population": 34340
    },
    {
      "countyFIPS": 17059,
      "County Name": "Gallatin County",
      "State": "IL",
      "population": 4828
    },
    {
      "countyFIPS": 17061,
      "County Name": "Greene County",
      "State": "IL",
      "population": 12969
    },
    {
      "countyFIPS": 17063,
      "County Name": "Grundy County",
      "State": "IL",
      "population": 51054
    },
    {
      "countyFIPS": 17065,
      "County Name": "Hamilton County",
      "State": "IL",
      "population": 8116
    },
    {
      "countyFIPS": 17067,
      "County Name": "Hancock County",
      "State": "IL",
      "population": 17708
    },
    {
      "countyFIPS": 17069,
      "County Name": "Hardin County",
      "State": "IL",
      "population": 3821
    },
    {
      "countyFIPS": 17071,
      "County Name": "Henderson County",
      "State": "IL",
      "population": 6646
    },
    {
      "countyFIPS": 17073,
      "County Name": "Henry County",
      "State": "IL",
      "population": 48913
    },
    {
      "countyFIPS": 17075,
      "County Name": "Iroquois County",
      "State": "IL",
      "population": 27114
    },
    {
      "countyFIPS": 17077,
      "County Name": "Jackson County",
      "State": "IL",
      "population": 56750
    },
    {
      "countyFIPS": 17079,
      "County Name": "Jasper County",
      "State": "IL",
      "population": 9610
    },
    {
      "countyFIPS": 17081,
      "County Name": "Jefferson County",
      "State": "IL",
      "population": 37684
    },
    {
      "countyFIPS": 17083,
      "County Name": "Jersey County",
      "State": "IL",
      "population": 21773
    },
    {
      "countyFIPS": 17085,
      "County Name": "Jo Daviess County",
      "State": "IL",
      "population": 21235
    },
    {
      "countyFIPS": 17087,
      "County Name": "Johnson County",
      "State": "IL",
      "population": 12417
    },
    {
      "countyFIPS": 17089,
      "County Name": "Kane County",
      "State": "IL",
      "population": 532403
    },
    {
      "countyFIPS": 17091,
      "County Name": "Kankakee County",
      "State": "IL",
      "population": 109862
    },
    {
      "countyFIPS": 17093,
      "County Name": "Kendall County",
      "State": "IL",
      "population": 128990
    },
    {
      "countyFIPS": 17095,
      "County Name": "Knox County",
      "State": "IL",
      "population": 49699
    },
    {
      "countyFIPS": 17097,
      "County Name": "Lake County",
      "State": "IL",
      "population": 696535
    },
    {
      "countyFIPS": 17099,
      "County Name": "LaSalle County",
      "State": "IL",
      "population": 108669
    },
    {
      "countyFIPS": 17101,
      "County Name": "Lawrence County",
      "State": "IL",
      "population": 15678
    },
    {
      "countyFIPS": 17103,
      "County Name": "Lee County",
      "State": "IL",
      "population": 34096
    },
    {
      "countyFIPS": 17105,
      "County Name": "Livingston County",
      "State": "IL",
      "population": 35648
    },
    {
      "countyFIPS": 17107,
      "County Name": "Logan County",
      "State": "IL",
      "population": 28618
    },
    {
      "countyFIPS": 17109,
      "County Name": "McDonough County",
      "State": "IL",
      "population": 29682
    },
    {
      "countyFIPS": 17111,
      "County Name": "McHenry County",
      "State": "IL",
      "population": 307774
    },
    {
      "countyFIPS": 17113,
      "County Name": "McLean County",
      "State": "IL",
      "population": 171517
    },
    {
      "countyFIPS": 17115,
      "County Name": "Macon County",
      "State": "IL",
      "population": 104009
    },
    {
      "countyFIPS": 17117,
      "County Name": "Macoupin County",
      "State": "IL",
      "population": 44926
    },
    {
      "countyFIPS": 17119,
      "County Name": "Madison County",
      "State": "IL",
      "population": 262966
    },
    {
      "countyFIPS": 17121,
      "County Name": "Marion County",
      "State": "IL",
      "population": 37205
    },
    {
      "countyFIPS": 17123,
      "County Name": "Marshall County",
      "State": "IL",
      "population": 11438
    },
    {
      "countyFIPS": 17125,
      "County Name": "Mason County",
      "State": "IL",
      "population": 13359
    },
    {
      "countyFIPS": 17127,
      "County Name": "Massac County",
      "State": "IL",
      "population": 13772
    },
    {
      "countyFIPS": 17129,
      "County Name": "Menard County",
      "State": "IL",
      "population": 12196
    },
    {
      "countyFIPS": 17131,
      "County Name": "Mercer County",
      "State": "IL",
      "population": 15437
    },
    {
      "countyFIPS": 17133,
      "County Name": "Monroe County",
      "State": "IL",
      "population": 34637
    },
    {
      "countyFIPS": 17135,
      "County Name": "Montgomery County",
      "State": "IL",
      "population": 28414
    },
    {
      "countyFIPS": 17137,
      "County Name": "Morgan County",
      "State": "IL",
      "population": 33658
    },
    {
      "countyFIPS": 17139,
      "County Name": "Moultrie County",
      "State": "IL",
      "population": 14501
    },
    {
      "countyFIPS": 17141,
      "County Name": "Ogle County",
      "State": "IL",
      "population": 50643
    },
    {
      "countyFIPS": 17143,
      "County Name": "Peoria County",
      "State": "IL",
      "population": 179179
    },
    {
      "countyFIPS": 17145,
      "County Name": "Perry County",
      "State": "IL",
      "population": 20916
    },
    {
      "countyFIPS": 17147,
      "County Name": "Piatt County",
      "State": "IL",
      "population": 16344
    },
    {
      "countyFIPS": 17149,
      "County Name": "Pike County",
      "State": "IL",
      "population": 15561
    },
    {
      "countyFIPS": 17151,
      "County Name": "Pope County",
      "State": "IL",
      "population": 4177
    },
    {
      "countyFIPS": 17153,
      "County Name": "Pulaski County",
      "State": "IL",
      "population": 5335
    },
    {
      "countyFIPS": 17155,
      "County Name": "Putnam County",
      "State": "IL",
      "population": 5739
    },
    {
      "countyFIPS": 17157,
      "County Name": "Randolph County",
      "State": "IL",
      "population": 31782
    },
    {
      "countyFIPS": 17159,
      "County Name": "Richland County",
      "State": "IL",
      "population": 15513
    },
    {
      "countyFIPS": 17161,
      "County Name": "Rock Island County",
      "State": "IL",
      "population": 141879
    },
    {
      "countyFIPS": 17163,
      "County Name": "St. Clair County",
      "State": "IL",
      "population": 259686
    },
    {
      "countyFIPS": 17165,
      "County Name": "Saline County",
      "State": "IL",
      "population": 23491
    },
    {
      "countyFIPS": 17167,
      "County Name": "Sangamon County",
      "State": "IL",
      "population": 194672
    },
    {
      "countyFIPS": 17169,
      "County Name": "Schuyler County",
      "State": "IL",
      "population": 6768
    },
    {
      "countyFIPS": 17171,
      "County Name": "Scott County",
      "State": "IL",
      "population": 4951
    },
    {
      "countyFIPS": 17173,
      "County Name": "Shelby County",
      "State": "IL",
      "population": 21634
    },
    {
      "countyFIPS": 17175,
      "County Name": "Stark County",
      "State": "IL",
      "population": 5342
    },
    {
      "countyFIPS": 17177,
      "County Name": "Stephenson County",
      "State": "IL",
      "population": 44498
    },
    {
      "countyFIPS": 17179,
      "County Name": "Tazewell County",
      "State": "IL",
      "population": 131803
    },
    {
      "countyFIPS": 17181,
      "County Name": "Union County",
      "State": "IL",
      "population": 16653
    },
    {
      "countyFIPS": 17183,
      "County Name": "Vermilion County",
      "State": "IL",
      "population": 75758
    },
    {
      "countyFIPS": 17185,
      "County Name": "Wabash County",
      "State": "IL",
      "population": 11520
    },
    {
      "countyFIPS": 17187,
      "County Name": "Warren County",
      "State": "IL",
      "population": 16844
    },
    {
      "countyFIPS": 17189,
      "County Name": "Washington County",
      "State": "IL",
      "population": 13887
    },
    {
      "countyFIPS": 17191,
      "County Name": "Wayne County",
      "State": "IL",
      "population": 16215
    },
    {
      "countyFIPS": 17193,
      "County Name": "White County",
      "State": "IL",
      "population": 13537
    },
    {
      "countyFIPS": 17195,
      "County Name": "Whiteside County",
      "State": "IL",
      "population": 55175
    },
    {
      "countyFIPS": 17197,
      "County Name": "Will County",
      "State": "IL",
      "population": 690743
    },
    {
      "countyFIPS": 17199,
      "County Name": "Williamson County",
      "State": "IL",
      "population": 66597
    },
    {
      "countyFIPS": 17201,
      "County Name": "Winnebago County",
      "State": "IL",
      "population": 282572
    },
    {
      "countyFIPS": 17203,
      "County Name": "Woodford County",
      "State": "IL",
      "population": 38459
    },
    {
      "countyFIPS": 0,
      "County Name": "Statewide Unallocated",
      "State": "IN",
      "population": 0
    },
    {
      "countyFIPS": 18001,
      "County Name": "Adams County",
      "State": "IN",
      "population": 35777
    },
    {
      "countyFIPS": 18003,
      "County Name": "Allen County",
      "State": "IN",
      "population": 379299
    },
    {
      "countyFIPS": 18005,
      "County Name": "Bartholomew County",
      "State": "IN",
      "population": 83779
    },
    {
      "countyFIPS": 18007,
      "County Name": "Benton County",
      "State": "IN",
      "population": 8748
    },
    {
      "countyFIPS": 18009,
      "County Name": "Blackford County",
      "State": "IN",
      "population": 11758
    },
    {
      "countyFIPS": 18011,
      "County Name": "Boone County",
      "State": "IN",
      "population": 67843
    },
    {
      "countyFIPS": 18013,
      "County Name": "Brown County",
      "State": "IN",
      "population": 15092
    },
    {
      "countyFIPS": 18015,
      "County Name": "Carroll County",
      "State": "IN",
      "population": 20257
    },
    {
      "countyFIPS": 18017,
      "County Name": "Cass County",
      "State": "IN",
      "population": 37689
    },
    {
      "countyFIPS": 18019,
      "County Name": "Clark County",
      "State": "IN",
      "population": 118302
    },
    {
      "countyFIPS": 18021,
      "County Name": "Clay County",
      "State": "IN",
      "population": 26225
    },
    {
      "countyFIPS": 18023,
      "County Name": "Clinton County",
      "State": "IN",
      "population": 32399
    },
    {
      "countyFIPS": 18025,
      "County Name": "Crawford County",
      "State": "IN",
      "population": 10577
    },
    {
      "countyFIPS": 18027,
      "County Name": "Daviess County",
      "State": "IN",
      "population": 33351
    },
    {
      "countyFIPS": 18029,
      "County Name": "Dearborn County",
      "State": "IN",
      "population": 49458
    },
    {
      "countyFIPS": 18031,
      "County Name": "Decatur County",
      "State": "IN",
      "population": 26559
    },
    {
      "countyFIPS": 18033,
      "County Name": "DeKalb County",
      "State": "IN",
      "population": 43475
    },
    {
      "countyFIPS": 18035,
      "County Name": "Delaware County",
      "State": "IN",
      "population": 114135
    },
    {
      "countyFIPS": 18037,
      "County Name": "Dubois County",
      "State": "IN",
      "population": 42736
    },
    {
      "countyFIPS": 18039,
      "County Name": "Elkhart County",
      "State": "IN",
      "population": 206341
    },
    {
      "countyFIPS": 18041,
      "County Name": "Fayette County",
      "State": "IN",
      "population": 23102
    },
    {
      "countyFIPS": 18043,
      "County Name": "Floyd County",
      "State": "IN",
      "population": 78522
    },
    {
      "countyFIPS": 18045,
      "County Name": "Fountain County",
      "State": "IN",
      "population": 16346
    },
    {
      "countyFIPS": 18047,
      "County Name": "Franklin County",
      "State": "IN",
      "population": 22758
    },
    {
      "countyFIPS": 18049,
      "County Name": "Fulton County",
      "State": "IN",
      "population": 19974
    },
    {
      "countyFIPS": 18051,
      "County Name": "Gibson County",
      "State": "IN",
      "population": 33659
    },
    {
      "countyFIPS": 18053,
      "County Name": "Grant County",
      "State": "IN",
      "population": 65769
    },
    {
      "countyFIPS": 18055,
      "County Name": "Greene County",
      "State": "IN",
      "population": 31922
    },
    {
      "countyFIPS": 18057,
      "County Name": "Hamilton County",
      "State": "IN",
      "population": 338011
    },
    {
      "countyFIPS": 18059,
      "County Name": "Hancock County",
      "State": "IN",
      "population": 78168
    },
    {
      "countyFIPS": 18061,
      "County Name": "Harrison County",
      "State": "IN",
      "population": 40515
    },
    {
      "countyFIPS": 18063,
      "County Name": "Hendricks County",
      "State": "IN",
      "population": 170311
    },
    {
      "countyFIPS": 18065,
      "County Name": "Henry County",
      "State": "IN",
      "population": 47972
    },
    {
      "countyFIPS": 18067,
      "County Name": "Howard County",
      "State": "IN",
      "population": 82544
    },
    {
      "countyFIPS": 18069,
      "County Name": "Huntington County",
      "State": "IN",
      "population": 36520
    },
    {
      "countyFIPS": 18071,
      "County Name": "Jackson County",
      "State": "IN",
      "population": 44231
    },
    {
      "countyFIPS": 18073,
      "County Name": "Jasper County",
      "State": "IN",
      "population": 33562
    },
    {
      "countyFIPS": 18075,
      "County Name": "Jay County",
      "State": "IN",
      "population": 20436
    },
    {
      "countyFIPS": 18077,
      "County Name": "Jefferson County",
      "State": "IN",
      "population": 32308
    },
    {
      "countyFIPS": 18079,
      "County Name": "Jennings County",
      "State": "IN",
      "population": 27735
    },
    {
      "countyFIPS": 18081,
      "County Name": "Johnson County",
      "State": "IN",
      "population": 158167
    },
    {
      "countyFIPS": 18083,
      "County Name": "Knox County",
      "State": "IN",
      "population": 36594
    },
    {
      "countyFIPS": 18085,
      "County Name": "Kosciusko County",
      "State": "IN",
      "population": 79456
    },
    {
      "countyFIPS": 18087,
      "County Name": "LaGrange County",
      "State": "IN",
      "population": 39614
    },
    {
      "countyFIPS": 18089,
      "County Name": "Lake County",
      "State": "IN",
      "population": 485493
    },
    {
      "countyFIPS": 18091,
      "County Name": "LaPorte County",
      "State": "IN",
      "population": 109888
    },
    {
      "countyFIPS": 18093,
      "County Name": "Lawrence County",
      "State": "IN",
      "population": 45370
    },
    {
      "countyFIPS": 18095,
      "County Name": "Madison County",
      "State": "IN",
      "population": 129569
    },
    {
      "countyFIPS": 18097,
      "County Name": "Marion County",
      "State": "IN",
      "population": 964582
    },
    {
      "countyFIPS": 18099,
      "County Name": "Marshall County",
      "State": "IN",
      "population": 46258
    },
    {
      "countyFIPS": 18101,
      "County Name": "Martin County",
      "State": "IN",
      "population": 10255
    },
    {
      "countyFIPS": 18103,
      "County Name": "Miami County",
      "State": "IN",
      "population": 35516
    },
    {
      "countyFIPS": 18105,
      "County Name": "Monroe County",
      "State": "IN",
      "population": 148431
    },
    {
      "countyFIPS": 18107,
      "County Name": "Montgomery County",
      "State": "IN",
      "population": 38338
    },
    {
      "countyFIPS": 18109,
      "County Name": "Morgan County",
      "State": "IN",
      "population": 70489
    },
    {
      "countyFIPS": 18111,
      "County Name": "Newton County",
      "State": "IN",
      "population": 13984
    },
    {
      "countyFIPS": 18113,
      "County Name": "Noble County",
      "State": "IN",
      "population": 47744
    },
    {
      "countyFIPS": 18115,
      "County Name": "Ohio County",
      "State": "IN",
      "population": 5875
    },
    {
      "countyFIPS": 18117,
      "County Name": "Orange County",
      "State": "IN",
      "population": 19646
    },
    {
      "countyFIPS": 18119,
      "County Name": "Owen County",
      "State": "IN",
      "population": 20799
    },
    {
      "countyFIPS": 18121,
      "County Name": "Parke County",
      "State": "IN",
      "population": 16937
    },
    {
      "countyFIPS": 18123,
      "County Name": "Perry County",
      "State": "IN",
      "population": 19169
    },
    {
      "countyFIPS": 18125,
      "County Name": "Pike County",
      "State": "IN",
      "population": 12389
    },
    {
      "countyFIPS": 18127,
      "County Name": "Porter County",
      "State": "IN",
      "population": 170389
    },
    {
      "countyFIPS": 18129,
      "County Name": "Posey County",
      "State": "IN",
      "population": 25427
    },
    {
      "countyFIPS": 18131,
      "County Name": "Pulaski County",
      "State": "IN",
      "population": 12353
    },
    {
      "countyFIPS": 18133,
      "County Name": "Putnam County",
      "State": "IN",
      "population": 37576
    },
    {
      "countyFIPS": 18135,
      "County Name": "Randolph County",
      "State": "IN",
      "population": 24665
    },
    {
      "countyFIPS": 18137,
      "County Name": "Ripley County",
      "State": "IN",
      "population": 28324
    },
    {
      "countyFIPS": 18139,
      "County Name": "Rush County",
      "State": "IN",
      "population": 16581
    },
    {
      "countyFIPS": 18141,
      "County Name": "St. Joseph County",
      "State": "IN",
      "population": 271826
    },
    {
      "countyFIPS": 18143,
      "County Name": "Scott County",
      "State": "IN",
      "population": 23873
    },
    {
      "countyFIPS": 18145,
      "County Name": "Shelby County",
      "State": "IN",
      "population": 44729
    },
    {
      "countyFIPS": 18147,
      "County Name": "Spencer County",
      "State": "IN",
      "population": 20277
    },
    {
      "countyFIPS": 18149,
      "County Name": "Starke County",
      "State": "IN",
      "population": 22995
    },
    {
      "countyFIPS": 18151,
      "County Name": "Steuben County",
      "State": "IN",
      "population": 34594
    },
    {
      "countyFIPS": 18153,
      "County Name": "Sullivan County",
      "State": "IN",
      "population": 20669
    },
    {
      "countyFIPS": 18155,
      "County Name": "Switzerland County",
      "State": "IN",
      "population": 10751
    },
    {
      "countyFIPS": 18157,
      "County Name": "Tippecanoe County",
      "State": "IN",
      "population": 195732
    },
    {
      "countyFIPS": 18159,
      "County Name": "Tipton County",
      "State": "IN",
      "population": 15148
    },
    {
      "countyFIPS": 18161,
      "County Name": "Union County",
      "State": "IN",
      "population": 7054
    },
    {
      "countyFIPS": 18163,
      "County Name": "Vanderburgh County",
      "State": "IN",
      "population": 181451
    },
    {
      "countyFIPS": 18165,
      "County Name": "Vermillion County",
      "State": "IN",
      "population": 15498
    },
    {
      "countyFIPS": 18167,
      "County Name": "Vigo County",
      "State": "IN",
      "population": 107038
    },
    {
      "countyFIPS": 18169,
      "County Name": "Wabash County",
      "State": "IN",
      "population": 30996
    },
    {
      "countyFIPS": 18171,
      "County Name": "Warren County",
      "State": "IN",
      "population": 8265
    },
    {
      "countyFIPS": 18173,
      "County Name": "Warrick County",
      "State": "IN",
      "population": 62998
    },
    {
      "countyFIPS": 18175,
      "County Name": "Washington County",
      "State": "IN",
      "population": 28036
    },
    {
      "countyFIPS": 18177,
      "County Name": "Wayne County",
      "State": "IN",
      "population": 65884
    },
    {
      "countyFIPS": 18179,
      "County Name": "Wells County",
      "State": "IN",
      "population": 28296
    },
    {
      "countyFIPS": 18181,
      "County Name": "White County",
      "State": "IN",
      "population": 24102
    },
    {
      "countyFIPS": 18183,
      "County Name": "Whitley County",
      "State": "IN",
      "population": 33964
    },
    {
      "countyFIPS": 0,
      "County Name": "Statewide Unallocated",
      "State": "IA",
      "population": 0
    },
    {
      "countyFIPS": 19001,
      "County Name": "Adair County",
      "State": "IA",
      "population": 7152
    },
    {
      "countyFIPS": 19003,
      "County Name": "Adams County",
      "State": "IA",
      "population": 3602
    },
    {
      "countyFIPS": 19005,
      "County Name": "Allamakee County",
      "State": "IA",
      "population": 13687
    },
    {
      "countyFIPS": 19007,
      "County Name": "Appanoose County",
      "State": "IA",
      "population": 12426
    },
    {
      "countyFIPS": 19009,
      "County Name": "Audubon County",
      "State": "IA",
      "population": 5496
    },
    {
      "countyFIPS": 19011,
      "County Name": "Benton County",
      "State": "IA",
      "population": 25645
    },
    {
      "countyFIPS": 19013,
      "County Name": "Black Hawk County",
      "State": "IA",
      "population": 131228
    },
    {
      "countyFIPS": 19015,
      "County Name": "Boone County",
      "State": "IA",
      "population": 26234
    },
    {
      "countyFIPS": 19017,
      "County Name": "Bremer County",
      "State": "IA",
      "population": 25062
    },
    {
      "countyFIPS": 19019,
      "County Name": "Buchanan County",
      "State": "IA",
      "population": 21175
    },
    {
      "countyFIPS": 19021,
      "County Name": "Buena Vista County",
      "State": "IA",
      "population": 19620
    },
    {
      "countyFIPS": 19023,
      "County Name": "Butler County",
      "State": "IA",
      "population": 14439
    },
    {
      "countyFIPS": 19025,
      "County Name": "Calhoun County",
      "State": "IA",
      "population": 9668
    },
    {
      "countyFIPS": 19027,
      "County Name": "Carroll County",
      "State": "IA",
      "population": 20165
    },
    {
      "countyFIPS": 19029,
      "County Name": "Cass County",
      "State": "IA",
      "population": 12836
    },
    {
      "countyFIPS": 19031,
      "County Name": "Cedar County",
      "State": "IA",
      "population": 18627
    },
    {
      "countyFIPS": 19033,
      "County Name": "Cerro Gordo County",
      "State": "IA",
      "population": 42450
    },
    {
      "countyFIPS": 19035,
      "County Name": "Cherokee County",
      "State": "IA",
      "population": 11235
    },
    {
      "countyFIPS": 19037,
      "County Name": "Chickasaw County",
      "State": "IA",
      "population": 11933
    },
    {
      "countyFIPS": 19039,
      "County Name": "Clarke County",
      "State": "IA",
      "population": 9395
    },
    {
      "countyFIPS": 19041,
      "County Name": "Clay County",
      "State": "IA",
      "population": 16016
    },
    {
      "countyFIPS": 19043,
      "County Name": "Clayton County",
      "State": "IA",
      "population": 17549
    },
    {
      "countyFIPS": 19045,
      "County Name": "Clinton County",
      "State": "IA",
      "population": 46429
    },
    {
      "countyFIPS": 19047,
      "County Name": "Crawford County",
      "State": "IA",
      "population": 16820
    },
    {
      "countyFIPS": 19049,
      "County Name": "Dallas County",
      "State": "IA",
      "population": 93453
    },
    {
      "countyFIPS": 19051,
      "County Name": "Davis County",
      "State": "IA",
      "population": 9000
    },
    {
      "countyFIPS": 19053,
      "County Name": "Decatur County",
      "State": "IA",
      "population": 7870
    },
    {
      "countyFIPS": 19055,
      "County Name": "Delaware County",
      "State": "IA",
      "population": 17011
    },
    {
      "countyFIPS": 19057,
      "County Name": "Des Moines County",
      "State": "IA",
      "population": 38967
    },
    {
      "countyFIPS": 19059,
      "County Name": "Dickinson County",
      "State": "IA",
      "population": 17258
    },
    {
      "countyFIPS": 19061,
      "County Name": "Dubuque County",
      "State": "IA",
      "population": 97311
    },
    {
      "countyFIPS": 19063,
      "County Name": "Emmet County",
      "State": "IA",
      "population": 9208
    },
    {
      "countyFIPS": 19065,
      "County Name": "Fayette County",
      "State": "IA",
      "population": 19650
    },
    {
      "countyFIPS": 19067,
      "County Name": "Floyd County",
      "State": "IA",
      "population": 15642
    },
    {
      "countyFIPS": 19069,
      "County Name": "Franklin County",
      "State": "IA",
      "population": 10070
    },
    {
      "countyFIPS": 19071,
      "County Name": "Fremont County",
      "State": "IA",
      "population": 6960
    },
    {
      "countyFIPS": 19073,
      "County Name": "Greene County",
      "State": "IA",
      "population": 8888
    },
    {
      "countyFIPS": 19075,
      "County Name": "Grundy County",
      "State": "IA",
      "population": 12232
    },
    {
      "countyFIPS": 19077,
      "County Name": "Guthrie County",
      "State": "IA",
      "population": 10689
    },
    {
      "countyFIPS": 19079,
      "County Name": "Hamilton County",
      "State": "IA",
      "population": 14773
    },
    {
      "countyFIPS": 19081,
      "County Name": "Hancock County",
      "State": "IA",
      "population": 10630
    },
    {
      "countyFIPS": 19083,
      "County Name": "Hardin County",
      "State": "IA",
      "population": 16846
    },
    {
      "countyFIPS": 19085,
      "County Name": "Harrison County",
      "State": "IA",
      "population": 14049
    },
    {
      "countyFIPS": 19087,
      "County Name": "Henry County",
      "State": "IA",
      "population": 19954
    },
    {
      "countyFIPS": 19089,
      "County Name": "Howard County",
      "State": "IA",
      "population": 9158
    },
    {
      "countyFIPS": 19091,
      "County Name": "Humboldt County",
      "State": "IA",
      "population": 9558
    },
    {
      "countyFIPS": 19093,
      "County Name": "Ida County",
      "State": "IA",
      "population": 6860
    },
    {
      "countyFIPS": 19095,
      "County Name": "Iowa County",
      "State": "IA",
      "population": 16184
    },
    {
      "countyFIPS": 19097,
      "County Name": "Jackson County",
      "State": "IA",
      "population": 19439
    },
    {
      "countyFIPS": 19099,
      "County Name": "Jasper County",
      "State": "IA",
      "population": 37185
    },
    {
      "countyFIPS": 19101,
      "County Name": "Jefferson County",
      "State": "IA",
      "population": 18295
    },
    {
      "countyFIPS": 19103,
      "County Name": "Johnson County",
      "State": "IA",
      "population": 151140
    },
    {
      "countyFIPS": 19105,
      "County Name": "Jones County",
      "State": "IA",
      "population": 20681
    },
    {
      "countyFIPS": 19107,
      "County Name": "Keokuk County",
      "State": "IA",
      "population": 10246
    },
    {
      "countyFIPS": 19109,
      "County Name": "Kossuth County",
      "State": "IA",
      "population": 14813
    },
    {
      "countyFIPS": 19111,
      "County Name": "Lee County",
      "State": "IA",
      "population": 33657
    },
    {
      "countyFIPS": 19113,
      "County Name": "Linn County",
      "State": "IA",
      "population": 226706
    },
    {
      "countyFIPS": 19115,
      "County Name": "Louisa County",
      "State": "IA",
      "population": 11035
    },
    {
      "countyFIPS": 19117,
      "County Name": "Lucas County",
      "State": "IA",
      "population": 8600
    },
    {
      "countyFIPS": 19119,
      "County Name": "Lyon County",
      "State": "IA",
      "population": 11755
    },
    {
      "countyFIPS": 19121,
      "County Name": "Madison County",
      "State": "IA",
      "population": 16338
    },
    {
      "countyFIPS": 19123,
      "County Name": "Mahaska County",
      "State": "IA",
      "population": 22095
    },
    {
      "countyFIPS": 19125,
      "County Name": "Marion County",
      "State": "IA",
      "population": 33253
    },
    {
      "countyFIPS": 19127,
      "County Name": "Marshall County",
      "State": "IA",
      "population": 39369
    },
    {
      "countyFIPS": 19129,
      "County Name": "Mills County",
      "State": "IA",
      "population": 15109
    },
    {
      "countyFIPS": 19131,
      "County Name": "Mitchell County",
      "State": "IA",
      "population": 10586
    },
    {
      "countyFIPS": 19133,
      "County Name": "Monona County",
      "State": "IA",
      "population": 8615
    },
    {
      "countyFIPS": 19135,
      "County Name": "Monroe County",
      "State": "IA",
      "population": 7707
    },
    {
      "countyFIPS": 19137,
      "County Name": "Montgomery County",
      "State": "IA",
      "population": 9917
    },
    {
      "countyFIPS": 19139,
      "County Name": "Muscatine County",
      "State": "IA",
      "population": 42664
    },
    {
      "countyFIPS": 19141,
      "County Name": "O'Brien County",
      "State": "IA",
      "population": 13753
    },
    {
      "countyFIPS": 19143,
      "County Name": "Osceola County",
      "State": "IA",
      "population": 5958
    },
    {
      "countyFIPS": 19145,
      "County Name": "Page County",
      "State": "IA",
      "population": 15107
    },
    {
      "countyFIPS": 19147,
      "County Name": "Palo Alto County",
      "State": "IA",
      "population": 8886
    },
    {
      "countyFIPS": 19149,
      "County Name": "Plymouth County",
      "State": "IA",
      "population": 25177
    },
    {
      "countyFIPS": 19151,
      "County Name": "Pocahontas County",
      "State": "IA",
      "population": 6619
    },
    {
      "countyFIPS": 19153,
      "County Name": "Polk County",
      "State": "IA",
      "population": 490161
    },
    {
      "countyFIPS": 19155,
      "County Name": "Pottawattamie County",
      "State": "IA",
      "population": 93206
    },
    {
      "countyFIPS": 19157,
      "County Name": "Poweshiek County",
      "State": "IA",
      "population": 18504
    },
    {
      "countyFIPS": 19159,
      "County Name": "Ringgold County",
      "State": "IA",
      "population": 4894
    },
    {
      "countyFIPS": 19161,
      "County Name": "Sac County",
      "State": "IA",
      "population": 9721
    },
    {
      "countyFIPS": 19163,
      "County Name": "Scott County",
      "State": "IA",
      "population": 172943
    },
    {
      "countyFIPS": 19165,
      "County Name": "Shelby County",
      "State": "IA",
      "population": 11454
    },
    {
      "countyFIPS": 19167,
      "County Name": "Sioux County",
      "State": "IA",
      "population": 34855
    },
    {
      "countyFIPS": 19169,
      "County Name": "Story County",
      "State": "IA",
      "population": 97117
    },
    {
      "countyFIPS": 19171,
      "County Name": "Tama County",
      "State": "IA",
      "population": 16854
    },
    {
      "countyFIPS": 19173,
      "County Name": "Taylor County",
      "State": "IA",
      "population": 6121
    },
    {
      "countyFIPS": 19175,
      "County Name": "Union County",
      "State": "IA",
      "population": 12241
    },
    {
      "countyFIPS": 19177,
      "County Name": "Van Buren County",
      "State": "IA",
      "population": 7044
    },
    {
      "countyFIPS": 19179,
      "County Name": "Wapello County",
      "State": "IA",
      "population": 34969
    },
    {
      "countyFIPS": 19181,
      "County Name": "Warren County",
      "State": "IA",
      "population": 51466
    },
    {
      "countyFIPS": 19183,
      "County Name": "Washington County",
      "State": "IA",
      "population": 21965
    },
    {
      "countyFIPS": 19185,
      "County Name": "Wayne County",
      "State": "IA",
      "population": 6441
    },
    {
      "countyFIPS": 19187,
      "County Name": "Webster County",
      "State": "IA",
      "population": 35904
    },
    {
      "countyFIPS": 19189,
      "County Name": "Winnebago County",
      "State": "IA",
      "population": 10354
    },
    {
      "countyFIPS": 19191,
      "County Name": "Winneshiek County",
      "State": "IA",
      "population": 19991
    },
    {
      "countyFIPS": 19193,
      "County Name": "Woodbury County",
      "State": "IA",
      "population": 103107
    },
    {
      "countyFIPS": 19195,
      "County Name": "Worth County",
      "State": "IA",
      "population": 7381
    },
    {
      "countyFIPS": 19197,
      "County Name": "Wright County",
      "State": "IA",
      "population": 12562
    },
    {
      "countyFIPS": 0,
      "County Name": "Statewide Unallocated",
      "State": "KS",
      "population": 0
    },
    {
      "countyFIPS": 20001,
      "County Name": "Allen County",
      "State": "KS",
      "population": 12369
    },
    {
      "countyFIPS": 20003,
      "County Name": "Anderson County",
      "State": "KS",
      "population": 7858
    },
    {
      "countyFIPS": 20005,
      "County Name": "Atchison County",
      "State": "KS",
      "population": 16073
    },
    {
      "countyFIPS": 20007,
      "County Name": "Barber County",
      "State": "KS",
      "population": 4427
    },
    {
      "countyFIPS": 20009,
      "County Name": "Barton County",
      "State": "KS",
      "population": 25779
    },
    {
      "countyFIPS": 20011,
      "County Name": "Bourbon County",
      "State": "KS",
      "population": 14534
    },
    {
      "countyFIPS": 20013,
      "County Name": "Brown County",
      "State": "KS",
      "population": 9564
    },
    {
      "countyFIPS": 20015,
      "County Name": "Butler County",
      "State": "KS",
      "population": 66911
    },
    {
      "countyFIPS": 20017,
      "County Name": "Chase County",
      "State": "KS",
      "population": 2648
    },
    {
      "countyFIPS": 20019,
      "County Name": "Chautauqua County",
      "State": "KS",
      "population": 3250
    },
    {
      "countyFIPS": 20021,
      "County Name": "Cherokee County",
      "State": "KS",
      "population": 19939
    },
    {
      "countyFIPS": 20023,
      "County Name": "Cheyenne County",
      "State": "KS",
      "population": 2657
    },
    {
      "countyFIPS": 20025,
      "County Name": "Clark County",
      "State": "KS",
      "population": 1994
    },
    {
      "countyFIPS": 20027,
      "County Name": "Clay County",
      "State": "KS",
      "population": 8002
    },
    {
      "countyFIPS": 20029,
      "County Name": "Cloud County",
      "State": "KS",
      "population": 8786
    },
    {
      "countyFIPS": 20031,
      "County Name": "Coffey County",
      "State": "KS",
      "population": 8179
    },
    {
      "countyFIPS": 20033,
      "County Name": "Comanche County",
      "State": "KS",
      "population": 1700
    },
    {
      "countyFIPS": 20035,
      "County Name": "Cowley County",
      "State": "KS",
      "population": 34908
    },
    {
      "countyFIPS": 20037,
      "County Name": "Crawford County",
      "State": "KS",
      "population": 38818
    },
    {
      "countyFIPS": 20039,
      "County Name": "Decatur County",
      "State": "KS",
      "population": 2827
    },
    {
      "countyFIPS": 20041,
      "County Name": "Dickinson County",
      "State": "KS",
      "population": 18466
    },
    {
      "countyFIPS": 20043,
      "County Name": "Doniphan County",
      "State": "KS",
      "population": 7600
    },
    {
      "countyFIPS": 20045,
      "County Name": "Douglas County",
      "State": "KS",
      "population": 122259
    },
    {
      "countyFIPS": 20047,
      "County Name": "Edwards County",
      "State": "KS",
      "population": 2798
    },
    {
      "countyFIPS": 20049,
      "County Name": "Elk County",
      "State": "KS",
      "population": 2530
    },
    {
      "countyFIPS": 20051,
      "County Name": "Ellis County",
      "State": "KS",
      "population": 28553
    },
    {
      "countyFIPS": 20053,
      "County Name": "Ellsworth County",
      "State": "KS",
      "population": 6102
    },
    {
      "countyFIPS": 20055,
      "County Name": "Finney County",
      "State": "KS",
      "population": 36467
    },
    {
      "countyFIPS": 20057,
      "County Name": "Ford County",
      "State": "KS",
      "population": 33619
    },
    {
      "countyFIPS": 20059,
      "County Name": "Franklin County",
      "State": "KS",
      "population": 25544
    },
    {
      "countyFIPS": 20061,
      "County Name": "Geary County",
      "State": "KS",
      "population": 31670
    },
    {
      "countyFIPS": 20063,
      "County Name": "Gove County",
      "State": "KS",
      "population": 2636
    },
    {
      "countyFIPS": 20065,
      "County Name": "Graham County",
      "State": "KS",
      "population": 2482
    },
    {
      "countyFIPS": 20067,
      "County Name": "Grant County",
      "State": "KS",
      "population": 7150
    },
    {
      "countyFIPS": 20069,
      "County Name": "Gray County",
      "State": "KS",
      "population": 5988
    },
    {
      "countyFIPS": 20071,
      "County Name": "Greeley County",
      "State": "KS",
      "population": 1232
    },
    {
      "countyFIPS": 20073,
      "County Name": "Greenwood County",
      "State": "KS",
      "population": 5982
    },
    {
      "countyFIPS": 20075,
      "County Name": "Hamilton County",
      "State": "KS",
      "population": 2539
    },
    {
      "countyFIPS": 20077,
      "County Name": "Harper County",
      "State": "KS",
      "population": 5436
    },
    {
      "countyFIPS": 20079,
      "County Name": "Harvey County",
      "State": "KS",
      "population": 34429
    },
    {
      "countyFIPS": 20081,
      "County Name": "Haskell County",
      "State": "KS",
      "population": 3968
    },
    {
      "countyFIPS": 20083,
      "County Name": "Hodgeman County",
      "State": "KS",
      "population": 1794
    },
    {
      "countyFIPS": 20085,
      "County Name": "Jackson County",
      "State": "KS",
      "population": 13171
    },
    {
      "countyFIPS": 20087,
      "County Name": "Jefferson County",
      "State": "KS",
      "population": 19043
    },
    {
      "countyFIPS": 20089,
      "County Name": "Jewell County",
      "State": "KS",
      "population": 2879
    },
    {
      "countyFIPS": 20091,
      "County Name": "Johnson County",
      "State": "KS",
      "population": 602401
    },
    {
      "countyFIPS": 20093,
      "County Name": "Kearny County",
      "State": "KS",
      "population": 3838
    },
    {
      "countyFIPS": 20095,
      "County Name": "Kingman County",
      "State": "KS",
      "population": 7152
    },
    {
      "countyFIPS": 20097,
      "County Name": "Kiowa County",
      "State": "KS",
      "population": 2475
    },
    {
      "countyFIPS": 20099,
      "County Name": "Labette County",
      "State": "KS",
      "population": 19618
    },
    {
      "countyFIPS": 20101,
      "County Name": "Lane County",
      "State": "KS",
      "population": 1535
    },
    {
      "countyFIPS": 20103,
      "County Name": "Leavenworth County",
      "State": "KS",
      "population": 81758
    },
    {
      "countyFIPS": 20105,
      "County Name": "Lincoln County",
      "State": "KS",
      "population": 2962
    },
    {
      "countyFIPS": 20107,
      "County Name": "Linn County",
      "State": "KS",
      "population": 9703
    },
    {
      "countyFIPS": 20109,
      "County Name": "Logan County",
      "State": "KS",
      "population": 2794
    },
    {
      "countyFIPS": 20111,
      "County Name": "Lyon County",
      "State": "KS",
      "population": 33195
    },
    {
      "countyFIPS": 20113,
      "County Name": "McPherson County",
      "State": "KS",
      "population": 28542
    },
    {
      "countyFIPS": 20115,
      "County Name": "Marion County",
      "State": "KS",
      "population": 11884
    },
    {
      "countyFIPS": 20117,
      "County Name": "Marshall County",
      "State": "KS",
      "population": 9707
    },
    {
      "countyFIPS": 20119,
      "County Name": "Meade County",
      "State": "KS",
      "population": 4033
    },
    {
      "countyFIPS": 20121,
      "County Name": "Miami County",
      "State": "KS",
      "population": 34237
    },
    {
      "countyFIPS": 20123,
      "County Name": "Mitchell County",
      "State": "KS",
      "population": 5979
    },
    {
      "countyFIPS": 20125,
      "County Name": "Montgomery County",
      "State": "KS",
      "population": 31829
    },
    {
      "countyFIPS": 20127,
      "County Name": "Morris County",
      "State": "KS",
      "population": 5620
    },
    {
      "countyFIPS": 20129,
      "County Name": "Morton County",
      "State": "KS",
      "population": 2587
    },
    {
      "countyFIPS": 20131,
      "County Name": "Nemaha County",
      "State": "KS",
      "population": 10231
    },
    {
      "countyFIPS": 20133,
      "County Name": "Neosho County",
      "State": "KS",
      "population": 16007
    },
    {
      "countyFIPS": 20135,
      "County Name": "Ness County",
      "State": "KS",
      "population": 2750
    },
    {
      "countyFIPS": 20137,
      "County Name": "Norton County",
      "State": "KS",
      "population": 5361
    },
    {
      "countyFIPS": 20139,
      "County Name": "Osage County",
      "State": "KS",
      "population": 15949
    },
    {
      "countyFIPS": 20141,
      "County Name": "Osborne County",
      "State": "KS",
      "population": 3421
    },
    {
      "countyFIPS": 20143,
      "County Name": "Ottawa County",
      "State": "KS",
      "population": 5704
    },
    {
      "countyFIPS": 20145,
      "County Name": "Pawnee County",
      "State": "KS",
      "population": 6414
    },
    {
      "countyFIPS": 20147,
      "County Name": "Phillips County",
      "State": "KS",
      "population": 5234
    },
    {
      "countyFIPS": 20149,
      "County Name": "Pottawatomie County",
      "State": "KS",
      "population": 24383
    },
    {
      "countyFIPS": 20151,
      "County Name": "Pratt County",
      "State": "KS",
      "population": 9164
    },
    {
      "countyFIPS": 20153,
      "County Name": "Rawlins County",
      "State": "KS",
      "population": 2530
    },
    {
      "countyFIPS": 20155,
      "County Name": "Reno County",
      "State": "KS",
      "population": 61998
    },
    {
      "countyFIPS": 20157,
      "County Name": "Republic County",
      "State": "KS",
      "population": 4636
    },
    {
      "countyFIPS": 20159,
      "County Name": "Rice County",
      "State": "KS",
      "population": 9537
    },
    {
      "countyFIPS": 20161,
      "County Name": "Riley County",
      "State": "KS",
      "population": 74232
    },
    {
      "countyFIPS": 20163,
      "County Name": "Rooks County",
      "State": "KS",
      "population": 4920
    },
    {
      "countyFIPS": 20165,
      "County Name": "Rush County",
      "State": "KS",
      "population": 3036
    },
    {
      "countyFIPS": 20167,
      "County Name": "Russell County",
      "State": "KS",
      "population": 6856
    },
    {
      "countyFIPS": 20169,
      "County Name": "Saline County",
      "State": "KS",
      "population": 54224
    },
    {
      "countyFIPS": 20171,
      "County Name": "Scott County",
      "State": "KS",
      "population": 4823
    },
    {
      "countyFIPS": 20173,
      "County Name": "Sedgwick County",
      "State": "KS",
      "population": 516042
    },
    {
      "countyFIPS": 20175,
      "County Name": "Seward County",
      "State": "KS",
      "population": 21428
    },
    {
      "countyFIPS": 20177,
      "County Name": "Shawnee County",
      "State": "KS",
      "population": 176875
    },
    {
      "countyFIPS": 20179,
      "County Name": "Sheridan County",
      "State": "KS",
      "population": 2521
    },
    {
      "countyFIPS": 20181,
      "County Name": "Sherman County",
      "State": "KS",
      "population": 5917
    },
    {
      "countyFIPS": 20183,
      "County Name": "Smith County",
      "State": "KS",
      "population": 3583
    },
    {
      "countyFIPS": 20185,
      "County Name": "Stafford County",
      "State": "KS",
      "population": 4156
    },
    {
      "countyFIPS": 20187,
      "County Name": "Stanton County",
      "State": "KS",
      "population": 2006
    },
    {
      "countyFIPS": 20189,
      "County Name": "Stevens County",
      "State": "KS",
      "population": 5485
    },
    {
      "countyFIPS": 20191,
      "County Name": "Sumner County",
      "State": "KS",
      "population": 22836
    },
    {
      "countyFIPS": 20193,
      "County Name": "Thomas County",
      "State": "KS",
      "population": 7777
    },
    {
      "countyFIPS": 20195,
      "County Name": "Trego County",
      "State": "KS",
      "population": 2803
    },
    {
      "countyFIPS": 20197,
      "County Name": "Wabaunsee County",
      "State": "KS",
      "population": 6931
    },
    {
      "countyFIPS": 20199,
      "County Name": "Wallace County",
      "State": "KS",
      "population": 1518
    },
    {
      "countyFIPS": 20201,
      "County Name": "Washington County",
      "State": "KS",
      "population": 5406
    },
    {
      "countyFIPS": 20203,
      "County Name": "Wichita County",
      "State": "KS",
      "population": 2119
    },
    {
      "countyFIPS": 20205,
      "County Name": "Wilson County",
      "State": "KS",
      "population": 8525
    },
    {
      "countyFIPS": 20207,
      "County Name": "Woodson County",
      "State": "KS",
      "population": 3138
    },
    {
      "countyFIPS": 20209,
      "County Name": "Wyandotte County",
      "State": "KS",
      "population": 165429
    },
    {
      "countyFIPS": 0,
      "County Name": "Statewide Unallocated",
      "State": "KY",
      "population": 0
    },
    {
      "countyFIPS": 21001,
      "County Name": "Adair County",
      "State": "KY",
      "population": 19202
    },
    {
      "countyFIPS": 21003,
      "County Name": "Allen County",
      "State": "KY",
      "population": 21315
    },
    {
      "countyFIPS": 21005,
      "County Name": "Anderson County",
      "State": "KY",
      "population": 22747
    },
    {
      "countyFIPS": 21007,
      "County Name": "Ballard County",
      "State": "KY",
      "population": 7888
    },
    {
      "countyFIPS": 21009,
      "County Name": "Barren County",
      "State": "KY",
      "population": 44249
    },
    {
      "countyFIPS": 21011,
      "County Name": "Bath County",
      "State": "KY",
      "population": 12500
    },
    {
      "countyFIPS": 21013,
      "County Name": "Bell County",
      "State": "KY",
      "population": 26032
    },
    {
      "countyFIPS": 21015,
      "County Name": "Boone County",
      "State": "KY",
      "population": 133581
    },
    {
      "countyFIPS": 21017,
      "County Name": "Bourbon County",
      "State": "KY",
      "population": 19788
    },
    {
      "countyFIPS": 21019,
      "County Name": "Boyd County",
      "State": "KY",
      "population": 46718
    },
    {
      "countyFIPS": 21021,
      "County Name": "Boyle County",
      "State": "KY",
      "population": 30060
    },
    {
      "countyFIPS": 21023,
      "County Name": "Bracken County",
      "State": "KY",
      "population": 8303
    },
    {
      "countyFIPS": 21025,
      "County Name": "Breathitt County",
      "State": "KY",
      "population": 12630
    },
    {
      "countyFIPS": 21027,
      "County Name": "Breckinridge County",
      "State": "KY",
      "population": 20477
    },
    {
      "countyFIPS": 21029,
      "County Name": "Bullitt County",
      "State": "KY",
      "population": 81676
    },
    {
      "countyFIPS": 21031,
      "County Name": "Butler County",
      "State": "KY",
      "population": 12879
    },
    {
      "countyFIPS": 21033,
      "County Name": "Caldwell County",
      "State": "KY",
      "population": 12747
    },
    {
      "countyFIPS": 21035,
      "County Name": "Calloway County",
      "State": "KY",
      "population": 39001
    },
    {
      "countyFIPS": 21037,
      "County Name": "Campbell County",
      "State": "KY",
      "population": 93584
    },
    {
      "countyFIPS": 21039,
      "County Name": "Carlisle County",
      "State": "KY",
      "population": 4760
    },
    {
      "countyFIPS": 21041,
      "County Name": "Carroll County",
      "State": "KY",
      "population": 10631
    },
    {
      "countyFIPS": 21043,
      "County Name": "Carter County",
      "State": "KY",
      "population": 26797
    },
    {
      "countyFIPS": 21045,
      "County Name": "Casey County",
      "State": "KY",
      "population": 16159
    },
    {
      "countyFIPS": 21047,
      "County Name": "Christian County",
      "State": "KY",
      "population": 70461
    },
    {
      "countyFIPS": 21049,
      "County Name": "Clark County",
      "State": "KY",
      "population": 36263
    },
    {
      "countyFIPS": 21051,
      "County Name": "Clay County",
      "State": "KY",
      "population": 19901
    },
    {
      "countyFIPS": 21053,
      "County Name": "Clinton County",
      "State": "KY",
      "population": 10218
    },
    {
      "countyFIPS": 21055,
      "County Name": "Crittenden County",
      "State": "KY",
      "population": 8806
    },
    {
      "countyFIPS": 21057,
      "County Name": "Cumberland County",
      "State": "KY",
      "population": 6614
    },
    {
      "countyFIPS": 21059,
      "County Name": "Daviess County",
      "State": "KY",
      "population": 101511
    },
    {
      "countyFIPS": 21061,
      "County Name": "Edmonson County",
      "State": "KY",
      "population": 12150
    },
    {
      "countyFIPS": 21063,
      "County Name": "Elliott County",
      "State": "KY",
      "population": 7517
    },
    {
      "countyFIPS": 21065,
      "County Name": "Estill County",
      "State": "KY",
      "population": 14106
    },
    {
      "countyFIPS": 21067,
      "County Name": "Fayette County",
      "State": "KY",
      "population": 323152
    },
    {
      "countyFIPS": 21069,
      "County Name": "Fleming County",
      "State": "KY",
      "population": 14581
    },
    {
      "countyFIPS": 21071,
      "County Name": "Floyd County",
      "State": "KY",
      "population": 35589
    },
    {
      "countyFIPS": 21073,
      "County Name": "Franklin County",
      "State": "KY",
      "population": 50991
    },
    {
      "countyFIPS": 21075,
      "County Name": "Fulton County",
      "State": "KY",
      "population": 5969
    },
    {
      "countyFIPS": 21077,
      "County Name": "Gallatin County",
      "State": "KY",
      "population": 8869
    },
    {
      "countyFIPS": 21079,
      "County Name": "Garrard County",
      "State": "KY",
      "population": 17666
    },
    {
      "countyFIPS": 21081,
      "County Name": "Grant County",
      "State": "KY",
      "population": 25069
    },
    {
      "countyFIPS": 21083,
      "County Name": "Graves County",
      "State": "KY",
      "population": 37266
    },
    {
      "countyFIPS": 21085,
      "County Name": "Grayson County",
      "State": "KY",
      "population": 26427
    },
    {
      "countyFIPS": 21087,
      "County Name": "Green County",
      "State": "KY",
      "population": 10941
    },
    {
      "countyFIPS": 21089,
      "County Name": "Greenup County",
      "State": "KY",
      "population": 35098
    },
    {
      "countyFIPS": 21091,
      "County Name": "Hancock County",
      "State": "KY",
      "population": 8722
    },
    {
      "countyFIPS": 21093,
      "County Name": "Hardin County",
      "State": "KY",
      "population": 110958
    },
    {
      "countyFIPS": 21095,
      "County Name": "Harlan County",
      "State": "KY",
      "population": 26010
    },
    {
      "countyFIPS": 21097,
      "County Name": "Harrison County",
      "State": "KY",
      "population": 18886
    },
    {
      "countyFIPS": 21099,
      "County Name": "Hart County",
      "State": "KY",
      "population": 19035
    },
    {
      "countyFIPS": 21101,
      "County Name": "Henderson County",
      "State": "KY",
      "population": 45210
    },
    {
      "countyFIPS": 21103,
      "County Name": "Henry County",
      "State": "KY",
      "population": 16126
    },
    {
      "countyFIPS": 21105,
      "County Name": "Hickman County",
      "State": "KY",
      "population": 4380
    },
    {
      "countyFIPS": 21107,
      "County Name": "Hopkins County",
      "State": "KY",
      "population": 44686
    },
    {
      "countyFIPS": 21109,
      "County Name": "Jackson County",
      "State": "KY",
      "population": 13329
    },
    {
      "countyFIPS": 21111,
      "County Name": "Jefferson County",
      "State": "KY",
      "population": 766757
    },
    {
      "countyFIPS": 21113,
      "County Name": "Jessamine County",
      "State": "KY",
      "population": 54115
    },
    {
      "countyFIPS": 21115,
      "County Name": "Johnson County",
      "State": "KY",
      "population": 22188
    },
    {
      "countyFIPS": 21117,
      "County Name": "Kenton County",
      "State": "KY",
      "population": 166998
    },
    {
      "countyFIPS": 21119,
      "County Name": "Knott County",
      "State": "KY",
      "population": 14806
    },
    {
      "countyFIPS": 21121,
      "County Name": "Knox County",
      "State": "KY",
      "population": 31145
    },
    {
      "countyFIPS": 21123,
      "County Name": "Larue County",
      "State": "KY",
      "population": 14398
    },
    {
      "countyFIPS": 21125,
      "County Name": "Laurel County",
      "State": "KY",
      "population": 60813
    },
    {
      "countyFIPS": 21127,
      "County Name": "Lawrence County",
      "State": "KY",
      "population": 15317
    },
    {
      "countyFIPS": 21129,
      "County Name": "Lee County",
      "State": "KY",
      "population": 7403
    },
    {
      "countyFIPS": 21131,
      "County Name": "Leslie County",
      "State": "KY",
      "population": 9877
    },
    {
      "countyFIPS": 21133,
      "County Name": "Letcher County",
      "State": "KY",
      "population": 21553
    },
    {
      "countyFIPS": 21135,
      "County Name": "Lewis County",
      "State": "KY",
      "population": 13275
    },
    {
      "countyFIPS": 21137,
      "County Name": "Lincoln County",
      "State": "KY",
      "population": 24549
    },
    {
      "countyFIPS": 21139,
      "County Name": "Livingston County",
      "State": "KY",
      "population": 9194
    },
    {
      "countyFIPS": 21141,
      "County Name": "Logan County",
      "State": "KY",
      "population": 27102
    },
    {
      "countyFIPS": 21143,
      "County Name": "Lyon County",
      "State": "KY",
      "population": 8210
    },
    {
      "countyFIPS": 21145,
      "County Name": "McCracken County",
      "State": "KY",
      "population": 65418
    },
    {
      "countyFIPS": 21147,
      "County Name": "McCreary County",
      "State": "KY",
      "population": 17231
    },
    {
      "countyFIPS": 21149,
      "County Name": "McLean County",
      "State": "KY",
      "population": 9207
    },
    {
      "countyFIPS": 21151,
      "County Name": "Madison County",
      "State": "KY",
      "population": 92987
    },
    {
      "countyFIPS": 21153,
      "County Name": "Magoffin County",
      "State": "KY",
      "population": 12161
    },
    {
      "countyFIPS": 21155,
      "County Name": "Marion County",
      "State": "KY",
      "population": 19273
    },
    {
      "countyFIPS": 21157,
      "County Name": "Marshall County",
      "State": "KY",
      "population": 31100
    },
    {
      "countyFIPS": 21159,
      "County Name": "Martin County",
      "State": "KY",
      "population": 11195
    },
    {
      "countyFIPS": 21161,
      "County Name": "Mason County",
      "State": "KY",
      "population": 17070
    },
    {
      "countyFIPS": 21163,
      "County Name": "Meade County",
      "State": "KY",
      "population": 28572
    },
    {
      "countyFIPS": 21165,
      "County Name": "Menifee County",
      "State": "KY",
      "population": 6489
    },
    {
      "countyFIPS": 21167,
      "County Name": "Mercer County",
      "State": "KY",
      "population": 21933
    },
    {
      "countyFIPS": 21169,
      "County Name": "Metcalfe County",
      "State": "KY",
      "population": 10071
    },
    {
      "countyFIPS": 21171,
      "County Name": "Monroe County",
      "State": "KY",
      "population": 10650
    },
    {
      "countyFIPS": 21173,
      "County Name": "Montgomery County",
      "State": "KY",
      "population": 28157
    },
    {
      "countyFIPS": 21175,
      "County Name": "Morgan County",
      "State": "KY",
      "population": 13309
    },
    {
      "countyFIPS": 21177,
      "County Name": "Muhlenberg County",
      "State": "KY",
      "population": 30622
    },
    {
      "countyFIPS": 21179,
      "County Name": "Nelson County",
      "State": "KY",
      "population": 46233
    },
    {
      "countyFIPS": 21181,
      "County Name": "Nicholas County",
      "State": "KY",
      "population": 7269
    },
    {
      "countyFIPS": 21183,
      "County Name": "Ohio County",
      "State": "KY",
      "population": 23994
    },
    {
      "countyFIPS": 21185,
      "County Name": "Oldham County",
      "State": "KY",
      "population": 66799
    },
    {
      "countyFIPS": 21187,
      "County Name": "Owen County",
      "State": "KY",
      "population": 10901
    },
    {
      "countyFIPS": 21189,
      "County Name": "Owsley County",
      "State": "KY",
      "population": 4415
    },
    {
      "countyFIPS": 21191,
      "County Name": "Pendleton County",
      "State": "KY",
      "population": 14590
    },
    {
      "countyFIPS": 21193,
      "County Name": "Perry County",
      "State": "KY",
      "population": 25758
    },
    {
      "countyFIPS": 21195,
      "County Name": "Pike County",
      "State": "KY",
      "population": 57876
    },
    {
      "countyFIPS": 21197,
      "County Name": "Powell County",
      "State": "KY",
      "population": 12359
    },
    {
      "countyFIPS": 21199,
      "County Name": "Pulaski County",
      "State": "KY",
      "population": 64979
    },
    {
      "countyFIPS": 21201,
      "County Name": "Robertson County",
      "State": "KY",
      "population": 2108
    },
    {
      "countyFIPS": 21203,
      "County Name": "Rockcastle County",
      "State": "KY",
      "population": 16695
    },
    {
      "countyFIPS": 21205,
      "County Name": "Rowan County",
      "State": "KY",
      "population": 24460
    },
    {
      "countyFIPS": 21207,
      "County Name": "Russell County",
      "State": "KY",
      "population": 17923
    },
    {
      "countyFIPS": 21209,
      "County Name": "Scott County",
      "State": "KY",
      "population": 57004
    },
    {
      "countyFIPS": 21211,
      "County Name": "Shelby County",
      "State": "KY",
      "population": 49024
    },
    {
      "countyFIPS": 21213,
      "County Name": "Simpson County",
      "State": "KY",
      "population": 18572
    },
    {
      "countyFIPS": 21215,
      "County Name": "Spencer County",
      "State": "KY",
      "population": 19351
    },
    {
      "countyFIPS": 21217,
      "County Name": "Taylor County",
      "State": "KY",
      "population": 25769
    },
    {
      "countyFIPS": 21219,
      "County Name": "Todd County",
      "State": "KY",
      "population": 12294
    },
    {
      "countyFIPS": 21221,
      "County Name": "Trigg County",
      "State": "KY",
      "population": 14651
    },
    {
      "countyFIPS": 21223,
      "County Name": "Trimble County",
      "State": "KY",
      "population": 8471
    },
    {
      "countyFIPS": 21225,
      "County Name": "Union County",
      "State": "KY",
      "population": 14381
    },
    {
      "countyFIPS": 21227,
      "County Name": "Warren County",
      "State": "KY",
      "population": 132896
    },
    {
      "countyFIPS": 21229,
      "County Name": "Washington County",
      "State": "KY",
      "population": 12095
    },
    {
      "countyFIPS": 21231,
      "County Name": "Wayne County",
      "State": "KY",
      "population": 20333
    },
    {
      "countyFIPS": 21233,
      "County Name": "Webster County",
      "State": "KY",
      "population": 12942
    },
    {
      "countyFIPS": 21235,
      "County Name": "Whitley County",
      "State": "KY",
      "population": 36264
    },
    {
      "countyFIPS": 21237,
      "County Name": "Wolfe County",
      "State": "KY",
      "population": 7157
    },
    {
      "countyFIPS": 21239,
      "County Name": "Woodford County",
      "State": "KY",
      "population": 26734
    },
    {
      "countyFIPS": 0,
      "County Name": "Statewide Unallocated",
      "State": "LA",
      "population": 0
    },
    {
      "countyFIPS": 22001,
      "County Name": "Acadia Parish",
      "State": "LA",
      "population": 62045
    },
    {
      "countyFIPS": 22003,
      "County Name": "Allen Parish",
      "State": "LA",
      "population": 25627
    },
    {
      "countyFIPS": 22005,
      "County Name": "Ascension Parish",
      "State": "LA",
      "population": 126604
    },
    {
      "countyFIPS": 22007,
      "County Name": "Assumption Parish",
      "State": "LA",
      "population": 21891
    },
    {
      "countyFIPS": 22009,
      "County Name": "Avoyelles Parish",
      "State": "LA",
      "population": 40144
    },
    {
      "countyFIPS": 22011,
      "County Name": "Beauregard Parish",
      "State": "LA",
      "population": 37497
    },
    {
      "countyFIPS": 22013,
      "County Name": "Bienville Parish",
      "State": "LA",
      "population": 13241
    },
    {
      "countyFIPS": 22015,
      "County Name": "Bossier Parish",
      "State": "LA",
      "population": 127039
    },
    {
      "countyFIPS": 22017,
      "County Name": "Caddo Parish",
      "State": "LA",
      "population": 240204
    },
    {
      "countyFIPS": 22019,
      "County Name": "Calcasieu Parish",
      "State": "LA",
      "population": 203436
    },
    {
      "countyFIPS": 22021,
      "County Name": "Caldwell Parish",
      "State": "LA",
      "population": 9918
    },
    {
      "countyFIPS": 22023,
      "County Name": "Cameron Parish",
      "State": "LA",
      "population": 6973
    },
    {
      "countyFIPS": 22025,
      "County Name": "Catahoula Parish",
      "State": "LA",
      "population": 9494
    },
    {
      "countyFIPS": 22027,
      "County Name": "Claiborne Parish",
      "State": "LA",
      "population": 15670
    },
    {
      "countyFIPS": 22029,
      "County Name": "Concordia Parish",
      "State": "LA",
      "population": 19259
    },
    {
      "countyFIPS": 22031,
      "County Name": "De Soto Parish",
      "State": "LA",
      "population": 27463
    },
    {
      "countyFIPS": 22033,
      "County Name": "East Baton Rouge Parish",
      "State": "LA",
      "population": 440059
    },
    {
      "countyFIPS": 22035,
      "County Name": "East Carroll Parish",
      "State": "LA",
      "population": 6861
    },
    {
      "countyFIPS": 22037,
      "County Name": "East Feliciana Parish",
      "State": "LA",
      "population": 19135
    },
    {
      "countyFIPS": 22039,
      "County Name": "Evangeline Parish",
      "State": "LA",
      "population": 33395
    },
    {
      "countyFIPS": 22041,
      "County Name": "Franklin Parish",
      "State": "LA",
      "population": 20015
    },
    {
      "countyFIPS": 22043,
      "County Name": "Grant Parish",
      "State": "LA",
      "population": 22389
    },
    {
      "countyFIPS": 22045,
      "County Name": "Iberia Parish",
      "State": "LA",
      "population": 69830
    },
    {
      "countyFIPS": 22047,
      "County Name": "Iberville Parish",
      "State": "LA",
      "population": 32511
    },
    {
      "countyFIPS": 22049,
      "County Name": "Jackson Parish",
      "State": "LA",
      "population": 15744
    },
    {
      "countyFIPS": 22051,
      "County Name": "Jefferson Parish",
      "State": "LA",
      "population": 432493
    },
    {
      "countyFIPS": 22053,
      "County Name": "Jefferson Davis Parish",
      "State": "LA",
      "population": 31368
    },
    {
      "countyFIPS": 22055,
      "County Name": "Lafayette Parish",
      "State": "LA",
      "population": 244390
    },
    {
      "countyFIPS": 22057,
      "County Name": "Lafourche Parish",
      "State": "LA",
      "population": 97614
    },
    {
      "countyFIPS": 22059,
      "County Name": "La Salle Parish",
      "State": "LA",
      "population": 14892
    },
    {
      "countyFIPS": 22061,
      "County Name": "Lincoln Parish",
      "State": "LA",
      "population": 46742
    },
    {
      "countyFIPS": 22063,
      "County Name": "Livingston Parish",
      "State": "LA",
      "population": 140789
    },
    {
      "countyFIPS": 22065,
      "County Name": "Madison Parish",
      "State": "LA",
      "population": 10951
    },
    {
      "countyFIPS": 22067,
      "County Name": "Morehouse Parish",
      "State": "LA",
      "population": 24874
    },
    {
      "countyFIPS": 22069,
      "County Name": "Natchitoches Parish",
      "State": "LA",
      "population": 38158
    },
    {
      "countyFIPS": 22071,
      "County Name": "Orleans Parish",
      "State": "LA",
      "population": 390144
    },
    {
      "countyFIPS": 22073,
      "County Name": "Ouachita Parish",
      "State": "LA",
      "population": 153279
    },
    {
      "countyFIPS": 22075,
      "County Name": "Plaquemines Parish",
      "State": "LA",
      "population": 23197
    },
    {
      "countyFIPS": 22077,
      "County Name": "Pointe Coupee Parish",
      "State": "LA",
      "population": 21730
    },
    {
      "countyFIPS": 22079,
      "County Name": "Rapides Parish",
      "State": "LA",
      "population": 129648
    },
    {
      "countyFIPS": 22081,
      "County Name": "Red River Parish",
      "State": "LA",
      "population": 8442
    },
    {
      "countyFIPS": 22083,
      "County Name": "Richland Parish",
      "State": "LA",
      "population": 20122
    },
    {
      "countyFIPS": 22085,
      "County Name": "Sabine Parish",
      "State": "LA",
      "population": 23884
    },
    {
      "countyFIPS": 22087,
      "County Name": "St. Bernard Parish",
      "State": "LA",
      "population": 47244
    },
    {
      "countyFIPS": 22089,
      "County Name": "St. Charles Parish",
      "State": "LA",
      "population": 53100
    },
    {
      "countyFIPS": 22091,
      "County Name": "St. Helena Parish",
      "State": "LA",
      "population": 10132
    },
    {
      "countyFIPS": 22093,
      "County Name": "St. James Parish",
      "State": "LA",
      "population": 21096
    },
    {
      "countyFIPS": 22095,
      "County Name": "St. John the Baptist Parish",
      "State": "LA",
      "population": 42837
    },
    {
      "countyFIPS": 22097,
      "County Name": "St. Landry Parish",
      "State": "LA",
      "population": 82124
    },
    {
      "countyFIPS": 22099,
      "County Name": "St. Martin Parish",
      "State": "LA",
      "population": 53431
    },
    {
      "countyFIPS": 22101,
      "County Name": "St. Mary Parish",
      "State": "LA",
      "population": 49348
    },
    {
      "countyFIPS": 22103,
      "County Name": "St. Tammany Parish",
      "State": "LA",
      "population": 260419
    },
    {
      "countyFIPS": 22105,
      "County Name": "Tangipahoa Parish",
      "State": "LA",
      "population": 134758
    },
    {
      "countyFIPS": 22107,
      "County Name": "Tensas Parish",
      "State": "LA",
      "population": 4334
    },
    {
      "countyFIPS": 22109,
      "County Name": "Terrebonne Parish",
      "State": "LA",
      "population": 110461
    },
    {
      "countyFIPS": 22111,
      "County Name": "Union Parish",
      "State": "LA",
      "population": 22108
    },
    {
      "countyFIPS": 22113,
      "County Name": "Vermilion Parish",
      "State": "LA",
      "population": 59511
    },
    {
      "countyFIPS": 22115,
      "County Name": "Vernon Parish",
      "State": "LA",
      "population": 47429
    },
    {
      "countyFIPS": 22117,
      "County Name": "Washington Parish",
      "State": "LA",
      "population": 46194
    },
    {
      "countyFIPS": 22119,
      "County Name": "Webster Parish",
      "State": "LA",
      "population": 38340
    },
    {
      "countyFIPS": 22121,
      "County Name": "West Baton Rouge Parish",
      "State": "LA",
      "population": 26465
    },
    {
      "countyFIPS": 22123,
      "County Name": "West Carroll Parish",
      "State": "LA",
      "population": 10830
    },
    {
      "countyFIPS": 22125,
      "County Name": "West Feliciana Parish",
      "State": "LA",
      "population": 15568
    },
    {
      "countyFIPS": 22127,
      "County Name": "Winn Parish",
      "State": "LA",
      "population": 13904
    },
    {
      "countyFIPS": 0,
      "County Name": "Statewide Unallocated",
      "State": "ME",
      "population": 0
    },
    {
      "countyFIPS": 23001,
      "County Name": "Androscoggin County",
      "State": "ME",
      "population": 108277
    },
    {
      "countyFIPS": 23003,
      "County Name": "Aroostook County",
      "State": "ME",
      "population": 67055
    },
    {
      "countyFIPS": 23005,
      "County Name": "Cumberland County",
      "State": "ME",
      "population": 295003
    },
    {
      "countyFIPS": 23007,
      "County Name": "Franklin County",
      "State": "ME",
      "population": 30199
    },
    {
      "countyFIPS": 23009,
      "County Name": "Hancock County",
      "State": "ME",
      "population": 54987
    },
    {
      "countyFIPS": 23011,
      "County Name": "Kennebec County",
      "State": "ME",
      "population": 122302
    },
    {
      "countyFIPS": 23013,
      "County Name": "Knox County",
      "State": "ME",
      "population": 39772
    },
    {
      "countyFIPS": 23015,
      "County Name": "Lincoln County",
      "State": "ME",
      "population": 34634
    },
    {
      "countyFIPS": 23017,
      "County Name": "Oxford County",
      "State": "ME",
      "population": 57975
    },
    {
      "countyFIPS": 23019,
      "County Name": "Penobscot County",
      "State": "ME",
      "population": 152148
    },
    {
      "countyFIPS": 23021,
      "County Name": "Piscataquis County",
      "State": "ME",
      "population": 16785
    },
    {
      "countyFIPS": 23023,
      "County Name": "Sagadahoc County",
      "State": "ME",
      "population": 35856
    },
    {
      "countyFIPS": 23025,
      "County Name": "Somerset County",
      "State": "ME",
      "population": 50484
    },
    {
      "countyFIPS": 23027,
      "County Name": "Waldo County",
      "State": "ME",
      "population": 39715
    },
    {
      "countyFIPS": 23029,
      "County Name": "Washington County",
      "State": "ME",
      "population": 31379
    },
    {
      "countyFIPS": 23031,
      "County Name": "York County",
      "State": "ME",
      "population": 207641
    },
    {
      "countyFIPS": 0,
      "County Name": "Statewide Unallocated",
      "State": "MD",
      "population": 0
    },
    {
      "countyFIPS": 24001,
      "County Name": "Allegany County",
      "State": "MD",
      "population": 70416
    },
    {
      "countyFIPS": 24003,
      "County Name": "Anne Arundel County",
      "State": "MD",
      "population": 579234
    },
    {
      "countyFIPS": 24005,
      "County Name": "Baltimore County",
      "State": "MD",
      "population": 827370
    },
    {
      "countyFIPS": 24009,
      "County Name": "Calvert County",
      "State": "MD",
      "population": 92525
    },
    {
      "countyFIPS": 24011,
      "County Name": "Caroline County",
      "State": "MD",
      "population": 33406
    },
    {
      "countyFIPS": 24013,
      "County Name": "Carroll County",
      "State": "MD",
      "population": 168447
    },
    {
      "countyFIPS": 24015,
      "County Name": "Cecil County",
      "State": "MD",
      "population": 102855
    },
    {
      "countyFIPS": 24017,
      "County Name": "Charles County",
      "State": "MD",
      "population": 163257
    },
    {
      "countyFIPS": 24019,
      "County Name": "Dorchester County",
      "State": "MD",
      "population": 31929
    },
    {
      "countyFIPS": 24021,
      "County Name": "Frederick County",
      "State": "MD",
      "population": 259547
    },
    {
      "countyFIPS": 24023,
      "County Name": "Garrett County",
      "State": "MD",
      "population": 29014
    },
    {
      "countyFIPS": 24025,
      "County Name": "Harford County",
      "State": "MD",
      "population": 255441
    },
    {
      "countyFIPS": 24027,
      "County Name": "Howard County",
      "State": "MD",
      "population": 325690
    },
    {
      "countyFIPS": 24029,
      "County Name": "Kent County",
      "State": "MD",
      "population": 19422
    },
    {
      "countyFIPS": 24031,
      "County Name": "Montgomery County",
      "State": "MD",
      "population": 1050688
    },
    {
      "countyFIPS": 24033,
      "County Name": "Prince George's County",
      "State": "MD",
      "population": 909327
    },
    {
      "countyFIPS": 24035,
      "County Name": "Queen Anne's County",
      "State": "MD",
      "population": 50381
    },
    {
      "countyFIPS": 24037,
      "County Name": "St. Mary's County",
      "State": "MD",
      "population": 113510
    },
    {
      "countyFIPS": 24039,
      "County Name": "Somerset County",
      "State": "MD",
      "population": 25616
    },
    {
      "countyFIPS": 24041,
      "County Name": "Talbot County",
      "State": "MD",
      "population": 37181
    },
    {
      "countyFIPS": 24043,
      "County Name": "Washington County",
      "State": "MD",
      "population": 151049
    },
    {
      "countyFIPS": 24045,
      "County Name": "Wicomico County",
      "State": "MD",
      "population": 103609
    },
    {
      "countyFIPS": 24047,
      "County Name": "Worcester County",
      "State": "MD",
      "population": 52276
    },
    {
      "countyFIPS": 24510,
      "County Name": "Baltimore City",
      "State": "MD",
      "population": 593490
    },
    {
      "countyFIPS": 0,
      "County Name": "Statewide Unallocated",
      "State": "MA",
      "population": 0
    },
    {
      "countyFIPS": 25001,
      "County Name": "Barnstable County",
      "State": "MA",
      "population": 212990
    },
    {
      "countyFIPS": 25003,
      "County Name": "Berkshire County",
      "State": "MA",
      "population": 124944
    },
    {
      "countyFIPS": 25005,
      "County Name": "Bristol County",
      "State": "MA",
      "population": 565217
    },
    {
      "countyFIPS": 25007,
      "County Name": "Dukes County",
      "State": "MA",
      "population": 17332
    },
    {
      "countyFIPS": 25009,
      "County Name": "Essex County",
      "State": "MA",
      "population": 789034
    },
    {
      "countyFIPS": 25011,
      "County Name": "Franklin County",
      "State": "MA",
      "population": 70180
    },
    {
      "countyFIPS": 25013,
      "County Name": "Hampden County",
      "State": "MA",
      "population": 466372
    },
    {
      "countyFIPS": 25015,
      "County Name": "Hampshire County",
      "State": "MA",
      "population": 160830
    },
    {
      "countyFIPS": 25017,
      "County Name": "Middlesex County",
      "State": "MA",
      "population": 1611699
    },
    {
      "countyFIPS": 25019,
      "County Name": "Nantucket County",
      "State": "MA",
      "population": 11399
    },
    {
      "countyFIPS": 25021,
      "County Name": "Norfolk County",
      "State": "MA",
      "population": 706775
    },
    {
      "countyFIPS": 25023,
      "County Name": "Plymouth County",
      "State": "MA",
      "population": 521202
    },
    {
      "countyFIPS": 25025,
      "County Name": "Suffolk County",
      "State": "MA",
      "population": 803907
    },
    {
      "countyFIPS": 25027,
      "County Name": "Worcester County",
      "State": "MA",
      "population": 830622
    },
    {
      "countyFIPS": 0,
      "County Name": "Statewide Unallocated",
      "State": "MI",
      "population": 0
    },
    {
      "countyFIPS": 26001,
      "County Name": "Alcona County",
      "State": "MI",
      "population": 10405
    },
    {
      "countyFIPS": 26003,
      "County Name": "Alger County",
      "State": "MI",
      "population": 9108
    },
    {
      "countyFIPS": 26005,
      "County Name": "Allegan County",
      "State": "MI",
      "population": 118081
    },
    {
      "countyFIPS": 26007,
      "County Name": "Alpena County",
      "State": "MI",
      "population": 28405
    },
    {
      "countyFIPS": 26009,
      "County Name": "Antrim County",
      "State": "MI",
      "population": 23324
    },
    {
      "countyFIPS": 26011,
      "County Name": "Arenac County",
      "State": "MI",
      "population": 14883
    },
    {
      "countyFIPS": 26013,
      "County Name": "Baraga County",
      "State": "MI",
      "population": 8209
    },
    {
      "countyFIPS": 26015,
      "County Name": "Barry County",
      "State": "MI",
      "population": 61550
    },
    {
      "countyFIPS": 26017,
      "County Name": "Bay County",
      "State": "MI",
      "population": 103126
    },
    {
      "countyFIPS": 26019,
      "County Name": "Benzie County",
      "State": "MI",
      "population": 17766
    },
    {
      "countyFIPS": 26021,
      "County Name": "Berrien County",
      "State": "MI",
      "population": 153401
    },
    {
      "countyFIPS": 26023,
      "County Name": "Branch County",
      "State": "MI",
      "population": 43517
    },
    {
      "countyFIPS": 26025,
      "County Name": "Calhoun County",
      "State": "MI",
      "population": 134159
    },
    {
      "countyFIPS": 26027,
      "County Name": "Cass County",
      "State": "MI",
      "population": 51787
    },
    {
      "countyFIPS": 26029,
      "County Name": "Charlevoix County",
      "State": "MI",
      "population": 26143
    },
    {
      "countyFIPS": 26031,
      "County Name": "Cheboygan County",
      "State": "MI",
      "population": 25276
    },
    {
      "countyFIPS": 26033,
      "County Name": "Chippewa County",
      "State": "MI",
      "population": 37349
    },
    {
      "countyFIPS": 26035,
      "County Name": "Clare County",
      "State": "MI",
      "population": 30950
    },
    {
      "countyFIPS": 26037,
      "County Name": "Clinton County",
      "State": "MI",
      "population": 79595
    },
    {
      "countyFIPS": 26039,
      "County Name": "Crawford County",
      "State": "MI",
      "population": 14029
    },
    {
      "countyFIPS": 26041,
      "County Name": "Delta County",
      "State": "MI",
      "population": 35784
    },
    {
      "countyFIPS": 26043,
      "County Name": "Dickinson County",
      "State": "MI",
      "population": 25239
    },
    {
      "countyFIPS": 26045,
      "County Name": "Eaton County",
      "State": "MI",
      "population": 110268
    },
    {
      "countyFIPS": 26047,
      "County Name": "Emmet County",
      "State": "MI",
      "population": 33415
    },
    {
      "countyFIPS": 26049,
      "County Name": "Genesee County",
      "State": "MI",
      "population": 405813
    },
    {
      "countyFIPS": 26051,
      "County Name": "Gladwin County",
      "State": "MI",
      "population": 25449
    },
    {
      "countyFIPS": 26053,
      "County Name": "Gogebic County",
      "State": "MI",
      "population": 13975
    },
    {
      "countyFIPS": 26055,
      "County Name": "Grand Traverse County",
      "State": "MI",
      "population": 93088
    },
    {
      "countyFIPS": 26057,
      "County Name": "Gratiot County",
      "State": "MI",
      "population": 40711
    },
    {
      "countyFIPS": 26059,
      "County Name": "Hillsdale County",
      "State": "MI",
      "population": 45605
    },
    {
      "countyFIPS": 26061,
      "County Name": "Houghton County",
      "State": "MI",
      "population": 35684
    },
    {
      "countyFIPS": 26063,
      "County Name": "Huron County",
      "State": "MI",
      "population": 30981
    },
    {
      "countyFIPS": 26065,
      "County Name": "Ingham County",
      "State": "MI",
      "population": 292406
    },
    {
      "countyFIPS": 26067,
      "County Name": "Ionia County",
      "State": "MI",
      "population": 64697
    },
    {
      "countyFIPS": 26069,
      "County Name": "Iosco County",
      "State": "MI",
      "population": 25127
    },
    {
      "countyFIPS": 26071,
      "County Name": "Iron County",
      "State": "MI",
      "population": 11066
    },
    {
      "countyFIPS": 26073,
      "County Name": "Isabella County",
      "State": "MI",
      "population": 69872
    },
    {
      "countyFIPS": 26075,
      "County Name": "Jackson County",
      "State": "MI",
      "population": 158510
    },
    {
      "countyFIPS": 26077,
      "County Name": "Kalamazoo County",
      "State": "MI",
      "population": 265066
    },
    {
      "countyFIPS": 26079,
      "County Name": "Kalkaska County",
      "State": "MI",
      "population": 18038
    },
    {
      "countyFIPS": 26081,
      "County Name": "Kent County",
      "State": "MI",
      "population": 656955
    },
    {
      "countyFIPS": 26083,
      "County Name": "Keweenaw County",
      "State": "MI",
      "population": 2116
    },
    {
      "countyFIPS": 26085,
      "County Name": "Lake County",
      "State": "MI",
      "population": 11853
    },
    {
      "countyFIPS": 26087,
      "County Name": "Lapeer County",
      "State": "MI",
      "population": 87607
    },
    {
      "countyFIPS": 26089,
      "County Name": "Leelanau County",
      "State": "MI",
      "population": 21761
    },
    {
      "countyFIPS": 26091,
      "County Name": "Lenawee County",
      "State": "MI",
      "population": 98451
    },
    {
      "countyFIPS": 26093,
      "County Name": "Livingston County",
      "State": "MI",
      "population": 191995
    },
    {
      "countyFIPS": 26095,
      "County Name": "Luce County",
      "State": "MI",
      "population": 6229
    },
    {
      "countyFIPS": 26097,
      "County Name": "Mackinac County",
      "State": "MI",
      "population": 10799
    },
    {
      "countyFIPS": 26099,
      "County Name": "Macomb County",
      "State": "MI",
      "population": 873972
    },
    {
      "countyFIPS": 26101,
      "County Name": "Manistee County",
      "State": "MI",
      "population": 24558
    },
    {
      "countyFIPS": 26103,
      "County Name": "Marquette County",
      "State": "MI",
      "population": 66699
    },
    {
      "countyFIPS": 26105,
      "County Name": "Mason County",
      "State": "MI",
      "population": 29144
    },
    {
      "countyFIPS": 26107,
      "County Name": "Mecosta County",
      "State": "MI",
      "population": 43453
    },
    {
      "countyFIPS": 26109,
      "County Name": "Menominee County",
      "State": "MI",
      "population": 22780
    },
    {
      "countyFIPS": 26111,
      "County Name": "Midland County",
      "State": "MI",
      "population": 83156
    },
    {
      "countyFIPS": 26113,
      "County Name": "Missaukee County",
      "State": "MI",
      "population": 15118
    },
    {
      "countyFIPS": 26115,
      "County Name": "Monroe County",
      "State": "MI",
      "population": 150500
    },
    {
      "countyFIPS": 26117,
      "County Name": "Montcalm County",
      "State": "MI",
      "population": 63888
    },
    {
      "countyFIPS": 26119,
      "County Name": "Montmorency County",
      "State": "MI",
      "population": 9328
    },
    {
      "countyFIPS": 26121,
      "County Name": "Muskegon County",
      "State": "MI",
      "population": 173566
    },
    {
      "countyFIPS": 26123,
      "County Name": "Newaygo County",
      "State": "MI",
      "population": 48980
    },
    {
      "countyFIPS": 26125,
      "County Name": "Oakland County",
      "State": "MI",
      "population": 1257584
    },
    {
      "countyFIPS": 26127,
      "County Name": "Oceana County",
      "State": "MI",
      "population": 26467
    },
    {
      "countyFIPS": 26129,
      "County Name": "Ogemaw County",
      "State": "MI",
      "population": 20997
    },
    {
      "countyFIPS": 26131,
      "County Name": "Ontonagon County",
      "State": "MI",
      "population": 5720
    },
    {
      "countyFIPS": 26133,
      "County Name": "Osceola County",
      "State": "MI",
      "population": 23460
    },
    {
      "countyFIPS": 26135,
      "County Name": "Oscoda County",
      "State": "MI",
      "population": 8241
    },
    {
      "countyFIPS": 26137,
      "County Name": "Otsego County",
      "State": "MI",
      "population": 24668
    },
    {
      "countyFIPS": 26139,
      "County Name": "Ottawa County",
      "State": "MI",
      "population": 291830
    },
    {
      "countyFIPS": 26141,
      "County Name": "Presque Isle County",
      "State": "MI",
      "population": 12592
    },
    {
      "countyFIPS": 26143,
      "County Name": "Roscommon County",
      "State": "MI",
      "population": 24019
    },
    {
      "countyFIPS": 26145,
      "County Name": "Saginaw County",
      "State": "MI",
      "population": 190539
    },
    {
      "countyFIPS": 26147,
      "County Name": "St. Clair County",
      "State": "MI",
      "population": 159128
    },
    {
      "countyFIPS": 26149,
      "County Name": "St. Joseph County",
      "State": "MI",
      "population": 60964
    },
    {
      "countyFIPS": 26151,
      "County Name": "Sanilac County",
      "State": "MI",
      "population": 41170
    },
    {
      "countyFIPS": 26153,
      "County Name": "Schoolcraft County",
      "State": "MI",
      "population": 8094
    },
    {
      "countyFIPS": 26155,
      "County Name": "Shiawassee County",
      "State": "MI",
      "population": 68122
    },
    {
      "countyFIPS": 26157,
      "County Name": "Tuscola County",
      "State": "MI",
      "population": 52245
    },
    {
      "countyFIPS": 26159,
      "County Name": "Van Buren County",
      "State": "MI",
      "population": 75677
    },
    {
      "countyFIPS": 26161,
      "County Name": "Washtenaw County",
      "State": "MI",
      "population": 367601
    },
    {
      "countyFIPS": 26163,
      "County Name": "Wayne County",
      "State": "MI",
      "population": 1749343
    },
    {
      "countyFIPS": 26165,
      "County Name": "Wexford County",
      "State": "MI",
      "population": 33631
    },
    {
      "countyFIPS": 0,
      "County Name": "Statewide Unallocated",
      "State": "MN",
      "population": 0
    },
    {
      "countyFIPS": 27001,
      "County Name": "Aitkin County",
      "State": "MN",
      "population": 15886
    },
    {
      "countyFIPS": 27003,
      "County Name": "Anoka County",
      "State": "MN",
      "population": 356921
    },
    {
      "countyFIPS": 27005,
      "County Name": "Becker County",
      "State": "MN",
      "population": 34423
    },
    {
      "countyFIPS": 27007,
      "County Name": "Beltrami County",
      "State": "MN",
      "population": 47188
    },
    {
      "countyFIPS": 27009,
      "County Name": "Benton County",
      "State": "MN",
      "population": 40889
    },
    {
      "countyFIPS": 27011,
      "County Name": "Big Stone County",
      "State": "MN",
      "population": 4991
    },
    {
      "countyFIPS": 27013,
      "County Name": "Blue Earth County",
      "State": "MN",
      "population": 67653
    },
    {
      "countyFIPS": 27015,
      "County Name": "Brown County",
      "State": "MN",
      "population": 25008
    },
    {
      "countyFIPS": 27017,
      "County Name": "Carlton County",
      "State": "MN",
      "population": 35871
    },
    {
      "countyFIPS": 27019,
      "County Name": "Carver County",
      "State": "MN",
      "population": 105089
    },
    {
      "countyFIPS": 27021,
      "County Name": "Cass County",
      "State": "MN",
      "population": 29779
    },
    {
      "countyFIPS": 27023,
      "County Name": "Chippewa County",
      "State": "MN",
      "population": 11800
    },
    {
      "countyFIPS": 27025,
      "County Name": "Chisago County",
      "State": "MN",
      "population": 56579
    },
    {
      "countyFIPS": 27027,
      "County Name": "Clay County",
      "State": "MN",
      "population": 64222
    },
    {
      "countyFIPS": 27029,
      "County Name": "Clearwater County",
      "State": "MN",
      "population": 8818
    },
    {
      "countyFIPS": 27031,
      "County Name": "Cook County",
      "State": "MN",
      "population": 5463
    },
    {
      "countyFIPS": 27033,
      "County Name": "Cottonwood County",
      "State": "MN",
      "population": 11196
    },
    {
      "countyFIPS": 27035,
      "County Name": "Crow Wing County",
      "State": "MN",
      "population": 65055
    },
    {
      "countyFIPS": 27037,
      "County Name": "Dakota County",
      "State": "MN",
      "population": 429021
    },
    {
      "countyFIPS": 27039,
      "County Name": "Dodge County",
      "State": "MN",
      "population": 20934
    },
    {
      "countyFIPS": 27041,
      "County Name": "Douglas County",
      "State": "MN",
      "population": 38141
    },
    {
      "countyFIPS": 27043,
      "County Name": "Faribault County",
      "State": "MN",
      "population": 13653
    },
    {
      "countyFIPS": 27045,
      "County Name": "Fillmore County",
      "State": "MN",
      "population": 21067
    },
    {
      "countyFIPS": 27047,
      "County Name": "Freeborn County",
      "State": "MN",
      "population": 30281
    },
    {
      "countyFIPS": 27049,
      "County Name": "Goodhue County",
      "State": "MN",
      "population": 46340
    },
    {
      "countyFIPS": 27051,
      "County Name": "Grant County",
      "State": "MN",
      "population": 5972
    },
    {
      "countyFIPS": 27053,
      "County Name": "Hennepin County",
      "State": "MN",
      "population": 1265843
    },
    {
      "countyFIPS": 27055,
      "County Name": "Houston County",
      "State": "MN",
      "population": 18600
    },
    {
      "countyFIPS": 27057,
      "County Name": "Hubbard County",
      "State": "MN",
      "population": 21491
    },
    {
      "countyFIPS": 27059,
      "County Name": "Isanti County",
      "State": "MN",
      "population": 40596
    },
    {
      "countyFIPS": 27061,
      "County Name": "Itasca County",
      "State": "MN",
      "population": 45130
    },
    {
      "countyFIPS": 27063,
      "County Name": "Jackson County",
      "State": "MN",
      "population": 9846
    },
    {
      "countyFIPS": 27065,
      "County Name": "Kanabec County",
      "State": "MN",
      "population": 16337
    },
    {
      "countyFIPS": 27067,
      "County Name": "Kandiyohi County",
      "State": "MN",
      "population": 43199
    },
    {
      "countyFIPS": 27069,
      "County Name": "Kittson County",
      "State": "MN",
      "population": 4298
    },
    {
      "countyFIPS": 27071,
      "County Name": "Koochiching County",
      "State": "MN",
      "population": 12229
    },
    {
      "countyFIPS": 27073,
      "County Name": "Lac Qui Parle County",
      "State": "MN",
      "population": 6623
    },
    {
      "countyFIPS": 27075,
      "County Name": "Lake County",
      "State": "MN",
      "population": 10641
    },
    {
      "countyFIPS": 27077,
      "County Name": "Lake of the Woods County",
      "State": "MN",
      "population": 3740
    },
    {
      "countyFIPS": 27079,
      "County Name": "Le Sueur County",
      "State": "MN",
      "population": 28887
    },
    {
      "countyFIPS": 27081,
      "County Name": "Lincoln County",
      "State": "MN",
      "population": 5639
    },
    {
      "countyFIPS": 27083,
      "County Name": "Lyon County",
      "State": "MN",
      "population": 25474
    },
    {
      "countyFIPS": 27085,
      "County Name": "McLeod County",
      "State": "MN",
      "population": 35893
    },
    {
      "countyFIPS": 27087,
      "County Name": "Mahnomen County",
      "State": "MN",
      "population": 5527
    },
    {
      "countyFIPS": 27089,
      "County Name": "Marshall County",
      "State": "MN",
      "population": 9336
    },
    {
      "countyFIPS": 27091,
      "County Name": "Martin County",
      "State": "MN",
      "population": 19683
    },
    {
      "countyFIPS": 27093,
      "County Name": "Meeker County",
      "State": "MN",
      "population": 23222
    },
    {
      "countyFIPS": 27095,
      "County Name": "Mille Lacs County",
      "State": "MN",
      "population": 26277
    },
    {
      "countyFIPS": 27097,
      "County Name": "Morrison County",
      "State": "MN",
      "population": 33386
    },
    {
      "countyFIPS": 27099,
      "County Name": "Mower County",
      "State": "MN",
      "population": 40062
    },
    {
      "countyFIPS": 27101,
      "County Name": "Murray County",
      "State": "MN",
      "population": 8194
    },
    {
      "countyFIPS": 27103,
      "County Name": "Nicollet County",
      "State": "MN",
      "population": 34274
    },
    {
      "countyFIPS": 27105,
      "County Name": "Nobles County",
      "State": "MN",
      "population": 21629
    },
    {
      "countyFIPS": 27107,
      "County Name": "Norman County",
      "State": "MN",
      "population": 6375
    },
    {
      "countyFIPS": 27109,
      "County Name": "Olmsted County",
      "State": "MN",
      "population": 158293
    },
    {
      "countyFIPS": 27111,
      "County Name": "Otter Tail County",
      "State": "MN",
      "population": 58746
    },
    {
      "countyFIPS": 27113,
      "County Name": "Pennington County",
      "State": "MN",
      "population": 14119
    },
    {
      "countyFIPS": 27115,
      "County Name": "Pine County",
      "State": "MN",
      "population": 29579
    },
    {
      "countyFIPS": 27117,
      "County Name": "Pipestone County",
      "State": "MN",
      "population": 9126
    },
    {
      "countyFIPS": 27119,
      "County Name": "Polk County",
      "State": "MN",
      "population": 31364
    },
    {
      "countyFIPS": 27121,
      "County Name": "Pope County",
      "State": "MN",
      "population": 11249
    },
    {
      "countyFIPS": 27123,
      "County Name": "Ramsey County",
      "State": "MN",
      "population": 550321
    },
    {
      "countyFIPS": 27125,
      "County Name": "Red Lake County",
      "State": "MN",
      "population": 4055
    },
    {
      "countyFIPS": 27127,
      "County Name": "Redwood County",
      "State": "MN",
      "population": 15170
    },
    {
      "countyFIPS": 27129,
      "County Name": "Renville County",
      "State": "MN",
      "population": 14548
    },
    {
      "countyFIPS": 27131,
      "County Name": "Rice County",
      "State": "MN",
      "population": 66972
    },
    {
      "countyFIPS": 27133,
      "County Name": "Rock County",
      "State": "MN",
      "population": 9315
    },
    {
      "countyFIPS": 27135,
      "County Name": "Roseau County",
      "State": "MN",
      "population": 15165
    },
    {
      "countyFIPS": 27137,
      "County Name": "St. Louis County",
      "State": "MN",
      "population": 199070
    },
    {
      "countyFIPS": 27139,
      "County Name": "Scott County",
      "State": "MN",
      "population": 149013
    },
    {
      "countyFIPS": 27141,
      "County Name": "Sherburne County",
      "State": "MN",
      "population": 97238
    },
    {
      "countyFIPS": 27143,
      "County Name": "Sibley County",
      "State": "MN",
      "population": 14865
    },
    {
      "countyFIPS": 27145,
      "County Name": "Stearns County",
      "State": "MN",
      "population": 161075
    },
    {
      "countyFIPS": 27147,
      "County Name": "Steele County",
      "State": "MN",
      "population": 36649
    },
    {
      "countyFIPS": 27149,
      "County Name": "Stevens County",
      "State": "MN",
      "population": 9805
    },
    {
      "countyFIPS": 27151,
      "County Name": "Swift County",
      "State": "MN",
      "population": 9266
    },
    {
      "countyFIPS": 27153,
      "County Name": "Todd County",
      "State": "MN",
      "population": 24664
    },
    {
      "countyFIPS": 27155,
      "County Name": "Traverse County",
      "State": "MN",
      "population": 3259
    },
    {
      "countyFIPS": 27157,
      "County Name": "Wabasha County",
      "State": "MN",
      "population": 21627
    },
    {
      "countyFIPS": 27159,
      "County Name": "Wadena County",
      "State": "MN",
      "population": 13682
    },
    {
      "countyFIPS": 27161,
      "County Name": "Waseca County",
      "State": "MN",
      "population": 18612
    },
    {
      "countyFIPS": 27163,
      "County Name": "Washington County",
      "State": "MN",
      "population": 262440
    },
    {
      "countyFIPS": 27165,
      "County Name": "Watonwan County",
      "State": "MN",
      "population": 10897
    },
    {
      "countyFIPS": 27167,
      "County Name": "Wilkin County",
      "State": "MN",
      "population": 6207
    },
    {
      "countyFIPS": 27169,
      "County Name": "Winona County",
      "State": "MN",
      "population": 50484
    },
    {
      "countyFIPS": 27171,
      "County Name": "Wright County",
      "State": "MN",
      "population": 138377
    },
    {
      "countyFIPS": 27173,
      "County Name": "Yellow Medicine County",
      "State": "MN",
      "population": 9709
    },
    {
      "countyFIPS": 0,
      "County Name": "Statewide Unallocated",
      "State": "MS",
      "population": 0
    },
    {
      "countyFIPS": 28001,
      "County Name": "Adams County",
      "State": "MS",
      "population": 30693
    },
    {
      "countyFIPS": 28003,
      "County Name": "Alcorn County",
      "State": "MS",
      "population": 36953
    },
    {
      "countyFIPS": 28005,
      "County Name": "Amite County",
      "State": "MS",
      "population": 12297
    },
    {
      "countyFIPS": 28007,
      "County Name": "Attala County",
      "State": "MS",
      "population": 18174
    },
    {
      "countyFIPS": 28009,
      "County Name": "Benton County",
      "State": "MS",
      "population": 8259
    },
    {
      "countyFIPS": 28011,
      "County Name": "Bolivar County",
      "State": "MS",
      "population": 30628
    },
    {
      "countyFIPS": 28013,
      "County Name": "Calhoun County",
      "State": "MS",
      "population": 14361
    },
    {
      "countyFIPS": 28015,
      "County Name": "Carroll County",
      "State": "MS",
      "population": 9947
    },
    {
      "countyFIPS": 28017,
      "County Name": "Chickasaw County",
      "State": "MS",
      "population": 17103
    },
    {
      "countyFIPS": 28019,
      "County Name": "Choctaw County",
      "State": "MS",
      "population": 8210
    },
    {
      "countyFIPS": 28021,
      "County Name": "Claiborne County",
      "State": "MS",
      "population": 8988
    },
    {
      "countyFIPS": 28023,
      "County Name": "Clarke County",
      "State": "MS",
      "population": 15541
    },
    {
      "countyFIPS": 28025,
      "County Name": "Clay County",
      "State": "MS",
      "population": 19316
    },
    {
      "countyFIPS": 28027,
      "County Name": "Coahoma County",
      "State": "MS",
      "population": 22124
    },
    {
      "countyFIPS": 28029,
      "County Name": "Copiah County",
      "State": "MS",
      "population": 28065
    },
    {
      "countyFIPS": 28031,
      "County Name": "Covington County",
      "State": "MS",
      "population": 18636
    },
    {
      "countyFIPS": 28033,
      "County Name": "DeSoto County",
      "State": "MS",
      "population": 184945
    },
    {
      "countyFIPS": 28035,
      "County Name": "Forrest County",
      "State": "MS",
      "population": 74897
    },
    {
      "countyFIPS": 28037,
      "County Name": "Franklin County",
      "State": "MS",
      "population": 7713
    },
    {
      "countyFIPS": 28039,
      "County Name": "George County",
      "State": "MS",
      "population": 24500
    },
    {
      "countyFIPS": 28041,
      "County Name": "Greene County",
      "State": "MS",
      "population": 13586
    },
    {
      "countyFIPS": 28043,
      "County Name": "Grenada County",
      "State": "MS",
      "population": 20758
    },
    {
      "countyFIPS": 28045,
      "County Name": "Hancock County",
      "State": "MS",
      "population": 47632
    },
    {
      "countyFIPS": 28047,
      "County Name": "Harrison County",
      "State": "MS",
      "population": 208080
    },
    {
      "countyFIPS": 28049,
      "County Name": "Hinds County",
      "State": "MS",
      "population": 231840
    },
    {
      "countyFIPS": 28051,
      "County Name": "Holmes County",
      "State": "MS",
      "population": 17010
    },
    {
      "countyFIPS": 28053,
      "County Name": "Humphreys County",
      "State": "MS",
      "population": 8064
    },
    {
      "countyFIPS": 28055,
      "County Name": "Issaquena County",
      "State": "MS",
      "population": 1327
    },
    {
      "countyFIPS": 28057,
      "County Name": "Itawamba County",
      "State": "MS",
      "population": 23390
    },
    {
      "countyFIPS": 28059,
      "County Name": "Jackson County",
      "State": "MS",
      "population": 143617
    },
    {
      "countyFIPS": 28061,
      "County Name": "Jasper County",
      "State": "MS",
      "population": 16383
    },
    {
      "countyFIPS": 28063,
      "County Name": "Jefferson County",
      "State": "MS",
      "population": 6990
    },
    {
      "countyFIPS": 28065,
      "County Name": "Jefferson Davis County",
      "State": "MS",
      "population": 11128
    },
    {
      "countyFIPS": 28067,
      "County Name": "Jones County",
      "State": "MS",
      "population": 68098
    },
    {
      "countyFIPS": 28069,
      "County Name": "Kemper County",
      "State": "MS",
      "population": 9742
    },
    {
      "countyFIPS": 28071,
      "County Name": "Lafayette County",
      "State": "MS",
      "population": 54019
    },
    {
      "countyFIPS": 28073,
      "County Name": "Lamar County",
      "State": "MS",
      "population": 63343
    },
    {
      "countyFIPS": 28075,
      "County Name": "Lauderdale County",
      "State": "MS",
      "population": 74125
    },
    {
      "countyFIPS": 28077,
      "County Name": "Lawrence County",
      "State": "MS",
      "population": 12586
    },
    {
      "countyFIPS": 28079,
      "County Name": "Leake County",
      "State": "MS",
      "population": 22786
    },
    {
      "countyFIPS": 28081,
      "County Name": "Lee County",
      "State": "MS",
      "population": 85436
    },
    {
      "countyFIPS": 28083,
      "County Name": "Leflore County",
      "State": "MS",
      "population": 28183
    },
    {
      "countyFIPS": 28085,
      "County Name": "Lincoln County",
      "State": "MS",
      "population": 34153
    },
    {
      "countyFIPS": 28087,
      "County Name": "Lowndes County",
      "State": "MS",
      "population": 58595
    },
    {
      "countyFIPS": 28089,
      "County Name": "Madison County",
      "State": "MS",
      "population": 106272
    },
    {
      "countyFIPS": 28091,
      "County Name": "Marion County",
      "State": "MS",
      "population": 24573
    },
    {
      "countyFIPS": 28093,
      "County Name": "Marshall County",
      "State": "MS",
      "population": 35294
    },
    {
      "countyFIPS": 28095,
      "County Name": "Monroe County",
      "State": "MS",
      "population": 35252
    },
    {
      "countyFIPS": 28097,
      "County Name": "Montgomery County",
      "State": "MS",
      "population": 9775
    },
    {
      "countyFIPS": 28099,
      "County Name": "Neshoba County",
      "State": "MS",
      "population": 29118
    },
    {
      "countyFIPS": 28101,
      "County Name": "Newton County",
      "State": "MS",
      "population": 21018
    },
    {
      "countyFIPS": 28103,
      "County Name": "Noxubee County",
      "State": "MS",
      "population": 10417
    },
    {
      "countyFIPS": 28105,
      "County Name": "Oktibbeha County",
      "State": "MS",
      "population": 49587
    },
    {
      "countyFIPS": 28107,
      "County Name": "Panola County",
      "State": "MS",
      "population": 34192
    },
    {
      "countyFIPS": 28109,
      "County Name": "Pearl River County",
      "State": "MS",
      "population": 55535
    },
    {
      "countyFIPS": 28111,
      "County Name": "Perry County",
      "State": "MS",
      "population": 11973
    },
    {
      "countyFIPS": 28113,
      "County Name": "Pike County",
      "State": "MS",
      "population": 39288
    },
    {
      "countyFIPS": 28115,
      "County Name": "Pontotoc County",
      "State": "MS",
      "population": 32174
    },
    {
      "countyFIPS": 28117,
      "County Name": "Prentiss County",
      "State": "MS",
      "population": 25126
    },
    {
      "countyFIPS": 28119,
      "County Name": "Quitman County",
      "State": "MS",
      "population": 6792
    },
    {
      "countyFIPS": 28121,
      "County Name": "Rankin County",
      "State": "MS",
      "population": 155271
    },
    {
      "countyFIPS": 28123,
      "County Name": "Scott County",
      "State": "MS",
      "population": 28124
    },
    {
      "countyFIPS": 28125,
      "County Name": "Sharkey County",
      "State": "MS",
      "population": 4321
    },
    {
      "countyFIPS": 28127,
      "County Name": "Simpson County",
      "State": "MS",
      "population": 26658
    },
    {
      "countyFIPS": 28129,
      "County Name": "Smith County",
      "State": "MS",
      "population": 15916
    },
    {
      "countyFIPS": 28131,
      "County Name": "Stone County",
      "State": "MS",
      "population": 18336
    },
    {
      "countyFIPS": 28133,
      "County Name": "Sunflower County",
      "State": "MS",
      "population": 25110
    },
    {
      "countyFIPS": 28135,
      "County Name": "Tallahatchie County",
      "State": "MS",
      "population": 13809
    },
    {
      "countyFIPS": 28137,
      "County Name": "Tate County",
      "State": "MS",
      "population": 28321
    },
    {
      "countyFIPS": 28139,
      "County Name": "Tippah County",
      "State": "MS",
      "population": 22015
    },
    {
      "countyFIPS": 28141,
      "County Name": "Tishomingo County",
      "State": "MS",
      "population": 19383
    },
    {
      "countyFIPS": 28143,
      "County Name": "Tunica County",
      "State": "MS",
      "population": 9632
    },
    {
      "countyFIPS": 28145,
      "County Name": "Union County",
      "State": "MS",
      "population": 28815
    },
    {
      "countyFIPS": 28147,
      "County Name": "Walthall County",
      "State": "MS",
      "population": 14286
    },
    {
      "countyFIPS": 28149,
      "County Name": "Warren County",
      "State": "MS",
      "population": 45381
    },
    {
      "countyFIPS": 28151,
      "County Name": "Washington County",
      "State": "MS",
      "population": 43909
    },
    {
      "countyFIPS": 28153,
      "County Name": "Wayne County",
      "State": "MS",
      "population": 20183
    },
    {
      "countyFIPS": 28155,
      "County Name": "Webster County",
      "State": "MS",
      "population": 9689
    },
    {
      "countyFIPS": 28157,
      "County Name": "Wilkinson County",
      "State": "MS",
      "population": 8630
    },
    {
      "countyFIPS": 28159,
      "County Name": "Winston County",
      "State": "MS",
      "population": 17955
    },
    {
      "countyFIPS": 28161,
      "County Name": "Yalobusha County",
      "State": "MS",
      "population": 12108
    },
    {
      "countyFIPS": 28163,
      "County Name": "Yazoo County",
      "State": "MS",
      "population": 29690
    },
    {
      "countyFIPS": 0,
      "County Name": "Statewide Unallocated",
      "State": "MO",
      "population": 0
    },
    {
      "countyFIPS": 29001,
      "County Name": "Adair County",
      "State": "MO",
      "population": 25343
    },
    {
      "countyFIPS": 29003,
      "County Name": "Andrew County",
      "State": "MO",
      "population": 17712
    },
    {
      "countyFIPS": 29005,
      "County Name": "Atchison County",
      "State": "MO",
      "population": 5143
    },
    {
      "countyFIPS": 29007,
      "County Name": "Audrain County",
      "State": "MO",
      "population": 25388
    },
    {
      "countyFIPS": 29009,
      "County Name": "Barry County",
      "State": "MO",
      "population": 35789
    },
    {
      "countyFIPS": 29011,
      "County Name": "Barton County",
      "State": "MO",
      "population": 11754
    },
    {
      "countyFIPS": 29013,
      "County Name": "Bates County",
      "State": "MO",
      "population": 16172
    },
    {
      "countyFIPS": 29015,
      "County Name": "Benton County",
      "State": "MO",
      "population": 19443
    },
    {
      "countyFIPS": 29017,
      "County Name": "Bollinger County",
      "State": "MO",
      "population": 12133
    },
    {
      "countyFIPS": 29019,
      "County Name": "Boone County",
      "State": "MO",
      "population": 180463
    },
    {
      "countyFIPS": 29021,
      "County Name": "Buchanan County",
      "State": "MO",
      "population": 87364
    },
    {
      "countyFIPS": 29023,
      "County Name": "Butler County",
      "State": "MO",
      "population": 42478
    },
    {
      "countyFIPS": 29025,
      "County Name": "Caldwell County",
      "State": "MO",
      "population": 9020
    },
    {
      "countyFIPS": 29027,
      "County Name": "Callaway County",
      "State": "MO",
      "population": 44743
    },
    {
      "countyFIPS": 29029,
      "County Name": "Camden County",
      "State": "MO",
      "population": 46305
    },
    {
      "countyFIPS": 29031,
      "County Name": "Cape Girardeau County",
      "State": "MO",
      "population": 78871
    },
    {
      "countyFIPS": 29033,
      "County Name": "Carroll County",
      "State": "MO",
      "population": 8679
    },
    {
      "countyFIPS": 29035,
      "County Name": "Carter County",
      "State": "MO",
      "population": 5982
    },
    {
      "countyFIPS": 29037,
      "County Name": "Cass County",
      "State": "MO",
      "population": 105780
    },
    {
      "countyFIPS": 29039,
      "County Name": "Cedar County",
      "State": "MO",
      "population": 14349
    },
    {
      "countyFIPS": 29041,
      "County Name": "Chariton County",
      "State": "MO",
      "population": 7426
    },
    {
      "countyFIPS": 29043,
      "County Name": "Christian County",
      "State": "MO",
      "population": 88595
    },
    {
      "countyFIPS": 29045,
      "County Name": "Clark County",
      "State": "MO",
      "population": 6797
    },
    {
      "countyFIPS": 29047,
      "County Name": "Clay County",
      "State": "MO",
      "population": 249948
    },
    {
      "countyFIPS": 29049,
      "County Name": "Clinton County",
      "State": "MO",
      "population": 20387
    },
    {
      "countyFIPS": 29051,
      "County Name": "Cole County",
      "State": "MO",
      "population": 76745
    },
    {
      "countyFIPS": 29053,
      "County Name": "Cooper County",
      "State": "MO",
      "population": 17709
    },
    {
      "countyFIPS": 29055,
      "County Name": "Crawford County",
      "State": "MO",
      "population": 23920
    },
    {
      "countyFIPS": 29057,
      "County Name": "Dade County",
      "State": "MO",
      "population": 7561
    },
    {
      "countyFIPS": 29059,
      "County Name": "Dallas County",
      "State": "MO",
      "population": 16878
    },
    {
      "countyFIPS": 29061,
      "County Name": "Daviess County",
      "State": "MO",
      "population": 8278
    },
    {
      "countyFIPS": 29063,
      "County Name": "DeKalb County",
      "State": "MO",
      "population": 12547
    },
    {
      "countyFIPS": 29065,
      "County Name": "Dent County",
      "State": "MO",
      "population": 15573
    },
    {
      "countyFIPS": 29067,
      "County Name": "Douglas County",
      "State": "MO",
      "population": 13185
    },
    {
      "countyFIPS": 29069,
      "County Name": "Dunklin County",
      "State": "MO",
      "population": 29131
    },
    {
      "countyFIPS": 29071,
      "County Name": "Franklin County",
      "State": "MO",
      "population": 103967
    },
    {
      "countyFIPS": 29073,
      "County Name": "Gasconade County",
      "State": "MO",
      "population": 14706
    },
    {
      "countyFIPS": 29075,
      "County Name": "Gentry County",
      "State": "MO",
      "population": 6571
    },
    {
      "countyFIPS": 29077,
      "County Name": "Greene County",
      "State": "MO",
      "population": 293086
    },
    {
      "countyFIPS": 29079,
      "County Name": "Grundy County",
      "State": "MO",
      "population": 9850
    },
    {
      "countyFIPS": 29081,
      "County Name": "Harrison County",
      "State": "MO",
      "population": 8352
    },
    {
      "countyFIPS": 29083,
      "County Name": "Henry County",
      "State": "MO",
      "population": 21824
    },
    {
      "countyFIPS": 29085,
      "County Name": "Hickory County",
      "State": "MO",
      "population": 9544
    },
    {
      "countyFIPS": 29087,
      "County Name": "Holt County",
      "State": "MO",
      "population": 4403
    },
    {
      "countyFIPS": 29089,
      "County Name": "Howard County",
      "State": "MO",
      "population": 10001
    },
    {
      "countyFIPS": 29091,
      "County Name": "Howell County",
      "State": "MO",
      "population": 40117
    },
    {
      "countyFIPS": 29093,
      "County Name": "Iron County",
      "State": "MO",
      "population": 10125
    },
    {
      "countyFIPS": 29095,
      "County Name": "Jackson County (including other portions of Kansas City)",
      "State": "MO",
      "population": 703011
    },
    {
      "countyFIPS": 29097,
      "County Name": "Jasper County",
      "State": "MO",
      "population": 121328
    },
    {
      "countyFIPS": 29099,
      "County Name": "Jefferson County",
      "State": "MO",
      "population": 225081
    },
    {
      "countyFIPS": 29101,
      "County Name": "Johnson County",
      "State": "MO",
      "population": 54062
    },
    {
      "countyFIPS": 29103,
      "County Name": "Knox County",
      "State": "MO",
      "population": 3959
    },
    {
      "countyFIPS": 29105,
      "County Name": "Laclede County",
      "State": "MO",
      "population": 35723
    },
    {
      "countyFIPS": 29107,
      "County Name": "Lafayette County",
      "State": "MO",
      "population": 32708
    },
    {
      "countyFIPS": 29109,
      "County Name": "Lawrence County",
      "State": "MO",
      "population": 38355
    },
    {
      "countyFIPS": 29111,
      "County Name": "Lewis County",
      "State": "MO",
      "population": 9776
    },
    {
      "countyFIPS": 29113,
      "County Name": "Lincoln County",
      "State": "MO",
      "population": 59013
    },
    {
      "countyFIPS": 29115,
      "County Name": "Linn County",
      "State": "MO",
      "population": 11920
    },
    {
      "countyFIPS": 29117,
      "County Name": "Livingston County",
      "State": "MO",
      "population": 15227
    },
    {
      "countyFIPS": 29119,
      "County Name": "McDonald County",
      "State": "MO",
      "population": 22837
    },
    {
      "countyFIPS": 29121,
      "County Name": "Macon County",
      "State": "MO",
      "population": 15117
    },
    {
      "countyFIPS": 29123,
      "County Name": "Madison County",
      "State": "MO",
      "population": 12088
    },
    {
      "countyFIPS": 29125,
      "County Name": "Maries County",
      "State": "MO",
      "population": 8697
    },
    {
      "countyFIPS": 29127,
      "County Name": "Marion County",
      "State": "MO",
      "population": 28530
    },
    {
      "countyFIPS": 29129,
      "County Name": "Mercer County",
      "State": "MO",
      "population": 3617
    },
    {
      "countyFIPS": 29131,
      "County Name": "Miller County",
      "State": "MO",
      "population": 25619
    },
    {
      "countyFIPS": 29133,
      "County Name": "Mississippi County",
      "State": "MO",
      "population": 13180
    },
    {
      "countyFIPS": 29135,
      "County Name": "Moniteau County",
      "State": "MO",
      "population": 16132
    },
    {
      "countyFIPS": 29137,
      "County Name": "Monroe County",
      "State": "MO",
      "population": 8644
    },
    {
      "countyFIPS": 29139,
      "County Name": "Montgomery County",
      "State": "MO",
      "population": 11551
    },
    {
      "countyFIPS": 29141,
      "County Name": "Morgan County",
      "State": "MO",
      "population": 20627
    },
    {
      "countyFIPS": 29143,
      "County Name": "New Madrid County",
      "State": "MO",
      "population": 17076
    },
    {
      "countyFIPS": 29145,
      "County Name": "Newton County",
      "State": "MO",
      "population": 58236
    },
    {
      "countyFIPS": 29147,
      "County Name": "Nodaway County",
      "State": "MO",
      "population": 22092
    },
    {
      "countyFIPS": 29149,
      "County Name": "Oregon County",
      "State": "MO",
      "population": 10529
    },
    {
      "countyFIPS": 29151,
      "County Name": "Osage County",
      "State": "MO",
      "population": 13615
    },
    {
      "countyFIPS": 29153,
      "County Name": "Ozark County",
      "State": "MO",
      "population": 9174
    },
    {
      "countyFIPS": 29155,
      "County Name": "Pemiscot County",
      "State": "MO",
      "population": 15805
    },
    {
      "countyFIPS": 29157,
      "County Name": "Perry County",
      "State": "MO",
      "population": 19136
    },
    {
      "countyFIPS": 29159,
      "County Name": "Pettis County",
      "State": "MO",
      "population": 42339
    },
    {
      "countyFIPS": 29161,
      "County Name": "Phelps County",
      "State": "MO",
      "population": 44573
    },
    {
      "countyFIPS": 29163,
      "County Name": "Pike County",
      "State": "MO",
      "population": 18302
    },
    {
      "countyFIPS": 29165,
      "County Name": "Platte County",
      "State": "MO",
      "population": 104418
    },
    {
      "countyFIPS": 29167,
      "County Name": "Polk County",
      "State": "MO",
      "population": 32149
    },
    {
      "countyFIPS": 29169,
      "County Name": "Pulaski County",
      "State": "MO",
      "population": 52607
    },
    {
      "countyFIPS": 29171,
      "County Name": "Putnam County",
      "State": "MO",
      "population": 4696
    },
    {
      "countyFIPS": 29173,
      "County Name": "Ralls County",
      "State": "MO",
      "population": 10309
    },
    {
      "countyFIPS": 29175,
      "County Name": "Randolph County",
      "State": "MO",
      "population": 24748
    },
    {
      "countyFIPS": 29177,
      "County Name": "Ray County",
      "State": "MO",
      "population": 23018
    },
    {
      "countyFIPS": 29179,
      "County Name": "Reynolds County",
      "State": "MO",
      "population": 6270
    },
    {
      "countyFIPS": 29181,
      "County Name": "Ripley County",
      "State": "MO",
      "population": 13288
    },
    {
      "countyFIPS": 29183,
      "County Name": "St. Charles County",
      "State": "MO",
      "population": 402022
    },
    {
      "countyFIPS": 29185,
      "County Name": "St. Clair County",
      "State": "MO",
      "population": 9397
    },
    {
      "countyFIPS": 29186,
      "County Name": "Ste. Genevieve County",
      "State": "MO",
      "population": 17894
    },
    {
      "countyFIPS": 29187,
      "County Name": "St. Francois County",
      "State": "MO",
      "population": 67215
    },
    {
      "countyFIPS": 29189,
      "County Name": "St. Louis County",
      "State": "MO",
      "population": 994205
    },
    {
      "countyFIPS": 29195,
      "County Name": "Saline County",
      "State": "MO",
      "population": 22761
    },
    {
      "countyFIPS": 29197,
      "County Name": "Schuyler County",
      "State": "MO",
      "population": 4660
    },
    {
      "countyFIPS": 29199,
      "County Name": "Scotland County",
      "State": "MO",
      "population": 4902
    },
    {
      "countyFIPS": 29201,
      "County Name": "Scott County",
      "State": "MO",
      "population": 38280
    },
    {
      "countyFIPS": 29203,
      "County Name": "Shannon County",
      "State": "MO",
      "population": 8166
    },
    {
      "countyFIPS": 29205,
      "County Name": "Shelby County",
      "State": "MO",
      "population": 5930
    },
    {
      "countyFIPS": 29207,
      "County Name": "Stoddard County",
      "State": "MO",
      "population": 29025
    },
    {
      "countyFIPS": 29209,
      "County Name": "Stone County",
      "State": "MO",
      "population": 31952
    },
    {
      "countyFIPS": 29211,
      "County Name": "Sullivan County",
      "State": "MO",
      "population": 6089
    },
    {
      "countyFIPS": 29213,
      "County Name": "Taney County",
      "State": "MO",
      "population": 55928
    },
    {
      "countyFIPS": 29215,
      "County Name": "Texas County",
      "State": "MO",
      "population": 25398
    },
    {
      "countyFIPS": 29217,
      "County Name": "Vernon County",
      "State": "MO",
      "population": 20563
    },
    {
      "countyFIPS": 29219,
      "County Name": "Warren County",
      "State": "MO",
      "population": 35649
    },
    {
      "countyFIPS": 29221,
      "County Name": "Washington County",
      "State": "MO",
      "population": 24730
    },
    {
      "countyFIPS": 29223,
      "County Name": "Wayne County",
      "State": "MO",
      "population": 12873
    },
    {
      "countyFIPS": 29225,
      "County Name": "Webster County",
      "State": "MO",
      "population": 39592
    },
    {
      "countyFIPS": 29227,
      "County Name": "Worth County",
      "State": "MO",
      "population": 2013
    },
    {
      "countyFIPS": 29229,
      "County Name": "Wright County",
      "State": "MO",
      "population": 18289
    },
    {
      "countyFIPS": 29510,
      "County Name": "City of St. Louis",
      "State": "MO",
      "population": 300576
    },
    {
      "countyFIPS": 0,
      "County Name": "Statewide Unallocated",
      "State": "MT",
      "population": 0
    },
    {
      "countyFIPS": 30001,
      "County Name": "Beaverhead County",
      "State": "MT",
      "population": 9453
    },
    {
      "countyFIPS": 30003,
      "County Name": "Big Horn County",
      "State": "MT",
      "population": 13319
    },
    {
      "countyFIPS": 30005,
      "County Name": "Blaine County",
      "State": "MT",
      "population": 6681
    },
    {
      "countyFIPS": 30007,
      "County Name": "Broadwater County",
      "State": "MT",
      "population": 6237
    },
    {
      "countyFIPS": 30009,
      "County Name": "Carbon County",
      "State": "MT",
      "population": 10725
    },
    {
      "countyFIPS": 30011,
      "County Name": "Carter County",
      "State": "MT",
      "population": 1252
    },
    {
      "countyFIPS": 30013,
      "County Name": "Cascade County",
      "State": "MT",
      "population": 81366
    },
    {
      "countyFIPS": 30015,
      "County Name": "Chouteau County",
      "State": "MT",
      "population": 5635
    },
    {
      "countyFIPS": 30017,
      "County Name": "Custer County",
      "State": "MT",
      "population": 11402
    },
    {
      "countyFIPS": 30019,
      "County Name": "Daniels County",
      "State": "MT",
      "population": 1690
    },
    {
      "countyFIPS": 30021,
      "County Name": "Dawson County",
      "State": "MT",
      "population": 8613
    },
    {
      "countyFIPS": 30023,
      "County Name": "Deer Lodge County",
      "State": "MT",
      "population": 9140
    },
    {
      "countyFIPS": 30025,
      "County Name": "Fallon County",
      "State": "MT",
      "population": 2846
    },
    {
      "countyFIPS": 30027,
      "County Name": "Fergus County",
      "State": "MT",
      "population": 11050
    },
    {
      "countyFIPS": 30029,
      "County Name": "Flathead County",
      "State": "MT",
      "population": 103806
    },
    {
      "countyFIPS": 30031,
      "County Name": "Gallatin County",
      "State": "MT",
      "population": 114434
    },
    {
      "countyFIPS": 30033,
      "County Name": "Garfield County",
      "State": "MT",
      "population": 1258
    },
    {
      "countyFIPS": 30035,
      "County Name": "Glacier County",
      "State": "MT",
      "population": 13753
    },
    {
      "countyFIPS": 30037,
      "County Name": "Golden Valley County",
      "State": "MT",
      "population": 821
    },
    {
      "countyFIPS": 30039,
      "County Name": "Granite County",
      "State": "MT",
      "population": 3379
    },
    {
      "countyFIPS": 30041,
      "County Name": "Hill County",
      "State": "MT",
      "population": 16484
    },
    {
      "countyFIPS": 30043,
      "County Name": "Jefferson County",
      "State": "MT",
      "population": 12221
    },
    {
      "countyFIPS": 30045,
      "County Name": "Judith Basin County",
      "State": "MT",
      "population": 2007
    },
    {
      "countyFIPS": 30047,
      "County Name": "Lake County",
      "State": "MT",
      "population": 30458
    },
    {
      "countyFIPS": 30049,
      "County Name": "Lewis and Clark County",
      "State": "MT",
      "population": 69432
    },
    {
      "countyFIPS": 30051,
      "County Name": "Liberty County",
      "State": "MT",
      "population": 2337
    },
    {
      "countyFIPS": 30053,
      "County Name": "Lincoln County",
      "State": "MT",
      "population": 19980
    },
    {
      "countyFIPS": 30055,
      "County Name": "McCone County",
      "State": "MT",
      "population": 1664
    },
    {
      "countyFIPS": 30057,
      "County Name": "Madison County",
      "State": "MT",
      "population": 8600
    },
    {
      "countyFIPS": 30059,
      "County Name": "Meagher County",
      "State": "MT",
      "population": 1862
    },
    {
      "countyFIPS": 30061,
      "County Name": "Mineral County",
      "State": "MT",
      "population": 4397
    },
    {
      "countyFIPS": 30063,
      "County Name": "Missoula County",
      "State": "MT",
      "population": 119600
    },
    {
      "countyFIPS": 30065,
      "County Name": "Musselshell County",
      "State": "MT",
      "population": 4633
    },
    {
      "countyFIPS": 30067,
      "County Name": "Park County",
      "State": "MT",
      "population": 16606
    },
    {
      "countyFIPS": 30069,
      "County Name": "Petroleum County",
      "State": "MT",
      "population": 487
    },
    {
      "countyFIPS": 30071,
      "County Name": "Phillips County",
      "State": "MT",
      "population": 3954
    },
    {
      "countyFIPS": 30073,
      "County Name": "Pondera County",
      "State": "MT",
      "population": 5911
    },
    {
      "countyFIPS": 30075,
      "County Name": "Powder River County",
      "State": "MT",
      "population": 1682
    },
    {
      "countyFIPS": 30077,
      "County Name": "Powell County",
      "State": "MT",
      "population": 6890
    },
    {
      "countyFIPS": 30079,
      "County Name": "Prairie County",
      "State": "MT",
      "population": 1077
    },
    {
      "countyFIPS": 30081,
      "County Name": "Ravalli County",
      "State": "MT",
      "population": 43806
    },
    {
      "countyFIPS": 30083,
      "County Name": "Richland County",
      "State": "MT",
      "population": 10803
    },
    {
      "countyFIPS": 30085,
      "County Name": "Roosevelt County",
      "State": "MT",
      "population": 11004
    },
    {
      "countyFIPS": 30087,
      "County Name": "Rosebud County",
      "State": "MT",
      "population": 8937
    },
    {
      "countyFIPS": 30089,
      "County Name": "Sanders County",
      "State": "MT",
      "population": 12113
    },
    {
      "countyFIPS": 30091,
      "County Name": "Sheridan County",
      "State": "MT",
      "population": 3309
    },
    {
      "countyFIPS": 30093,
      "County Name": "Silver Bow County",
      "State": "MT",
      "population": 34915
    },
    {
      "countyFIPS": 30095,
      "County Name": "Stillwater County",
      "State": "MT",
      "population": 9642
    },
    {
      "countyFIPS": 30097,
      "County Name": "Sweet Grass County",
      "State": "MT",
      "population": 3737
    },
    {
      "countyFIPS": 30099,
      "County Name": "Teton County",
      "State": "MT",
      "population": 6147
    },
    {
      "countyFIPS": 30101,
      "County Name": "Toole County",
      "State": "MT",
      "population": 4736
    },
    {
      "countyFIPS": 30103,
      "County Name": "Treasure County",
      "State": "MT",
      "population": 696
    },
    {
      "countyFIPS": 30105,
      "County Name": "Valley County",
      "State": "MT",
      "population": 7396
    },
    {
      "countyFIPS": 30107,
      "County Name": "Wheatland County",
      "State": "MT",
      "population": 2126
    },
    {
      "countyFIPS": 30109,
      "County Name": "Wibaux County",
      "State": "MT",
      "population": 969
    },
    {
      "countyFIPS": 30111,
      "County Name": "Yellowstone County",
      "State": "MT",
      "population": 161300
    },
    {
      "countyFIPS": 0,
      "County Name": "Statewide Unallocated",
      "State": "NE",
      "population": 0
    },
    {
      "countyFIPS": 31001,
      "County Name": "Adams County",
      "State": "NE",
      "population": 31363
    },
    {
      "countyFIPS": 31003,
      "County Name": "Antelope County",
      "State": "NE",
      "population": 6298
    },
    {
      "countyFIPS": 31005,
      "County Name": "Arthur County",
      "State": "NE",
      "population": 463
    },
    {
      "countyFIPS": 31007,
      "County Name": "Banner County",
      "State": "NE",
      "population": 745
    },
    {
      "countyFIPS": 31009,
      "County Name": "Blaine County",
      "State": "NE",
      "population": 465
    },
    {
      "countyFIPS": 31011,
      "County Name": "Boone County",
      "State": "NE",
      "population": 5192
    },
    {
      "countyFIPS": 31013,
      "County Name": "Box Butte County",
      "State": "NE",
      "population": 10783
    },
    {
      "countyFIPS": 31015,
      "County Name": "Boyd County",
      "State": "NE",
      "population": 1919
    },
    {
      "countyFIPS": 31017,
      "County Name": "Brown County",
      "State": "NE",
      "population": 2955
    },
    {
      "countyFIPS": 31019,
      "County Name": "Buffalo County",
      "State": "NE",
      "population": 49659
    },
    {
      "countyFIPS": 31021,
      "County Name": "Burt County",
      "State": "NE",
      "population": 6459
    },
    {
      "countyFIPS": 31023,
      "County Name": "Butler County",
      "State": "NE",
      "population": 8016
    },
    {
      "countyFIPS": 31025,
      "County Name": "Cass County",
      "State": "NE",
      "population": 26248
    },
    {
      "countyFIPS": 31027,
      "County Name": "Cedar County",
      "State": "NE",
      "population": 8402
    },
    {
      "countyFIPS": 31029,
      "County Name": "Chase County",
      "State": "NE",
      "population": 3924
    },
    {
      "countyFIPS": 31031,
      "County Name": "Cherry County",
      "State": "NE",
      "population": 5689
    },
    {
      "countyFIPS": 31033,
      "County Name": "Cheyenne County",
      "State": "NE",
      "population": 8910
    },
    {
      "countyFIPS": 31035,
      "County Name": "Clay County",
      "State": "NE",
      "population": 6203
    },
    {
      "countyFIPS": 31037,
      "County Name": "Colfax County",
      "State": "NE",
      "population": 10709
    },
    {
      "countyFIPS": 31039,
      "County Name": "Cuming County",
      "State": "NE",
      "population": 8846
    },
    {
      "countyFIPS": 31041,
      "County Name": "Custer County",
      "State": "NE",
      "population": 10777
    },
    {
      "countyFIPS": 31043,
      "County Name": "Dakota County",
      "State": "NE",
      "population": 20026
    },
    {
      "countyFIPS": 31045,
      "County Name": "Dawes County",
      "State": "NE",
      "population": 8589
    },
    {
      "countyFIPS": 31047,
      "County Name": "Dawson County",
      "State": "NE",
      "population": 23595
    },
    {
      "countyFIPS": 31049,
      "County Name": "Deuel County",
      "State": "NE",
      "population": 1794
    },
    {
      "countyFIPS": 31051,
      "County Name": "Dixon County",
      "State": "NE",
      "population": 5636
    },
    {
      "countyFIPS": 31053,
      "County Name": "Dodge County",
      "State": "NE",
      "population": 36565
    },
    {
      "countyFIPS": 31055,
      "County Name": "Douglas County",
      "State": "NE",
      "population": 571327
    },
    {
      "countyFIPS": 31057,
      "County Name": "Dundy County",
      "State": "NE",
      "population": 1693
    },
    {
      "countyFIPS": 31059,
      "County Name": "Fillmore County",
      "State": "NE",
      "population": 5462
    },
    {
      "countyFIPS": 31061,
      "County Name": "Franklin County",
      "State": "NE",
      "population": 2979
    },
    {
      "countyFIPS": 31063,
      "County Name": "Frontier County",
      "State": "NE",
      "population": 2627
    },
    {
      "countyFIPS": 31065,
      "County Name": "Furnas County",
      "State": "NE",
      "population": 4676
    },
    {
      "countyFIPS": 31067,
      "County Name": "Gage County",
      "State": "NE",
      "population": 21513
    },
    {
      "countyFIPS": 31069,
      "County Name": "Garden County",
      "State": "NE",
      "population": 1837
    },
    {
      "countyFIPS": 31071,
      "County Name": "Garfield County",
      "State": "NE",
      "population": 1969
    },
    {
      "countyFIPS": 31073,
      "County Name": "Gosper County",
      "State": "NE",
      "population": 1990
    },
    {
      "countyFIPS": 31075,
      "County Name": "Grant County",
      "State": "NE",
      "population": 623
    },
    {
      "countyFIPS": 31077,
      "County Name": "Greeley County",
      "State": "NE",
      "population": 2356
    },
    {
      "countyFIPS": 31079,
      "County Name": "Hall County",
      "State": "NE",
      "population": 61353
    },
    {
      "countyFIPS": 31081,
      "County Name": "Hamilton County",
      "State": "NE",
      "population": 9324
    },
    {
      "countyFIPS": 31083,
      "County Name": "Harlan County",
      "State": "NE",
      "population": 3380
    },
    {
      "countyFIPS": 31085,
      "County Name": "Hayes County",
      "State": "NE",
      "population": 922
    },
    {
      "countyFIPS": 31087,
      "County Name": "Hitchcock County",
      "State": "NE",
      "population": 2762
    },
    {
      "countyFIPS": 31089,
      "County Name": "Holt County",
      "State": "NE",
      "population": 10067
    },
    {
      "countyFIPS": 31091,
      "County Name": "Hooker County",
      "State": "NE",
      "population": 682
    },
    {
      "countyFIPS": 31093,
      "County Name": "Howard County",
      "State": "NE",
      "population": 6445
    },
    {
      "countyFIPS": 31095,
      "County Name": "Jefferson County",
      "State": "NE",
      "population": 7046
    },
    {
      "countyFIPS": 31097,
      "County Name": "Johnson County",
      "State": "NE",
      "population": 5071
    },
    {
      "countyFIPS": 31099,
      "County Name": "Kearney County",
      "State": "NE",
      "population": 6495
    },
    {
      "countyFIPS": 31101,
      "County Name": "Keith County",
      "State": "NE",
      "population": 8034
    },
    {
      "countyFIPS": 31103,
      "County Name": "Keya Paha County",
      "State": "NE",
      "population": 806
    },
    {
      "countyFIPS": 31105,
      "County Name": "Kimball County",
      "State": "NE",
      "population": 3632
    },
    {
      "countyFIPS": 31107,
      "County Name": "Knox County",
      "State": "NE",
      "population": 8332
    },
    {
      "countyFIPS": 31109,
      "County Name": "Lancaster County",
      "State": "NE",
      "population": 319090
    },
    {
      "countyFIPS": 31111,
      "County Name": "Lincoln County",
      "State": "NE",
      "population": 34914
    },
    {
      "countyFIPS": 31113,
      "County Name": "Logan County",
      "State": "NE",
      "population": 748
    },
    {
      "countyFIPS": 31115,
      "County Name": "Loup County",
      "State": "NE",
      "population": 664
    },
    {
      "countyFIPS": 31117,
      "County Name": "McPherson County",
      "State": "NE",
      "population": 494
    },
    {
      "countyFIPS": 31119,
      "County Name": "Madison County",
      "State": "NE",
      "population": 35099
    },
    {
      "countyFIPS": 31121,
      "County Name": "Merrick County",
      "State": "NE",
      "population": 7755
    },
    {
      "countyFIPS": 31123,
      "County Name": "Morrill County",
      "State": "NE",
      "population": 4642
    },
    {
      "countyFIPS": 31125,
      "County Name": "Nance County",
      "State": "NE",
      "population": 3519
    },
    {
      "countyFIPS": 31127,
      "County Name": "Nemaha County",
      "State": "NE",
      "population": 6972
    },
    {
      "countyFIPS": 31129,
      "County Name": "Nuckolls County",
      "State": "NE",
      "population": 4148
    },
    {
      "countyFIPS": 31131,
      "County Name": "Otoe County",
      "State": "NE",
      "population": 16012
    },
    {
      "countyFIPS": 31133,
      "County Name": "Pawnee County",
      "State": "NE",
      "population": 2613
    },
    {
      "countyFIPS": 31135,
      "County Name": "Perkins County",
      "State": "NE",
      "population": 2891
    },
    {
      "countyFIPS": 31137,
      "County Name": "Phelps County",
      "State": "NE",
      "population": 9034
    },
    {
      "countyFIPS": 31139,
      "County Name": "Pierce County",
      "State": "NE",
      "population": 7148
    },
    {
      "countyFIPS": 31141,
      "County Name": "Platte County",
      "State": "NE",
      "population": 33470
    },
    {
      "countyFIPS": 31143,
      "County Name": "Polk County",
      "State": "NE",
      "population": 5213
    },
    {
      "countyFIPS": 31145,
      "County Name": "Red Willow County",
      "State": "NE",
      "population": 10724
    },
    {
      "countyFIPS": 31147,
      "County Name": "Richardson County",
      "State": "NE",
      "population": 7865
    },
    {
      "countyFIPS": 31149,
      "County Name": "Rock County",
      "State": "NE",
      "population": 1357
    },
    {
      "countyFIPS": 31151,
      "County Name": "Saline County",
      "State": "NE",
      "population": 14224
    },
    {
      "countyFIPS": 31153,
      "County Name": "Sarpy County",
      "State": "NE",
      "population": 187196
    },
    {
      "countyFIPS": 31155,
      "County Name": "Saunders County",
      "State": "NE",
      "population": 21578
    },
    {
      "countyFIPS": 31157,
      "County Name": "Scotts Bluff County",
      "State": "NE",
      "population": 35618
    },
    {
      "countyFIPS": 31159,
      "County Name": "Seward County",
      "State": "NE",
      "population": 17284
    },
    {
      "countyFIPS": 31161,
      "County Name": "Sheridan County",
      "State": "NE",
      "population": 5246
    },
    {
      "countyFIPS": 31163,
      "County Name": "Sherman County",
      "State": "NE",
      "population": 3001
    },
    {
      "countyFIPS": 31165,
      "County Name": "Sioux County",
      "State": "NE",
      "population": 1166
    },
    {
      "countyFIPS": 31167,
      "County Name": "Stanton County",
      "State": "NE",
      "population": 5920
    },
    {
      "countyFIPS": 31169,
      "County Name": "Thayer County",
      "State": "NE",
      "population": 5003
    },
    {
      "countyFIPS": 31171,
      "County Name": "Thomas County",
      "State": "NE",
      "population": 722
    },
    {
      "countyFIPS": 31173,
      "County Name": "Thurston County",
      "State": "NE",
      "population": 7224
    },
    {
      "countyFIPS": 31175,
      "County Name": "Valley County",
      "State": "NE",
      "population": 4158
    },
    {
      "countyFIPS": 31177,
      "County Name": "Washington County",
      "State": "NE",
      "population": 20729
    },
    {
      "countyFIPS": 31179,
      "County Name": "Wayne County",
      "State": "NE",
      "population": 9385
    },
    {
      "countyFIPS": 31181,
      "County Name": "Webster County",
      "State": "NE",
      "population": 3487
    },
    {
      "countyFIPS": 31183,
      "County Name": "Wheeler County",
      "State": "NE",
      "population": 783
    },
    {
      "countyFIPS": 31185,
      "County Name": "York County",
      "State": "NE",
      "population": 13679
    },
    {
      "countyFIPS": 0,
      "County Name": "Statewide Unallocated",
      "State": "NV",
      "population": 0
    },
    {
      "countyFIPS": 32001,
      "County Name": "Churchill County",
      "State": "NV",
      "population": 24909
    },
    {
      "countyFIPS": 32003,
      "County Name": "Clark County",
      "State": "NV",
      "population": 2266715
    },
    {
      "countyFIPS": 32005,
      "County Name": "Douglas County",
      "State": "NV",
      "population": 48905
    },
    {
      "countyFIPS": 32007,
      "County Name": "Elko County",
      "State": "NV",
      "population": 52778
    },
    {
      "countyFIPS": 32009,
      "County Name": "Esmeralda County",
      "State": "NV",
      "population": 873
    },
    {
      "countyFIPS": 32011,
      "County Name": "Eureka County",
      "State": "NV",
      "population": 2029
    },
    {
      "countyFIPS": 32013,
      "County Name": "Humboldt County",
      "State": "NV",
      "population": 16831
    },
    {
      "countyFIPS": 32015,
      "County Name": "Lander County",
      "State": "NV",
      "population": 5532
    },
    {
      "countyFIPS": 32017,
      "County Name": "Lincoln County",
      "State": "NV",
      "population": 5183
    },
    {
      "countyFIPS": 32019,
      "County Name": "Lyon County",
      "State": "NV",
      "population": 57510
    },
    {
      "countyFIPS": 32021,
      "County Name": "Mineral County",
      "State": "NV",
      "population": 4505
    },
    {
      "countyFIPS": 32023,
      "County Name": "Nye County",
      "State": "NV",
      "population": 46523
    },
    {
      "countyFIPS": 32027,
      "County Name": "Pershing County",
      "State": "NV",
      "population": 6725
    },
    {
      "countyFIPS": 32029,
      "County Name": "Storey County",
      "State": "NV",
      "population": 4123
    },
    {
      "countyFIPS": 32031,
      "County Name": "Washoe County",
      "State": "NV",
      "population": 471519
    },
    {
      "countyFIPS": 32033,
      "County Name": "White Pine County",
      "State": "NV",
      "population": 9580
    },
    {
      "countyFIPS": 32510,
      "County Name": "Carson City",
      "State": "NV",
      "population": 55916
    },
    {
      "countyFIPS": 0,
      "County Name": "Statewide Unallocated",
      "State": "NH",
      "population": 0
    },
    {
      "countyFIPS": 33001,
      "County Name": "Belknap County",
      "State": "NH",
      "population": 61303
    },
    {
      "countyFIPS": 33003,
      "County Name": "Carroll County",
      "State": "NH",
      "population": 48910
    },
    {
      "countyFIPS": 33005,
      "County Name": "Cheshire County",
      "State": "NH",
      "population": 76085
    },
    {
      "countyFIPS": 33007,
      "County Name": "Coos County",
      "State": "NH",
      "population": 31563
    },
    {
      "countyFIPS": 33009,
      "County Name": "Grafton County",
      "State": "NH",
      "population": 89886
    },
    {
      "countyFIPS": 33011,
      "County Name": "Hillsborough County",
      "State": "NH",
      "population": 417025
    },
    {
      "countyFIPS": 33013,
      "County Name": "Merrimack County",
      "State": "NH",
      "population": 151391
    },
    {
      "countyFIPS": 33015,
      "County Name": "Rockingham County",
      "State": "NH",
      "population": 309769
    },
    {
      "countyFIPS": 33017,
      "County Name": "Strafford County",
      "State": "NH",
      "population": 130633
    },
    {
      "countyFIPS": 33019,
      "County Name": "Sullivan County",
      "State": "NH",
      "population": 43146
    },
    {
      "countyFIPS": 0,
      "County Name": "Statewide Unallocated",
      "State": "NJ",
      "population": 0
    },
    {
      "countyFIPS": 34001,
      "County Name": "Atlantic County",
      "State": "NJ",
      "population": 263670
    },
    {
      "countyFIPS": 34003,
      "County Name": "Bergen County",
      "State": "NJ",
      "population": 932202
    },
    {
      "countyFIPS": 34005,
      "County Name": "Burlington County",
      "State": "NJ",
      "population": 445349
    },
    {
      "countyFIPS": 34007,
      "County Name": "Camden County",
      "State": "NJ",
      "population": 506471
    },
    {
      "countyFIPS": 34009,
      "County Name": "Cape May County",
      "State": "NJ",
      "population": 92039
    },
    {
      "countyFIPS": 34011,
      "County Name": "Cumberland County",
      "State": "NJ",
      "population": 149527
    },
    {
      "countyFIPS": 34013,
      "County Name": "Essex County",
      "State": "NJ",
      "population": 798975
    },
    {
      "countyFIPS": 34015,
      "County Name": "Gloucester County",
      "State": "NJ",
      "population": 291636
    },
    {
      "countyFIPS": 34017,
      "County Name": "Hudson County",
      "State": "NJ",
      "population": 672391
    },
    {
      "countyFIPS": 34019,
      "County Name": "Hunterdon County",
      "State": "NJ",
      "population": 124371
    },
    {
      "countyFIPS": 34021,
      "County Name": "Mercer County",
      "State": "NJ",
      "population": 367430
    },
    {
      "countyFIPS": 34023,
      "County Name": "Middlesex County",
      "State": "NJ",
      "population": 825062
    },
    {
      "countyFIPS": 34025,
      "County Name": "Monmouth County",
      "State": "NJ",
      "population": 618795
    },
    {
      "countyFIPS": 34027,
      "County Name": "Morris County",
      "State": "NJ",
      "population": 491845
    },
    {
      "countyFIPS": 34029,
      "County Name": "Ocean County",
      "State": "NJ",
      "population": 607186
    },
    {
      "countyFIPS": 34031,
      "County Name": "Passaic County",
      "State": "NJ",
      "population": 501826
    },
    {
      "countyFIPS": 34033,
      "County Name": "Salem County",
      "State": "NJ",
      "population": 62385
    },
    {
      "countyFIPS": 34035,
      "County Name": "Somerset County",
      "State": "NJ",
      "population": 328934
    },
    {
      "countyFIPS": 34037,
      "County Name": "Sussex County",
      "State": "NJ",
      "population": 140488
    },
    {
      "countyFIPS": 34039,
      "County Name": "Union County",
      "State": "NJ",
      "population": 556341
    },
    {
      "countyFIPS": 34041,
      "County Name": "Warren County",
      "State": "NJ",
      "population": 105267
    },
    {
      "countyFIPS": 0,
      "County Name": "Statewide Unallocated",
      "State": "NM",
      "population": 0
    },
    {
      "countyFIPS": 35001,
      "County Name": "Bernalillo County",
      "State": "NM",
      "population": 679121
    },
    {
      "countyFIPS": 35003,
      "County Name": "Catron County",
      "State": "NM",
      "population": 3527
    },
    {
      "countyFIPS": 35005,
      "County Name": "Chaves County",
      "State": "NM",
      "population": 64615
    },
    {
      "countyFIPS": 35006,
      "County Name": "Cibola County",
      "State": "NM",
      "population": 26675
    },
    {
      "countyFIPS": 35007,
      "County Name": "Colfax County",
      "State": "NM",
      "population": 11941
    },
    {
      "countyFIPS": 35009,
      "County Name": "Curry County",
      "State": "NM",
      "population": 48954
    },
    {
      "countyFIPS": 35011,
      "County Name": "De Baca County",
      "State": "NM",
      "population": 1748
    },
    {
      "countyFIPS": 35013,
      "County Name": "Doña Ana County",
      "State": "NM",
      "population": 218195
    },
    {
      "countyFIPS": 35015,
      "County Name": "Eddy County",
      "State": "NM",
      "population": 58460
    },
    {
      "countyFIPS": 35017,
      "County Name": "Grant County",
      "State": "NM",
      "population": 26998
    },
    {
      "countyFIPS": 35019,
      "County Name": "Guadalupe County",
      "State": "NM",
      "population": 4300
    },
    {
      "countyFIPS": 35021,
      "County Name": "Harding County",
      "State": "NM",
      "population": 625
    },
    {
      "countyFIPS": 35023,
      "County Name": "Hidalgo County",
      "State": "NM",
      "population": 4198
    },
    {
      "countyFIPS": 35025,
      "County Name": "Lea County",
      "State": "NM",
      "population": 71070
    },
    {
      "countyFIPS": 35027,
      "County Name": "Lincoln County",
      "State": "NM",
      "population": 19572
    },
    {
      "countyFIPS": 35028,
      "County Name": "Los Alamos County",
      "State": "NM",
      "population": 19369
    },
    {
      "countyFIPS": 35029,
      "County Name": "Luna County",
      "State": "NM",
      "population": 23709
    },
    {
      "countyFIPS": 35031,
      "County Name": "McKinley County",
      "State": "NM",
      "population": 71367
    },
    {
      "countyFIPS": 35033,
      "County Name": "Mora County",
      "State": "NM",
      "population": 4521
    },
    {
      "countyFIPS": 35035,
      "County Name": "Otero County",
      "State": "NM",
      "population": 67490
    },
    {
      "countyFIPS": 35037,
      "County Name": "Quay County",
      "State": "NM",
      "population": 8253
    },
    {
      "countyFIPS": 35039,
      "County Name": "Rio Arriba County",
      "State": "NM",
      "population": 38921
    },
    {
      "countyFIPS": 35041,
      "County Name": "Roosevelt County",
      "State": "NM",
      "population": 18500
    },
    {
      "countyFIPS": 35043,
      "County Name": "Sandoval County",
      "State": "NM",
      "population": 146748
    },
    {
      "countyFIPS": 35045,
      "County Name": "San Juan County",
      "State": "NM",
      "population": 123958
    },
    {
      "countyFIPS": 35047,
      "County Name": "San Miguel County",
      "State": "NM",
      "population": 27277
    },
    {
      "countyFIPS": 35049,
      "County Name": "Santa Fe County",
      "State": "NM",
      "population": 150358
    },
    {
      "countyFIPS": 35051,
      "County Name": "Sierra County",
      "State": "NM",
      "population": 10791
    },
    {
      "countyFIPS": 35053,
      "County Name": "Socorro County",
      "State": "NM",
      "population": 16637
    },
    {
      "countyFIPS": 35055,
      "County Name": "Taos County",
      "State": "NM",
      "population": 32723
    },
    {
      "countyFIPS": 35057,
      "County Name": "Torrance County",
      "State": "NM",
      "population": 15461
    },
    {
      "countyFIPS": 35059,
      "County Name": "Union County",
      "State": "NM",
      "population": 4059
    },
    {
      "countyFIPS": 35061,
      "County Name": "Valencia County",
      "State": "NM",
      "population": 76688
    },
    {
      "countyFIPS": 0,
      "County Name": "Statewide Unallocated",
      "State": "NY",
      "population": 0
    },
    {
      "countyFIPS": 0,
      "County Name": "New York City Unallocated",
      "State": "NY",
      "population": 0
    },
    {
      "countyFIPS": 36001,
      "County Name": "Albany County",
      "State": "NY",
      "population": 305506
    },
    {
      "countyFIPS": 36003,
      "County Name": "Allegany County",
      "State": "NY",
      "population": 46091
    },
    {
      "countyFIPS": 36005,
      "County Name": "Bronx County",
      "State": "NY",
      "population": 1418207
    },
    {
      "countyFIPS": 36007,
      "County Name": "Broome County",
      "State": "NY",
      "population": 190488
    },
    {
      "countyFIPS": 36009,
      "County Name": "Cattaraugus County",
      "State": "NY",
      "population": 76117
    },
    {
      "countyFIPS": 36011,
      "County Name": "Cayuga County",
      "State": "NY",
      "population": 76576
    },
    {
      "countyFIPS": 36013,
      "County Name": "Chautauqua County",
      "State": "NY",
      "population": 126903
    },
    {
      "countyFIPS": 36015,
      "County Name": "Chemung County",
      "State": "NY",
      "population": 83456
    },
    {
      "countyFIPS": 36017,
      "County Name": "Chenango County",
      "State": "NY",
      "population": 47207
    },
    {
      "countyFIPS": 36019,
      "County Name": "Clinton County",
      "State": "NY",
      "population": 80485
    },
    {
      "countyFIPS": 36021,
      "County Name": "Columbia County",
      "State": "NY",
      "population": 59461
    },
    {
      "countyFIPS": 36023,
      "County Name": "Cortland County",
      "State": "NY",
      "population": 47581
    },
    {
      "countyFIPS": 36025,
      "County Name": "Delaware County",
      "State": "NY",
      "population": 44135
    },
    {
      "countyFIPS": 36027,
      "County Name": "Dutchess County",
      "State": "NY",
      "population": 294218
    },
    {
      "countyFIPS": 36029,
      "County Name": "Erie County",
      "State": "NY",
      "population": 918702
    },
    {
      "countyFIPS": 36031,
      "County Name": "Essex County",
      "State": "NY",
      "population": 36885
    },
    {
      "countyFIPS": 36033,
      "County Name": "Franklin County",
      "State": "NY",
      "population": 50022
    },
    {
      "countyFIPS": 36035,
      "County Name": "Fulton County",
      "State": "NY",
      "population": 53383
    },
    {
      "countyFIPS": 36037,
      "County Name": "Genesee County",
      "State": "NY",
      "population": 57280
    },
    {
      "countyFIPS": 36039,
      "County Name": "Greene County",
      "State": "NY",
      "population": 47188
    },
    {
      "countyFIPS": 36041,
      "County Name": "Hamilton County",
      "State": "NY",
      "population": 4416
    },
    {
      "countyFIPS": 36043,
      "County Name": "Herkimer County",
      "State": "NY",
      "population": 61319
    },
    {
      "countyFIPS": 36045,
      "County Name": "Jefferson County",
      "State": "NY",
      "population": 109834
    },
    {
      "countyFIPS": 36047,
      "County Name": "Kings County",
      "State": "NY",
      "population": 2559903
    },
    {
      "countyFIPS": 36049,
      "County Name": "Lewis County",
      "State": "NY",
      "population": 26296
    },
    {
      "countyFIPS": 36051,
      "County Name": "Livingston County",
      "State": "NY",
      "population": 62914
    },
    {
      "countyFIPS": 36053,
      "County Name": "Madison County",
      "State": "NY",
      "population": 70941
    },
    {
      "countyFIPS": 36055,
      "County Name": "Monroe County",
      "State": "NY",
      "population": 741770
    },
    {
      "countyFIPS": 36057,
      "County Name": "Montgomery County",
      "State": "NY",
      "population": 49221
    },
    {
      "countyFIPS": 36059,
      "County Name": "Nassau County",
      "State": "NY",
      "population": 1356924
    },
    {
      "countyFIPS": 36061,
      "County Name": "New York County",
      "State": "NY",
      "population": 1628706
    },
    {
      "countyFIPS": 36063,
      "County Name": "Niagara County",
      "State": "NY",
      "population": 209281
    },
    {
      "countyFIPS": 36065,
      "County Name": "Oneida County",
      "State": "NY",
      "population": 228671
    },
    {
      "countyFIPS": 36067,
      "County Name": "Onondaga County",
      "State": "NY",
      "population": 460528
    },
    {
      "countyFIPS": 36069,
      "County Name": "Ontario County",
      "State": "NY",
      "population": 109777
    },
    {
      "countyFIPS": 36071,
      "County Name": "Orange County",
      "State": "NY",
      "population": 384940
    },
    {
      "countyFIPS": 36073,
      "County Name": "Orleans County",
      "State": "NY",
      "population": 40352
    },
    {
      "countyFIPS": 36075,
      "County Name": "Oswego County",
      "State": "NY",
      "population": 117124
    },
    {
      "countyFIPS": 36077,
      "County Name": "Otsego County",
      "State": "NY",
      "population": 59493
    },
    {
      "countyFIPS": 36079,
      "County Name": "Putnam County",
      "State": "NY",
      "population": 98320
    },
    {
      "countyFIPS": 36081,
      "County Name": "Queens County",
      "State": "NY",
      "population": 2253858
    },
    {
      "countyFIPS": 36083,
      "County Name": "Rensselaer County",
      "State": "NY",
      "population": 158714
    },
    {
      "countyFIPS": 36085,
      "County Name": "Richmond County",
      "State": "NY",
      "population": 476143
    },
    {
      "countyFIPS": 36087,
      "County Name": "Rockland County",
      "State": "NY",
      "population": 325789
    },
    {
      "countyFIPS": 36089,
      "County Name": "St. Lawrence County",
      "State": "NY",
      "population": 107740
    },
    {
      "countyFIPS": 36091,
      "County Name": "Saratoga County",
      "State": "NY",
      "population": 229863
    },
    {
      "countyFIPS": 36093,
      "County Name": "Schenectady County",
      "State": "NY",
      "population": 155299
    },
    {
      "countyFIPS": 36095,
      "County Name": "Schoharie County",
      "State": "NY",
      "population": 30999
    },
    {
      "countyFIPS": 36097,
      "County Name": "Schuyler County",
      "State": "NY",
      "population": 17807
    },
    {
      "countyFIPS": 36099,
      "County Name": "Seneca County",
      "State": "NY",
      "population": 34016
    },
    {
      "countyFIPS": 36101,
      "County Name": "Steuben County",
      "State": "NY",
      "population": 95379
    },
    {
      "countyFIPS": 36103,
      "County Name": "Suffolk County",
      "State": "NY",
      "population": 1476601
    },
    {
      "countyFIPS": 36105,
      "County Name": "Sullivan County",
      "State": "NY",
      "population": 75432
    },
    {
      "countyFIPS": 36107,
      "County Name": "Tioga County",
      "State": "NY",
      "population": 48203
    },
    {
      "countyFIPS": 36109,
      "County Name": "Tompkins County",
      "State": "NY",
      "population": 102180
    },
    {
      "countyFIPS": 36111,
      "County Name": "Ulster County",
      "State": "NY",
      "population": 177573
    },
    {
      "countyFIPS": 36113,
      "County Name": "Warren County",
      "State": "NY",
      "population": 63944
    },
    {
      "countyFIPS": 36115,
      "County Name": "Washington County",
      "State": "NY",
      "population": 61204
    },
    {
      "countyFIPS": 36117,
      "County Name": "Wayne County",
      "State": "NY",
      "population": 89918
    },
    {
      "countyFIPS": 36119,
      "County Name": "Westchester County",
      "State": "NY",
      "population": 967506
    },
    {
      "countyFIPS": 36121,
      "County Name": "Wyoming County",
      "State": "NY",
      "population": 39859
    },
    {
      "countyFIPS": 36123,
      "County Name": "Yates County",
      "State": "NY",
      "population": 24913
    },
    {
      "countyFIPS": 0,
      "County Name": "Statewide Unallocated",
      "State": "NC",
      "population": 0
    },
    {
      "countyFIPS": 37001,
      "County Name": "Alamance County",
      "State": "NC",
      "population": 169509
    },
    {
      "countyFIPS": 37003,
      "County Name": "Alexander County",
      "State": "NC",
      "population": 37497
    },
    {
      "countyFIPS": 37005,
      "County Name": "Alleghany County",
      "State": "NC",
      "population": 11137
    },
    {
      "countyFIPS": 37007,
      "County Name": "Anson County",
      "State": "NC",
      "population": 24446
    },
    {
      "countyFIPS": 37009,
      "County Name": "Ashe County",
      "State": "NC",
      "population": 27203
    },
    {
      "countyFIPS": 37011,
      "County Name": "Avery County",
      "State": "NC",
      "population": 17557
    },
    {
      "countyFIPS": 37013,
      "County Name": "Beaufort County",
      "State": "NC",
      "population": 46994
    },
    {
      "countyFIPS": 37015,
      "County Name": "Bertie County",
      "State": "NC",
      "population": 18947
    },
    {
      "countyFIPS": 37017,
      "County Name": "Bladen County",
      "State": "NC",
      "population": 32722
    },
    {
      "countyFIPS": 37019,
      "County Name": "Brunswick County",
      "State": "NC",
      "population": 142820
    },
    {
      "countyFIPS": 37021,
      "County Name": "Buncombe County",
      "State": "NC",
      "population": 261191
    },
    {
      "countyFIPS": 37023,
      "County Name": "Burke County",
      "State": "NC",
      "population": 90485
    },
    {
      "countyFIPS": 37025,
      "County Name": "Cabarrus County",
      "State": "NC",
      "population": 216453
    },
    {
      "countyFIPS": 37027,
      "County Name": "Caldwell County",
      "State": "NC",
      "population": 82178
    },
    {
      "countyFIPS": 37029,
      "County Name": "Camden County",
      "State": "NC",
      "population": 10867
    },
    {
      "countyFIPS": 37031,
      "County Name": "Carteret County",
      "State": "NC",
      "population": 69473
    },
    {
      "countyFIPS": 37033,
      "County Name": "Caswell County",
      "State": "NC",
      "population": 22604
    },
    {
      "countyFIPS": 37035,
      "County Name": "Catawba County",
      "State": "NC",
      "population": 159551
    },
    {
      "countyFIPS": 37037,
      "County Name": "Chatham County",
      "State": "NC",
      "population": 74470
    },
    {
      "countyFIPS": 37039,
      "County Name": "Cherokee County",
      "State": "NC",
      "population": 28612
    },
    {
      "countyFIPS": 37041,
      "County Name": "Chowan County",
      "State": "NC",
      "population": 13943
    },
    {
      "countyFIPS": 37043,
      "County Name": "Clay County",
      "State": "NC",
      "population": 11231
    },
    {
      "countyFIPS": 37045,
      "County Name": "Cleveland County",
      "State": "NC",
      "population": 97947
    },
    {
      "countyFIPS": 37047,
      "County Name": "Columbus County",
      "State": "NC",
      "population": 55508
    },
    {
      "countyFIPS": 37049,
      "County Name": "Craven County",
      "State": "NC",
      "population": 102139
    },
    {
      "countyFIPS": 37051,
      "County Name": "Cumberland County",
      "State": "NC",
      "population": 335509
    },
    {
      "countyFIPS": 37053,
      "County Name": "Currituck County",
      "State": "NC",
      "population": 27763
    },
    {
      "countyFIPS": 37055,
      "County Name": "Dare County",
      "State": "NC",
      "population": 37009
    },
    {
      "countyFIPS": 37057,
      "County Name": "Davidson County",
      "State": "NC",
      "population": 167609
    },
    {
      "countyFIPS": 37059,
      "County Name": "Davie County",
      "State": "NC",
      "population": 42846
    },
    {
      "countyFIPS": 37061,
      "County Name": "Duplin County",
      "State": "NC",
      "population": 58741
    },
    {
      "countyFIPS": 37063,
      "County Name": "Durham County",
      "State": "NC",
      "population": 321488
    },
    {
      "countyFIPS": 37065,
      "County Name": "Edgecombe County",
      "State": "NC",
      "population": 51472
    },
    {
      "countyFIPS": 37067,
      "County Name": "Forsyth County",
      "State": "NC",
      "population": 382295
    },
    {
      "countyFIPS": 37069,
      "County Name": "Franklin County",
      "State": "NC",
      "population": 69685
    },
    {
      "countyFIPS": 37071,
      "County Name": "Gaston County",
      "State": "NC",
      "population": 224529
    },
    {
      "countyFIPS": 37073,
      "County Name": "Gates County",
      "State": "NC",
      "population": 11562
    },
    {
      "countyFIPS": 37075,
      "County Name": "Graham County",
      "State": "NC",
      "population": 8441
    },
    {
      "countyFIPS": 37077,
      "County Name": "Granville County",
      "State": "NC",
      "population": 60443
    },
    {
      "countyFIPS": 37079,
      "County Name": "Greene County",
      "State": "NC",
      "population": 21069
    },
    {
      "countyFIPS": 37081,
      "County Name": "Guilford County",
      "State": "NC",
      "population": 537174
    },
    {
      "countyFIPS": 37083,
      "County Name": "Halifax County",
      "State": "NC",
      "population": 50010
    },
    {
      "countyFIPS": 37085,
      "County Name": "Harnett County",
      "State": "NC",
      "population": 135976
    },
    {
      "countyFIPS": 37087,
      "County Name": "Haywood County",
      "State": "NC",
      "population": 62317
    },
    {
      "countyFIPS": 37089,
      "County Name": "Henderson County",
      "State": "NC",
      "population": 117417
    },
    {
      "countyFIPS": 37091,
      "County Name": "Hertford County",
      "State": "NC",
      "population": 23677
    },
    {
      "countyFIPS": 37093,
      "County Name": "Hoke County",
      "State": "NC",
      "population": 55234
    },
    {
      "countyFIPS": 37095,
      "County Name": "Hyde County",
      "State": "NC",
      "population": 4937
    },
    {
      "countyFIPS": 37097,
      "County Name": "Iredell County",
      "State": "NC",
      "population": 181806
    },
    {
      "countyFIPS": 37099,
      "County Name": "Jackson County",
      "State": "NC",
      "population": 43938
    },
    {
      "countyFIPS": 37101,
      "County Name": "Johnston County",
      "State": "NC",
      "population": 209339
    },
    {
      "countyFIPS": 37103,
      "County Name": "Jones County",
      "State": "NC",
      "population": 9419
    },
    {
      "countyFIPS": 37105,
      "County Name": "Lee County",
      "State": "NC",
      "population": 61779
    },
    {
      "countyFIPS": 37107,
      "County Name": "Lenoir County",
      "State": "NC",
      "population": 55949
    },
    {
      "countyFIPS": 37109,
      "County Name": "Lincoln County",
      "State": "NC",
      "population": 86111
    },
    {
      "countyFIPS": 37111,
      "County Name": "McDowell County",
      "State": "NC",
      "population": 45756
    },
    {
      "countyFIPS": 37113,
      "County Name": "Macon County",
      "State": "NC",
      "population": 35858
    },
    {
      "countyFIPS": 37115,
      "County Name": "Madison County",
      "State": "NC",
      "population": 21755
    },
    {
      "countyFIPS": 37117,
      "County Name": "Martin County",
      "State": "NC",
      "population": 22440
    },
    {
      "countyFIPS": 37119,
      "County Name": "Mecklenburg County",
      "State": "NC",
      "population": 1110356
    },
    {
      "countyFIPS": 37121,
      "County Name": "Mitchell County",
      "State": "NC",
      "population": 14964
    },
    {
      "countyFIPS": 37123,
      "County Name": "Montgomery County",
      "State": "NC",
      "population": 27173
    },
    {
      "countyFIPS": 37125,
      "County Name": "Moore County",
      "State": "NC",
      "population": 100880
    },
    {
      "countyFIPS": 37127,
      "County Name": "Nash County",
      "State": "NC",
      "population": 94298
    },
    {
      "countyFIPS": 37129,
      "County Name": "New Hanover County",
      "State": "NC",
      "population": 234473
    },
    {
      "countyFIPS": 37131,
      "County Name": "Northampton County",
      "State": "NC",
      "population": 19483
    },
    {
      "countyFIPS": 37133,
      "County Name": "Onslow County",
      "State": "NC",
      "population": 197938
    },
    {
      "countyFIPS": 37135,
      "County Name": "Orange County",
      "State": "NC",
      "population": 148476
    },
    {
      "countyFIPS": 37137,
      "County Name": "Pamlico County",
      "State": "NC",
      "population": 12726
    },
    {
      "countyFIPS": 37139,
      "County Name": "Pasquotank County",
      "State": "NC",
      "population": 39824
    },
    {
      "countyFIPS": 37141,
      "County Name": "Pender County",
      "State": "NC",
      "population": 63060
    },
    {
      "countyFIPS": 37143,
      "County Name": "Perquimans County",
      "State": "NC",
      "population": 13463
    },
    {
      "countyFIPS": 37145,
      "County Name": "Person County",
      "State": "NC",
      "population": 39490
    },
    {
      "countyFIPS": 37147,
      "County Name": "Pitt County",
      "State": "NC",
      "population": 180742
    },
    {
      "countyFIPS": 37149,
      "County Name": "Polk County",
      "State": "NC",
      "population": 20724
    },
    {
      "countyFIPS": 37151,
      "County Name": "Randolph County",
      "State": "NC",
      "population": 143667
    },
    {
      "countyFIPS": 37153,
      "County Name": "Richmond County",
      "State": "NC",
      "population": 44829
    },
    {
      "countyFIPS": 37155,
      "County Name": "Robeson County",
      "State": "NC",
      "population": 130625
    },
    {
      "countyFIPS": 37157,
      "County Name": "Rockingham County",
      "State": "NC",
      "population": 91010
    },
    {
      "countyFIPS": 37159,
      "County Name": "Rowan County",
      "State": "NC",
      "population": 142088
    },
    {
      "countyFIPS": 37161,
      "County Name": "Rutherford County",
      "State": "NC",
      "population": 67029
    },
    {
      "countyFIPS": 37163,
      "County Name": "Sampson County",
      "State": "NC",
      "population": 63531
    },
    {
      "countyFIPS": 37165,
      "County Name": "Scotland County",
      "State": "NC",
      "population": 34823
    },
    {
      "countyFIPS": 37167,
      "County Name": "Stanly County",
      "State": "NC",
      "population": 62806
    },
    {
      "countyFIPS": 37169,
      "County Name": "Stokes County",
      "State": "NC",
      "population": 45591
    },
    {
      "countyFIPS": 37171,
      "County Name": "Surry County",
      "State": "NC",
      "population": 71783
    },
    {
      "countyFIPS": 37173,
      "County Name": "Swain County",
      "State": "NC",
      "population": 14271
    },
    {
      "countyFIPS": 37175,
      "County Name": "Transylvania County",
      "State": "NC",
      "population": 34385
    },
    {
      "countyFIPS": 37177,
      "County Name": "Tyrrell County",
      "State": "NC",
      "population": 4016
    },
    {
      "countyFIPS": 37179,
      "County Name": "Union County",
      "State": "NC",
      "population": 239859
    },
    {
      "countyFIPS": 37181,
      "County Name": "Vance County",
      "State": "NC",
      "population": 44535
    },
    {
      "countyFIPS": 37183,
      "County Name": "Wake County",
      "State": "NC",
      "population": 1111761
    },
    {
      "countyFIPS": 37185,
      "County Name": "Warren County",
      "State": "NC",
      "population": 19731
    },
    {
      "countyFIPS": 37187,
      "County Name": "Washington County",
      "State": "NC",
      "population": 11580
    },
    {
      "countyFIPS": 37189,
      "County Name": "Watauga County",
      "State": "NC",
      "population": 56177
    },
    {
      "countyFIPS": 37191,
      "County Name": "Wayne County",
      "State": "NC",
      "population": 123131
    },
    {
      "countyFIPS": 37193,
      "County Name": "Wilkes County",
      "State": "NC",
      "population": 68412
    },
    {
      "countyFIPS": 37195,
      "County Name": "Wilson County",
      "State": "NC",
      "population": 81801
    },
    {
      "countyFIPS": 37197,
      "County Name": "Yadkin County",
      "State": "NC",
      "population": 37667
    },
    {
      "countyFIPS": 37199,
      "County Name": "Yancey County",
      "State": "NC",
      "population": 18069
    },
    {
      "countyFIPS": 0,
      "County Name": "Statewide Unallocated",
      "State": "ND",
      "population": 0
    },
    {
      "countyFIPS": 38001,
      "County Name": "Adams County",
      "State": "ND",
      "population": 2216
    },
    {
      "countyFIPS": 38003,
      "County Name": "Barnes County",
      "State": "ND",
      "population": 10415
    },
    {
      "countyFIPS": 38005,
      "County Name": "Benson County",
      "State": "ND",
      "population": 6832
    },
    {
      "countyFIPS": 38007,
      "County Name": "Billings County",
      "State": "ND",
      "population": 928
    },
    {
      "countyFIPS": 38009,
      "County Name": "Bottineau County",
      "State": "ND",
      "population": 6282
    },
    {
      "countyFIPS": 38011,
      "County Name": "Bowman County",
      "State": "ND",
      "population": 3024
    },
    {
      "countyFIPS": 38013,
      "County Name": "Burke County",
      "State": "ND",
      "population": 2115
    },
    {
      "countyFIPS": 38015,
      "County Name": "Burleigh County",
      "State": "ND",
      "population": 95626
    },
    {
      "countyFIPS": 38017,
      "County Name": "Cass County",
      "State": "ND",
      "population": 181923
    },
    {
      "countyFIPS": 38019,
      "County Name": "Cavalier County",
      "State": "ND",
      "population": 3762
    },
    {
      "countyFIPS": 38021,
      "County Name": "Dickey County",
      "State": "ND",
      "population": 4872
    },
    {
      "countyFIPS": 38023,
      "County Name": "Divide County",
      "State": "ND",
      "population": 2264
    },
    {
      "countyFIPS": 38025,
      "County Name": "Dunn County",
      "State": "ND",
      "population": 4424
    },
    {
      "countyFIPS": 38027,
      "County Name": "Eddy County",
      "State": "ND",
      "population": 2287
    },
    {
      "countyFIPS": 38029,
      "County Name": "Emmons County",
      "State": "ND",
      "population": 3241
    },
    {
      "countyFIPS": 38031,
      "County Name": "Foster County",
      "State": "ND",
      "population": 3210
    },
    {
      "countyFIPS": 38033,
      "County Name": "Golden Valley County",
      "State": "ND",
      "population": 1761
    },
    {
      "countyFIPS": 38035,
      "County Name": "Grand Forks County",
      "State": "ND",
      "population": 69451
    },
    {
      "countyFIPS": 38037,
      "County Name": "Grant County",
      "State": "ND",
      "population": 2274
    },
    {
      "countyFIPS": 38039,
      "County Name": "Griggs County",
      "State": "ND",
      "population": 2231
    },
    {
      "countyFIPS": 38041,
      "County Name": "Hettinger County",
      "State": "ND",
      "population": 2499
    },
    {
      "countyFIPS": 38043,
      "County Name": "Kidder County",
      "State": "ND",
      "population": 2480
    },
    {
      "countyFIPS": 38045,
      "County Name": "LaMoure County",
      "State": "ND",
      "population": 4046
    },
    {
      "countyFIPS": 38047,
      "County Name": "Logan County",
      "State": "ND",
      "population": 1850
    },
    {
      "countyFIPS": 38049,
      "County Name": "McHenry County",
      "State": "ND",
      "population": 5745
    },
    {
      "countyFIPS": 38051,
      "County Name": "McIntosh County",
      "State": "ND",
      "population": 2497
    },
    {
      "countyFIPS": 38053,
      "County Name": "McKenzie County",
      "State": "ND",
      "population": 15024
    },
    {
      "countyFIPS": 38055,
      "County Name": "McLean County",
      "State": "ND",
      "population": 9450
    },
    {
      "countyFIPS": 38057,
      "County Name": "Mercer County",
      "State": "ND",
      "population": 8187
    },
    {
      "countyFIPS": 38059,
      "County Name": "Morton County",
      "State": "ND",
      "population": 31364
    },
    {
      "countyFIPS": 38061,
      "County Name": "Mountrail County",
      "State": "ND",
      "population": 10545
    },
    {
      "countyFIPS": 38063,
      "County Name": "Nelson County",
      "State": "ND",
      "population": 2879
    },
    {
      "countyFIPS": 38065,
      "County Name": "Oliver County",
      "State": "ND",
      "population": 1959
    },
    {
      "countyFIPS": 38067,
      "County Name": "Pembina County",
      "State": "ND",
      "population": 6801
    },
    {
      "countyFIPS": 38069,
      "County Name": "Pierce County",
      "State": "ND",
      "population": 3975
    },
    {
      "countyFIPS": 38071,
      "County Name": "Ramsey County",
      "State": "ND",
      "population": 11519
    },
    {
      "countyFIPS": 38073,
      "County Name": "Ransom County",
      "State": "ND",
      "population": 5218
    },
    {
      "countyFIPS": 38075,
      "County Name": "Renville County",
      "State": "ND",
      "population": 2327
    },
    {
      "countyFIPS": 38077,
      "County Name": "Richland County",
      "State": "ND",
      "population": 16177
    },
    {
      "countyFIPS": 38079,
      "County Name": "Rolette County",
      "State": "ND",
      "population": 14176
    },
    {
      "countyFIPS": 38081,
      "County Name": "Sargent County",
      "State": "ND",
      "population": 3898
    },
    {
      "countyFIPS": 38083,
      "County Name": "Sheridan County",
      "State": "ND",
      "population": 1315
    },
    {
      "countyFIPS": 38085,
      "County Name": "Sioux County",
      "State": "ND",
      "population": 4230
    },
    {
      "countyFIPS": 38087,
      "County Name": "Slope County",
      "State": "ND",
      "population": 750
    },
    {
      "countyFIPS": 38089,
      "County Name": "Stark County",
      "State": "ND",
      "population": 31489
    },
    {
      "countyFIPS": 38091,
      "County Name": "Steele County",
      "State": "ND",
      "population": 1890
    },
    {
      "countyFIPS": 38093,
      "County Name": "Stutsman County",
      "State": "ND",
      "population": 20704
    },
    {
      "countyFIPS": 38095,
      "County Name": "Towner County",
      "State": "ND",
      "population": 2189
    },
    {
      "countyFIPS": 38097,
      "County Name": "Traill County",
      "State": "ND",
      "population": 8036
    },
    {
      "countyFIPS": 38099,
      "County Name": "Walsh County",
      "State": "ND",
      "population": 10641
    },
    {
      "countyFIPS": 38101,
      "County Name": "Ward County",
      "State": "ND",
      "population": 67641
    },
    {
      "countyFIPS": 38103,
      "County Name": "Wells County",
      "State": "ND",
      "population": 3834
    },
    {
      "countyFIPS": 38105,
      "County Name": "Williams County",
      "State": "ND",
      "population": 37589
    },
    {
      "countyFIPS": 0,
      "County Name": "Statewide Unallocated",
      "State": "OH",
      "population": 0
    },
    {
      "countyFIPS": 39001,
      "County Name": "Adams County",
      "State": "OH",
      "population": 27698
    },
    {
      "countyFIPS": 39003,
      "County Name": "Allen County",
      "State": "OH",
      "population": 102351
    },
    {
      "countyFIPS": 39005,
      "County Name": "Ashland County",
      "State": "OH",
      "population": 53484
    },
    {
      "countyFIPS": 39007,
      "County Name": "Ashtabula County",
      "State": "OH",
      "population": 97241
    },
    {
      "countyFIPS": 39009,
      "County Name": "Athens County",
      "State": "OH",
      "population": 65327
    },
    {
      "countyFIPS": 39011,
      "County Name": "Auglaize County",
      "State": "OH",
      "population": 45656
    },
    {
      "countyFIPS": 39013,
      "County Name": "Belmont County",
      "State": "OH",
      "population": 67006
    },
    {
      "countyFIPS": 39015,
      "County Name": "Brown County",
      "State": "OH",
      "population": 43432
    },
    {
      "countyFIPS": 39017,
      "County Name": "Butler County",
      "State": "OH",
      "population": 383134
    },
    {
      "countyFIPS": 39019,
      "County Name": "Carroll County",
      "State": "OH",
      "population": 26914
    },
    {
      "countyFIPS": 39021,
      "County Name": "Champaign County",
      "State": "OH",
      "population": 38885
    },
    {
      "countyFIPS": 39023,
      "County Name": "Clark County",
      "State": "OH",
      "population": 134083
    },
    {
      "countyFIPS": 39025,
      "County Name": "Clermont County",
      "State": "OH",
      "population": 206428
    },
    {
      "countyFIPS": 39027,
      "County Name": "Clinton County",
      "State": "OH",
      "population": 41968
    },
    {
      "countyFIPS": 39029,
      "County Name": "Columbiana County",
      "State": "OH",
      "population": 101883
    },
    {
      "countyFIPS": 39031,
      "County Name": "Coshocton County",
      "State": "OH",
      "population": 36600
    },
    {
      "countyFIPS": 39033,
      "County Name": "Crawford County",
      "State": "OH",
      "population": 41494
    },
    {
      "countyFIPS": 39035,
      "County Name": "Cuyahoga County",
      "State": "OH",
      "population": 1235072
    },
    {
      "countyFIPS": 39037,
      "County Name": "Darke County",
      "State": "OH",
      "population": 51113
    },
    {
      "countyFIPS": 39039,
      "County Name": "Defiance County",
      "State": "OH",
      "population": 38087
    },
    {
      "countyFIPS": 39041,
      "County Name": "Delaware County",
      "State": "OH",
      "population": 209177
    },
    {
      "countyFIPS": 39043,
      "County Name": "Erie County",
      "State": "OH",
      "population": 74266
    },
    {
      "countyFIPS": 39045,
      "County Name": "Fairfield County",
      "State": "OH",
      "population": 157574
    },
    {
      "countyFIPS": 39047,
      "County Name": "Fayette County",
      "State": "OH",
      "population": 28525
    },
    {
      "countyFIPS": 39049,
      "County Name": "Franklin County",
      "State": "OH",
      "population": 1316756
    },
    {
      "countyFIPS": 39051,
      "County Name": "Fulton County",
      "State": "OH",
      "population": 42126
    },
    {
      "countyFIPS": 39053,
      "County Name": "Gallia County",
      "State": "OH",
      "population": 29898
    },
    {
      "countyFIPS": 39055,
      "County Name": "Geauga County",
      "State": "OH",
      "population": 93649
    },
    {
      "countyFIPS": 39057,
      "County Name": "Greene County",
      "State": "OH",
      "population": 168937
    },
    {
      "countyFIPS": 39059,
      "County Name": "Guernsey County",
      "State": "OH",
      "population": 38875
    },
    {
      "countyFIPS": 39061,
      "County Name": "Hamilton County",
      "State": "OH",
      "population": 817473
    },
    {
      "countyFIPS": 39063,
      "County Name": "Hancock County",
      "State": "OH",
      "population": 75783
    },
    {
      "countyFIPS": 39065,
      "County Name": "Hardin County",
      "State": "OH",
      "population": 31365
    },
    {
      "countyFIPS": 39067,
      "County Name": "Harrison County",
      "State": "OH",
      "population": 15040
    },
    {
      "countyFIPS": 39069,
      "County Name": "Henry County",
      "State": "OH",
      "population": 27006
    },
    {
      "countyFIPS": 39071,
      "County Name": "Highland County",
      "State": "OH",
      "population": 43161
    },
    {
      "countyFIPS": 39073,
      "County Name": "Hocking County",
      "State": "OH",
      "population": 28264
    },
    {
      "countyFIPS": 39075,
      "County Name": "Holmes County",
      "State": "OH",
      "population": 43960
    },
    {
      "countyFIPS": 39077,
      "County Name": "Huron County",
      "State": "OH",
      "population": 58266
    },
    {
      "countyFIPS": 39079,
      "County Name": "Jackson County",
      "State": "OH",
      "population": 32413
    },
    {
      "countyFIPS": 39081,
      "County Name": "Jefferson County",
      "State": "OH",
      "population": 65325
    },
    {
      "countyFIPS": 39083,
      "County Name": "Knox County",
      "State": "OH",
      "population": 62322
    },
    {
      "countyFIPS": 39085,
      "County Name": "Lake County",
      "State": "OH",
      "population": 230149
    },
    {
      "countyFIPS": 39087,
      "County Name": "Lawrence County",
      "State": "OH",
      "population": 59463
    },
    {
      "countyFIPS": 39089,
      "County Name": "Licking County",
      "State": "OH",
      "population": 176862
    },
    {
      "countyFIPS": 39091,
      "County Name": "Logan County",
      "State": "OH",
      "population": 45672
    },
    {
      "countyFIPS": 39093,
      "County Name": "Lorain County",
      "State": "OH",
      "population": 309833
    },
    {
      "countyFIPS": 39095,
      "County Name": "Lucas County",
      "State": "OH",
      "population": 428348
    },
    {
      "countyFIPS": 39097,
      "County Name": "Madison County",
      "State": "OH",
      "population": 44731
    },
    {
      "countyFIPS": 39099,
      "County Name": "Mahoning County",
      "State": "OH",
      "population": 228683
    },
    {
      "countyFIPS": 39101,
      "County Name": "Marion County",
      "State": "OH",
      "population": 65093
    },
    {
      "countyFIPS": 39103,
      "County Name": "Medina County",
      "State": "OH",
      "population": 179746
    },
    {
      "countyFIPS": 39105,
      "County Name": "Meigs County",
      "State": "OH",
      "population": 22907
    },
    {
      "countyFIPS": 39107,
      "County Name": "Mercer County",
      "State": "OH",
      "population": 41172
    },
    {
      "countyFIPS": 39109,
      "County Name": "Miami County",
      "State": "OH",
      "population": 106987
    },
    {
      "countyFIPS": 39111,
      "County Name": "Monroe County",
      "State": "OH",
      "population": 13654
    },
    {
      "countyFIPS": 39113,
      "County Name": "Montgomery County",
      "State": "OH",
      "population": 531687
    },
    {
      "countyFIPS": 39115,
      "County Name": "Morgan County",
      "State": "OH",
      "population": 14508
    },
    {
      "countyFIPS": 39117,
      "County Name": "Morrow County",
      "State": "OH",
      "population": 35328
    },
    {
      "countyFIPS": 39119,
      "County Name": "Muskingum County",
      "State": "OH",
      "population": 86215
    },
    {
      "countyFIPS": 39121,
      "County Name": "Noble County",
      "State": "OH",
      "population": 14424
    },
    {
      "countyFIPS": 39123,
      "County Name": "Ottawa County",
      "State": "OH",
      "population": 40525
    },
    {
      "countyFIPS": 39125,
      "County Name": "Paulding County",
      "State": "OH",
      "population": 18672
    },
    {
      "countyFIPS": 39127,
      "County Name": "Perry County",
      "State": "OH",
      "population": 36134
    },
    {
      "countyFIPS": 39129,
      "County Name": "Pickaway County",
      "State": "OH",
      "population": 58457
    },
    {
      "countyFIPS": 39131,
      "County Name": "Pike County",
      "State": "OH",
      "population": 27772
    },
    {
      "countyFIPS": 39133,
      "County Name": "Portage County",
      "State": "OH",
      "population": 162466
    },
    {
      "countyFIPS": 39135,
      "County Name": "Preble County",
      "State": "OH",
      "population": 40882
    },
    {
      "countyFIPS": 39137,
      "County Name": "Putnam County",
      "State": "OH",
      "population": 33861
    },
    {
      "countyFIPS": 39139,
      "County Name": "Richland County",
      "State": "OH",
      "population": 121154
    },
    {
      "countyFIPS": 39141,
      "County Name": "Ross County",
      "State": "OH",
      "population": 76666
    },
    {
      "countyFIPS": 39143,
      "County Name": "Sandusky County",
      "State": "OH",
      "population": 58518
    },
    {
      "countyFIPS": 39145,
      "County Name": "Scioto County",
      "State": "OH",
      "population": 75314
    },
    {
      "countyFIPS": 39147,
      "County Name": "Seneca County",
      "State": "OH",
      "population": 55178
    },
    {
      "countyFIPS": 39149,
      "County Name": "Shelby County",
      "State": "OH",
      "population": 48590
    },
    {
      "countyFIPS": 39151,
      "County Name": "Stark County",
      "State": "OH",
      "population": 370606
    },
    {
      "countyFIPS": 39153,
      "County Name": "Summit County",
      "State": "OH",
      "population": 541013
    },
    {
      "countyFIPS": 39155,
      "County Name": "Trumbull County",
      "State": "OH",
      "population": 197974
    },
    {
      "countyFIPS": 39157,
      "County Name": "Tuscarawas County",
      "State": "OH",
      "population": 91987
    },
    {
      "countyFIPS": 39159,
      "County Name": "Union County",
      "State": "OH",
      "population": 58988
    },
    {
      "countyFIPS": 39161,
      "County Name": "Van Wert County",
      "State": "OH",
      "population": 28275
    },
    {
      "countyFIPS": 39163,
      "County Name": "Vinton County",
      "State": "OH",
      "population": 13085
    },
    {
      "countyFIPS": 39165,
      "County Name": "Warren County",
      "State": "OH",
      "population": 234602
    },
    {
      "countyFIPS": 39167,
      "County Name": "Washington County",
      "State": "OH",
      "population": 59911
    },
    {
      "countyFIPS": 39169,
      "County Name": "Wayne County",
      "State": "OH",
      "population": 115710
    },
    {
      "countyFIPS": 39171,
      "County Name": "Williams County",
      "State": "OH",
      "population": 36692
    },
    {
      "countyFIPS": 39173,
      "County Name": "Wood County",
      "State": "OH",
      "population": 130817
    },
    {
      "countyFIPS": 39175,
      "County Name": "Wyandot County",
      "State": "OH",
      "population": 21772
    },
    {
      "countyFIPS": 0,
      "County Name": "Statewide Unallocated",
      "State": "OK",
      "population": 0
    },
    {
      "countyFIPS": 40001,
      "County Name": "Adair County",
      "State": "OK",
      "population": 22194
    },
    {
      "countyFIPS": 40003,
      "County Name": "Alfalfa County",
      "State": "OK",
      "population": 5702
    },
    {
      "countyFIPS": 40005,
      "County Name": "Atoka County",
      "State": "OK",
      "population": 13758
    },
    {
      "countyFIPS": 40007,
      "County Name": "Beaver County",
      "State": "OK",
      "population": 5311
    },
    {
      "countyFIPS": 40009,
      "County Name": "Beckham County",
      "State": "OK",
      "population": 21859
    },
    {
      "countyFIPS": 40011,
      "County Name": "Blaine County",
      "State": "OK",
      "population": 9429
    },
    {
      "countyFIPS": 40013,
      "County Name": "Bryan County",
      "State": "OK",
      "population": 47995
    },
    {
      "countyFIPS": 40015,
      "County Name": "Caddo County",
      "State": "OK",
      "population": 28762
    },
    {
      "countyFIPS": 40017,
      "County Name": "Canadian County",
      "State": "OK",
      "population": 148306
    },
    {
      "countyFIPS": 40019,
      "County Name": "Carter County",
      "State": "OK",
      "population": 48111
    },
    {
      "countyFIPS": 40021,
      "County Name": "Cherokee County",
      "State": "OK",
      "population": 48657
    },
    {
      "countyFIPS": 40023,
      "County Name": "Choctaw County",
      "State": "OK",
      "population": 14672
    },
    {
      "countyFIPS": 40025,
      "County Name": "Cimarron County",
      "State": "OK",
      "population": 2137
    },
    {
      "countyFIPS": 40027,
      "County Name": "Cleveland County",
      "State": "OK",
      "population": 284014
    },
    {
      "countyFIPS": 40029,
      "County Name": "Coal County",
      "State": "OK",
      "population": 5495
    },
    {
      "countyFIPS": 40031,
      "County Name": "Comanche County",
      "State": "OK",
      "population": 120749
    },
    {
      "countyFIPS": 40033,
      "County Name": "Cotton County",
      "State": "OK",
      "population": 5666
    },
    {
      "countyFIPS": 40035,
      "County Name": "Craig County",
      "State": "OK",
      "population": 14142
    },
    {
      "countyFIPS": 40037,
      "County Name": "Creek County",
      "State": "OK",
      "population": 71522
    },
    {
      "countyFIPS": 40039,
      "County Name": "Custer County",
      "State": "OK",
      "population": 29003
    },
    {
      "countyFIPS": 40041,
      "County Name": "Delaware County",
      "State": "OK",
      "population": 43009
    },
    {
      "countyFIPS": 40043,
      "County Name": "Dewey County",
      "State": "OK",
      "population": 4891
    },
    {
      "countyFIPS": 40045,
      "County Name": "Ellis County",
      "State": "OK",
      "population": 3859
    },
    {
      "countyFIPS": 40047,
      "County Name": "Garfield County",
      "State": "OK",
      "population": 61056
    },
    {
      "countyFIPS": 40049,
      "County Name": "Garvin County",
      "State": "OK",
      "population": 27711
    },
    {
      "countyFIPS": 40051,
      "County Name": "Grady County",
      "State": "OK",
      "population": 55834
    },
    {
      "countyFIPS": 40053,
      "County Name": "Grant County",
      "State": "OK",
      "population": 4333
    },
    {
      "countyFIPS": 40055,
      "County Name": "Greer County",
      "State": "OK",
      "population": 5712
    },
    {
      "countyFIPS": 40057,
      "County Name": "Harmon County",
      "State": "OK",
      "population": 2653
    },
    {
      "countyFIPS": 40059,
      "County Name": "Harper County",
      "State": "OK",
      "population": 3688
    },
    {
      "countyFIPS": 40061,
      "County Name": "Haskell County",
      "State": "OK",
      "population": 12627
    },
    {
      "countyFIPS": 40063,
      "County Name": "Hughes County",
      "State": "OK",
      "population": 13279
    },
    {
      "countyFIPS": 40065,
      "County Name": "Jackson County",
      "State": "OK",
      "population": 24530
    },
    {
      "countyFIPS": 40067,
      "County Name": "Jefferson County",
      "State": "OK",
      "population": 6002
    },
    {
      "countyFIPS": 40069,
      "County Name": "Johnston County",
      "State": "OK",
      "population": 11085
    },
    {
      "countyFIPS": 40071,
      "County Name": "Kay County",
      "State": "OK",
      "population": 43538
    },
    {
      "countyFIPS": 40073,
      "County Name": "Kingfisher County",
      "State": "OK",
      "population": 15765
    },
    {
      "countyFIPS": 40075,
      "County Name": "Kiowa County",
      "State": "OK",
      "population": 8708
    },
    {
      "countyFIPS": 40077,
      "County Name": "Latimer County",
      "State": "OK",
      "population": 10073
    },
    {
      "countyFIPS": 40079,
      "County Name": "Le Flore County",
      "State": "OK",
      "population": 49853
    },
    {
      "countyFIPS": 40081,
      "County Name": "Lincoln County",
      "State": "OK",
      "population": 34877
    },
    {
      "countyFIPS": 40083,
      "County Name": "Logan County",
      "State": "OK",
      "population": 48011
    },
    {
      "countyFIPS": 40085,
      "County Name": "Love County",
      "State": "OK",
      "population": 10253
    },
    {
      "countyFIPS": 40087,
      "County Name": "McClain County",
      "State": "OK",
      "population": 40474
    },
    {
      "countyFIPS": 40089,
      "County Name": "McCurtain County",
      "State": "OK",
      "population": 32832
    },
    {
      "countyFIPS": 40091,
      "County Name": "McIntosh County",
      "State": "OK",
      "population": 19596
    },
    {
      "countyFIPS": 40093,
      "County Name": "Major County",
      "State": "OK",
      "population": 7629
    },
    {
      "countyFIPS": 40095,
      "County Name": "Marshall County",
      "State": "OK",
      "population": 16931
    },
    {
      "countyFIPS": 40097,
      "County Name": "Mayes County",
      "State": "OK",
      "population": 41100
    },
    {
      "countyFIPS": 40099,
      "County Name": "Murray County",
      "State": "OK",
      "population": 14073
    },
    {
      "countyFIPS": 40101,
      "County Name": "Muskogee County",
      "State": "OK",
      "population": 67997
    },
    {
      "countyFIPS": 40103,
      "County Name": "Noble County",
      "State": "OK",
      "population": 11131
    },
    {
      "countyFIPS": 40105,
      "County Name": "Nowata County",
      "State": "OK",
      "population": 10076
    },
    {
      "countyFIPS": 40107,
      "County Name": "Okfuskee County",
      "State": "OK",
      "population": 11993
    },
    {
      "countyFIPS": 40109,
      "County Name": "Oklahoma County",
      "State": "OK",
      "population": 797434
    },
    {
      "countyFIPS": 40111,
      "County Name": "Okmulgee County",
      "State": "OK",
      "population": 38465
    },
    {
      "countyFIPS": 40113,
      "County Name": "Osage County",
      "State": "OK",
      "population": 46963
    },
    {
      "countyFIPS": 40115,
      "County Name": "Ottawa County",
      "State": "OK",
      "population": 31127
    },
    {
      "countyFIPS": 40117,
      "County Name": "Pawnee County",
      "State": "OK",
      "population": 16376
    },
    {
      "countyFIPS": 40119,
      "County Name": "Payne County",
      "State": "OK",
      "population": 81784
    },
    {
      "countyFIPS": 40121,
      "County Name": "Pittsburg County",
      "State": "OK",
      "population": 43654
    },
    {
      "countyFIPS": 40123,
      "County Name": "Pontotoc County",
      "State": "OK",
      "population": 38284
    },
    {
      "countyFIPS": 40125,
      "County Name": "Pottawatomie County",
      "State": "OK",
      "population": 72592
    },
    {
      "countyFIPS": 40127,
      "County Name": "Pushmataha County",
      "State": "OK",
      "population": 11096
    },
    {
      "countyFIPS": 40129,
      "County Name": "Roger Mills County",
      "State": "OK",
      "population": 3583
    },
    {
      "countyFIPS": 40131,
      "County Name": "Rogers County",
      "State": "OK",
      "population": 92459
    },
    {
      "countyFIPS": 40133,
      "County Name": "Seminole County",
      "State": "OK",
      "population": 24258
    },
    {
      "countyFIPS": 40135,
      "County Name": "Sequoyah County",
      "State": "OK",
      "population": 41569
    },
    {
      "countyFIPS": 40137,
      "County Name": "Stephens County",
      "State": "OK",
      "population": 43143
    },
    {
      "countyFIPS": 40139,
      "County Name": "Texas County",
      "State": "OK",
      "population": 19983
    },
    {
      "countyFIPS": 40141,
      "County Name": "Tillman County",
      "State": "OK",
      "population": 7250
    },
    {
      "countyFIPS": 40143,
      "County Name": "Tulsa County",
      "State": "OK",
      "population": 651552
    },
    {
      "countyFIPS": 40145,
      "County Name": "Wagoner County",
      "State": "OK",
      "population": 81289
    },
    {
      "countyFIPS": 40147,
      "County Name": "Washington County",
      "State": "OK",
      "population": 51527
    },
    {
      "countyFIPS": 40149,
      "County Name": "Washita County",
      "State": "OK",
      "population": 10916
    },
    {
      "countyFIPS": 40151,
      "County Name": "Woods County",
      "State": "OK",
      "population": 8793
    },
    {
      "countyFIPS": 40153,
      "County Name": "Woodward County",
      "State": "OK",
      "population": 20211
    },
    {
      "countyFIPS": 0,
      "County Name": "Statewide Unallocated",
      "State": "OR",
      "population": 0
    },
    {
      "countyFIPS": 41001,
      "County Name": "Baker County",
      "State": "OR",
      "population": 16124
    },
    {
      "countyFIPS": 41003,
      "County Name": "Benton County",
      "State": "OR",
      "population": 93053
    },
    {
      "countyFIPS": 41005,
      "County Name": "Clackamas County",
      "State": "OR",
      "population": 418187
    },
    {
      "countyFIPS": 41007,
      "County Name": "Clatsop County",
      "State": "OR",
      "population": 40224
    },
    {
      "countyFIPS": 41009,
      "County Name": "Columbia County",
      "State": "OR",
      "population": 52354
    },
    {
      "countyFIPS": 41011,
      "County Name": "Coos County",
      "State": "OR",
      "population": 64487
    },
    {
      "countyFIPS": 41013,
      "County Name": "Crook County",
      "State": "OR",
      "population": 24404
    },
    {
      "countyFIPS": 41015,
      "County Name": "Curry County",
      "State": "OR",
      "population": 22925
    },
    {
      "countyFIPS": 41017,
      "County Name": "Deschutes County",
      "State": "OR",
      "population": 197692
    },
    {
      "countyFIPS": 41019,
      "County Name": "Douglas County",
      "State": "OR",
      "population": 110980
    },
    {
      "countyFIPS": 41021,
      "County Name": "Gilliam County",
      "State": "OR",
      "population": 1912
    },
    {
      "countyFIPS": 41023,
      "County Name": "Grant County",
      "State": "OR",
      "population": 7199
    },
    {
      "countyFIPS": 41025,
      "County Name": "Harney County",
      "State": "OR",
      "population": 7393
    },
    {
      "countyFIPS": 41027,
      "County Name": "Hood River County",
      "State": "OR",
      "population": 23382
    },
    {
      "countyFIPS": 41029,
      "County Name": "Jackson County",
      "State": "OR",
      "population": 220944
    },
    {
      "countyFIPS": 41031,
      "County Name": "Jefferson County",
      "State": "OR",
      "population": 24658
    },
    {
      "countyFIPS": 41033,
      "County Name": "Josephine County",
      "State": "OR",
      "population": 87487
    },
    {
      "countyFIPS": 41035,
      "County Name": "Klamath County",
      "State": "OR",
      "population": 68238
    },
    {
      "countyFIPS": 41037,
      "County Name": "Lake County",
      "State": "OR",
      "population": 7869
    },
    {
      "countyFIPS": 41039,
      "County Name": "Lane County",
      "State": "OR",
      "population": 382067
    },
    {
      "countyFIPS": 41041,
      "County Name": "Lincoln County",
      "State": "OR",
      "population": 49962
    },
    {
      "countyFIPS": 41043,
      "County Name": "Linn County",
      "State": "OR",
      "population": 129749
    },
    {
      "countyFIPS": 41045,
      "County Name": "Malheur County",
      "State": "OR",
      "population": 30571
    },
    {
      "countyFIPS": 41047,
      "County Name": "Marion County",
      "State": "OR",
      "population": 347818
    },
    {
      "countyFIPS": 41049,
      "County Name": "Morrow County",
      "State": "OR",
      "population": 11603
    },
    {
      "countyFIPS": 41051,
      "County Name": "Multnomah County",
      "State": "OR",
      "population": 812855
    },
    {
      "countyFIPS": 41053,
      "County Name": "Polk County",
      "State": "OR",
      "population": 86085
    },
    {
      "countyFIPS": 41055,
      "County Name": "Sherman County",
      "State": "OR",
      "population": 1780
    },
    {
      "countyFIPS": 41057,
      "County Name": "Tillamook County",
      "State": "OR",
      "population": 27036
    },
    {
      "countyFIPS": 41059,
      "County Name": "Umatilla County",
      "State": "OR",
      "population": 77950
    },
    {
      "countyFIPS": 41061,
      "County Name": "Union County",
      "State": "OR",
      "population": 26835
    },
    {
      "countyFIPS": 41063,
      "County Name": "Wallowa County",
      "State": "OR",
      "population": 7208
    },
    {
      "countyFIPS": 41065,
      "County Name": "Wasco County",
      "State": "OR",
      "population": 26682
    },
    {
      "countyFIPS": 41067,
      "County Name": "Washington County",
      "State": "OR",
      "population": 601592
    },
    {
      "countyFIPS": 41069,
      "County Name": "Wheeler County",
      "State": "OR",
      "population": 1332
    },
    {
      "countyFIPS": 41071,
      "County Name": "Yamhill County",
      "State": "OR",
      "population": 107100
    },
    {
      "countyFIPS": 0,
      "County Name": "Statewide Unallocated",
      "State": "PA",
      "population": 0
    },
    {
      "countyFIPS": 42001,
      "County Name": "Adams County",
      "State": "PA",
      "population": 103009
    },
    {
      "countyFIPS": 42003,
      "County Name": "Allegheny County",
      "State": "PA",
      "population": 1216045
    },
    {
      "countyFIPS": 42005,
      "County Name": "Armstrong County",
      "State": "PA",
      "population": 64735
    },
    {
      "countyFIPS": 42007,
      "County Name": "Beaver County",
      "State": "PA",
      "population": 163929
    },
    {
      "countyFIPS": 42009,
      "County Name": "Bedford County",
      "State": "PA",
      "population": 47888
    },
    {
      "countyFIPS": 42011,
      "County Name": "Berks County",
      "State": "PA",
      "population": 421164
    },
    {
      "countyFIPS": 42013,
      "County Name": "Blair County",
      "State": "PA",
      "population": 121829
    },
    {
      "countyFIPS": 42015,
      "County Name": "Bradford County",
      "State": "PA",
      "population": 60323
    },
    {
      "countyFIPS": 42017,
      "County Name": "Bucks County",
      "State": "PA",
      "population": 628270
    },
    {
      "countyFIPS": 42019,
      "County Name": "Butler County",
      "State": "PA",
      "population": 187853
    },
    {
      "countyFIPS": 42021,
      "County Name": "Cambria County",
      "State": "PA",
      "population": 130192
    },
    {
      "countyFIPS": 42023,
      "County Name": "Cameron County",
      "State": "PA",
      "population": 4447
    },
    {
      "countyFIPS": 42025,
      "County Name": "Carbon County",
      "State": "PA",
      "population": 64182
    },
    {
      "countyFIPS": 42027,
      "County Name": "Centre County",
      "State": "PA",
      "population": 162385
    },
    {
      "countyFIPS": 42029,
      "County Name": "Chester County",
      "State": "PA",
      "population": 524989
    },
    {
      "countyFIPS": 42031,
      "County Name": "Clarion County",
      "State": "PA",
      "population": 38438
    },
    {
      "countyFIPS": 42033,
      "County Name": "Clearfield County",
      "State": "PA",
      "population": 79255
    },
    {
      "countyFIPS": 42035,
      "County Name": "Clinton County",
      "State": "PA",
      "population": 38632
    },
    {
      "countyFIPS": 42037,
      "County Name": "Columbia County",
      "State": "PA",
      "population": 64964
    },
    {
      "countyFIPS": 42039,
      "County Name": "Crawford County",
      "State": "PA",
      "population": 84629
    },
    {
      "countyFIPS": 42041,
      "County Name": "Cumberland County",
      "State": "PA",
      "population": 253370
    },
    {
      "countyFIPS": 42043,
      "County Name": "Dauphin County",
      "State": "PA",
      "population": 278299
    },
    {
      "countyFIPS": 42045,
      "County Name": "Delaware County",
      "State": "PA",
      "population": 566747
    },
    {
      "countyFIPS": 42047,
      "County Name": "Elk County",
      "State": "PA",
      "population": 29910
    },
    {
      "countyFIPS": 42049,
      "County Name": "Erie County",
      "State": "PA",
      "population": 269728
    },
    {
      "countyFIPS": 42051,
      "County Name": "Fayette County",
      "State": "PA",
      "population": 129274
    },
    {
      "countyFIPS": 42053,
      "County Name": "Forest County",
      "State": "PA",
      "population": 7247
    },
    {
      "countyFIPS": 42055,
      "County Name": "Franklin County",
      "State": "PA",
      "population": 155027
    },
    {
      "countyFIPS": 42057,
      "County Name": "Fulton County",
      "State": "PA",
      "population": 14530
    },
    {
      "countyFIPS": 42059,
      "County Name": "Greene County",
      "State": "PA",
      "population": 36233
    },
    {
      "countyFIPS": 42061,
      "County Name": "Huntingdon County",
      "State": "PA",
      "population": 45144
    },
    {
      "countyFIPS": 42063,
      "County Name": "Indiana County",
      "State": "PA",
      "population": 84073
    },
    {
      "countyFIPS": 42065,
      "County Name": "Jefferson County",
      "State": "PA",
      "population": 43425
    },
    {
      "countyFIPS": 42067,
      "County Name": "Juniata County",
      "State": "PA",
      "population": 24763
    },
    {
      "countyFIPS": 42069,
      "County Name": "Lackawanna County",
      "State": "PA",
      "population": 209674
    },
    {
      "countyFIPS": 42071,
      "County Name": "Lancaster County",
      "State": "PA",
      "population": 545724
    },
    {
      "countyFIPS": 42073,
      "County Name": "Lawrence County",
      "State": "PA",
      "population": 85512
    },
    {
      "countyFIPS": 42075,
      "County Name": "Lebanon County",
      "State": "PA",
      "population": 141793
    },
    {
      "countyFIPS": 42077,
      "County Name": "Lehigh County",
      "State": "PA",
      "population": 369318
    },
    {
      "countyFIPS": 42079,
      "County Name": "Luzerne County",
      "State": "PA",
      "population": 317417
    },
    {
      "countyFIPS": 42081,
      "County Name": "Lycoming County",
      "State": "PA",
      "population": 113299
    },
    {
      "countyFIPS": 42083,
      "County Name": "McKean County",
      "State": "PA",
      "population": 40625
    },
    {
      "countyFIPS": 42085,
      "County Name": "Mercer County",
      "State": "PA",
      "population": 109424
    },
    {
      "countyFIPS": 42087,
      "County Name": "Mifflin County",
      "State": "PA",
      "population": 46138
    },
    {
      "countyFIPS": 42089,
      "County Name": "Monroe County",
      "State": "PA",
      "population": 170271
    },
    {
      "countyFIPS": 42091,
      "County Name": "Montgomery County",
      "State": "PA",
      "population": 830915
    },
    {
      "countyFIPS": 42093,
      "County Name": "Montour County",
      "State": "PA",
      "population": 18230
    },
    {
      "countyFIPS": 42095,
      "County Name": "Northampton County",
      "State": "PA",
      "population": 305285
    },
    {
      "countyFIPS": 42097,
      "County Name": "Northumberland County",
      "State": "PA",
      "population": 90843
    },
    {
      "countyFIPS": 42099,
      "County Name": "Perry County",
      "State": "PA",
      "population": 46272
    },
    {
      "countyFIPS": 42101,
      "County Name": "Philadelphia County",
      "State": "PA",
      "population": 1584064
    },
    {
      "countyFIPS": 42103,
      "County Name": "Pike County",
      "State": "PA",
      "population": 55809
    },
    {
      "countyFIPS": 42105,
      "County Name": "Potter County",
      "State": "PA",
      "population": 16526
    },
    {
      "countyFIPS": 42107,
      "County Name": "Schuylkill County",
      "State": "PA",
      "population": 141359
    },
    {
      "countyFIPS": 42109,
      "County Name": "Snyder County",
      "State": "PA",
      "population": 40372
    },
    {
      "countyFIPS": 42111,
      "County Name": "Somerset County",
      "State": "PA",
      "population": 73447
    },
    {
      "countyFIPS": 42113,
      "County Name": "Sullivan County",
      "State": "PA",
      "population": 6066
    },
    {
      "countyFIPS": 42115,
      "County Name": "Susquehanna County",
      "State": "PA",
      "population": 40328
    },
    {
      "countyFIPS": 42117,
      "County Name": "Tioga County",
      "State": "PA",
      "population": 40591
    },
    {
      "countyFIPS": 42119,
      "County Name": "Union County",
      "State": "PA",
      "population": 44923
    },
    {
      "countyFIPS": 42121,
      "County Name": "Venango County",
      "State": "PA",
      "population": 50668
    },
    {
      "countyFIPS": 42123,
      "County Name": "Warren County",
      "State": "PA",
      "population": 39191
    },
    {
      "countyFIPS": 42125,
      "County Name": "Washington County",
      "State": "PA",
      "population": 206865
    },
    {
      "countyFIPS": 42127,
      "County Name": "Wayne County",
      "State": "PA",
      "population": 51361
    },
    {
      "countyFIPS": 42129,
      "County Name": "Westmoreland County",
      "State": "PA",
      "population": 348899
    },
    {
      "countyFIPS": 42131,
      "County Name": "Wyoming County",
      "State": "PA",
      "population": 26794
    },
    {
      "countyFIPS": 42133,
      "County Name": "York County",
      "State": "PA",
      "population": 449058
    },
    {
      "countyFIPS": 0,
      "County Name": "Statewide Unallocated",
      "State": "RI",
      "population": 0
    },
    {
      "countyFIPS": 44001,
      "County Name": "Bristol County",
      "State": "RI",
      "population": 48479
    },
    {
      "countyFIPS": 44003,
      "County Name": "Kent County",
      "State": "RI",
      "population": 164292
    },
    {
      "countyFIPS": 44005,
      "County Name": "Newport County",
      "State": "RI",
      "population": 82082
    },
    {
      "countyFIPS": 44007,
      "County Name": "Providence County",
      "State": "RI",
      "population": 638931
    },
    {
      "countyFIPS": 44009,
      "County Name": "Washington County",
      "State": "RI",
      "population": 125577
    },
    {
      "countyFIPS": 0,
      "County Name": "Statewide Unallocated",
      "State": "SC",
      "population": 0
    },
    {
      "countyFIPS": 45001,
      "County Name": "Abbeville County",
      "State": "SC",
      "population": 24527
    },
    {
      "countyFIPS": 45003,
      "County Name": "Aiken County",
      "State": "SC",
      "population": 170872
    },
    {
      "countyFIPS": 45005,
      "County Name": "Allendale County",
      "State": "SC",
      "population": 8688
    },
    {
      "countyFIPS": 45007,
      "County Name": "Anderson County",
      "State": "SC",
      "population": 202558
    },
    {
      "countyFIPS": 45009,
      "County Name": "Bamberg County",
      "State": "SC",
      "population": 14066
    },
    {
      "countyFIPS": 45011,
      "County Name": "Barnwell County",
      "State": "SC",
      "population": 20866
    },
    {
      "countyFIPS": 45013,
      "County Name": "Beaufort County",
      "State": "SC",
      "population": 192122
    },
    {
      "countyFIPS": 45015,
      "County Name": "Berkeley County",
      "State": "SC",
      "population": 227907
    },
    {
      "countyFIPS": 45017,
      "County Name": "Calhoun County",
      "State": "SC",
      "population": 14553
    },
    {
      "countyFIPS": 45019,
      "County Name": "Charleston County",
      "State": "SC",
      "population": 411406
    },
    {
      "countyFIPS": 45021,
      "County Name": "Cherokee County",
      "State": "SC",
      "population": 57300
    },
    {
      "countyFIPS": 45023,
      "County Name": "Chester County",
      "State": "SC",
      "population": 32244
    },
    {
      "countyFIPS": 45025,
      "County Name": "Chesterfield County",
      "State": "SC",
      "population": 45650
    },
    {
      "countyFIPS": 45027,
      "County Name": "Clarendon County",
      "State": "SC",
      "population": 33745
    },
    {
      "countyFIPS": 45029,
      "County Name": "Colleton County",
      "State": "SC",
      "population": 37677
    },
    {
      "countyFIPS": 45031,
      "County Name": "Darlington County",
      "State": "SC",
      "population": 66618
    },
    {
      "countyFIPS": 45033,
      "County Name": "Dillon County",
      "State": "SC",
      "population": 30479
    },
    {
      "countyFIPS": 45035,
      "County Name": "Dorchester County",
      "State": "SC",
      "population": 162809
    },
    {
      "countyFIPS": 45037,
      "County Name": "Edgefield County",
      "State": "SC",
      "population": 27260
    },
    {
      "countyFIPS": 45039,
      "County Name": "Fairfield County",
      "State": "SC",
      "population": 22347
    },
    {
      "countyFIPS": 45041,
      "County Name": "Florence County",
      "State": "SC",
      "population": 138293
    },
    {
      "countyFIPS": 45043,
      "County Name": "Georgetown County",
      "State": "SC",
      "population": 62680
    },
    {
      "countyFIPS": 45045,
      "County Name": "Greenville County",
      "State": "SC",
      "population": 523542
    },
    {
      "countyFIPS": 45047,
      "County Name": "Greenwood County",
      "State": "SC",
      "population": 70811
    },
    {
      "countyFIPS": 45049,
      "County Name": "Hampton County",
      "State": "SC",
      "population": 19222
    },
    {
      "countyFIPS": 45051,
      "County Name": "Horry County",
      "State": "SC",
      "population": 354081
    },
    {
      "countyFIPS": 45053,
      "County Name": "Jasper County",
      "State": "SC",
      "population": 30073
    },
    {
      "countyFIPS": 45055,
      "County Name": "Kershaw County",
      "State": "SC",
      "population": 66551
    },
    {
      "countyFIPS": 45057,
      "County Name": "Lancaster County",
      "State": "SC",
      "population": 98012
    },
    {
      "countyFIPS": 45059,
      "County Name": "Laurens County",
      "State": "SC",
      "population": 67493
    },
    {
      "countyFIPS": 45061,
      "County Name": "Lee County",
      "State": "SC",
      "population": 16828
    },
    {
      "countyFIPS": 45063,
      "County Name": "Lexington County",
      "State": "SC",
      "population": 298750
    },
    {
      "countyFIPS": 45065,
      "County Name": "McCormick County",
      "State": "SC",
      "population": 9463
    },
    {
      "countyFIPS": 45067,
      "County Name": "Marion County",
      "State": "SC",
      "population": 30657
    },
    {
      "countyFIPS": 45069,
      "County Name": "Marlboro County",
      "State": "SC",
      "population": 26118
    },
    {
      "countyFIPS": 45071,
      "County Name": "Newberry County",
      "State": "SC",
      "population": 38440
    },
    {
      "countyFIPS": 45073,
      "County Name": "Oconee County",
      "State": "SC",
      "population": 79546
    },
    {
      "countyFIPS": 45075,
      "County Name": "Orangeburg County",
      "State": "SC",
      "population": 86175
    },
    {
      "countyFIPS": 45077,
      "County Name": "Pickens County",
      "State": "SC",
      "population": 126884
    },
    {
      "countyFIPS": 45079,
      "County Name": "Richland County",
      "State": "SC",
      "population": 415759
    },
    {
      "countyFIPS": 45081,
      "County Name": "Saluda County",
      "State": "SC",
      "population": 20473
    },
    {
      "countyFIPS": 45083,
      "County Name": "Spartanburg County",
      "State": "SC",
      "population": 319785
    },
    {
      "countyFIPS": 45085,
      "County Name": "Sumter County",
      "State": "SC",
      "population": 106721
    },
    {
      "countyFIPS": 45087,
      "County Name": "Union County",
      "State": "SC",
      "population": 27316
    },
    {
      "countyFIPS": 45089,
      "County Name": "Williamsburg County",
      "State": "SC",
      "population": 30368
    },
    {
      "countyFIPS": 45091,
      "County Name": "York County",
      "State": "SC",
      "population": 280979
    },
    {
      "countyFIPS": 0,
      "County Name": "Statewide Unallocated",
      "State": "SD",
      "population": 0
    },
    {
      "countyFIPS": 46003,
      "County Name": "Aurora County",
      "State": "SD",
      "population": 2751
    },
    {
      "countyFIPS": 46005,
      "County Name": "Beadle County",
      "State": "SD",
      "population": 18453
    },
    {
      "countyFIPS": 46007,
      "County Name": "Bennett County",
      "State": "SD",
      "population": 3365
    },
    {
      "countyFIPS": 46009,
      "County Name": "Bon Homme County",
      "State": "SD",
      "population": 6901
    },
    {
      "countyFIPS": 46011,
      "County Name": "Brookings County",
      "State": "SD",
      "population": 35077
    },
    {
      "countyFIPS": 46013,
      "County Name": "Brown County",
      "State": "SD",
      "population": 38839
    },
    {
      "countyFIPS": 46015,
      "County Name": "Brule County",
      "State": "SD",
      "population": 5297
    },
    {
      "countyFIPS": 46017,
      "County Name": "Buffalo County",
      "State": "SD",
      "population": 1962
    },
    {
      "countyFIPS": 46019,
      "County Name": "Butte County",
      "State": "SD",
      "population": 10429
    },
    {
      "countyFIPS": 46021,
      "County Name": "Campbell County",
      "State": "SD",
      "population": 1376
    },
    {
      "countyFIPS": 46023,
      "County Name": "Charles Mix County",
      "State": "SD",
      "population": 9292
    },
    {
      "countyFIPS": 46025,
      "County Name": "Clark County",
      "State": "SD",
      "population": 3736
    },
    {
      "countyFIPS": 46027,
      "County Name": "Clay County",
      "State": "SD",
      "population": 14070
    },
    {
      "countyFIPS": 46029,
      "County Name": "Codington County",
      "State": "SD",
      "population": 28009
    },
    {
      "countyFIPS": 46031,
      "County Name": "Corson County",
      "State": "SD",
      "population": 4086
    },
    {
      "countyFIPS": 46033,
      "County Name": "Custer County",
      "State": "SD",
      "population": 8972
    },
    {
      "countyFIPS": 46035,
      "County Name": "Davison County",
      "State": "SD",
      "population": 19775
    },
    {
      "countyFIPS": 46037,
      "County Name": "Day County",
      "State": "SD",
      "population": 5424
    },
    {
      "countyFIPS": 46039,
      "County Name": "Deuel County",
      "State": "SD",
      "population": 4351
    },
    {
      "countyFIPS": 46041,
      "County Name": "Dewey County",
      "State": "SD",
      "population": 5892
    },
    {
      "countyFIPS": 46043,
      "County Name": "Douglas County",
      "State": "SD",
      "population": 2921
    },
    {
      "countyFIPS": 46045,
      "County Name": "Edmunds County",
      "State": "SD",
      "population": 3829
    },
    {
      "countyFIPS": 46047,
      "County Name": "Fall River County",
      "State": "SD",
      "population": 6713
    },
    {
      "countyFIPS": 46049,
      "County Name": "Faulk County",
      "State": "SD",
      "population": 2299
    },
    {
      "countyFIPS": 46051,
      "County Name": "Grant County",
      "State": "SD",
      "population": 7052
    },
    {
      "countyFIPS": 46053,
      "County Name": "Gregory County",
      "State": "SD",
      "population": 4185
    },
    {
      "countyFIPS": 46055,
      "County Name": "Haakon County",
      "State": "SD",
      "population": 1899
    },
    {
      "countyFIPS": 46057,
      "County Name": "Hamlin County",
      "State": "SD",
      "population": 6164
    },
    {
      "countyFIPS": 46059,
      "County Name": "Hand County",
      "State": "SD",
      "population": 3191
    },
    {
      "countyFIPS": 46061,
      "County Name": "Hanson County",
      "State": "SD",
      "population": 3453
    },
    {
      "countyFIPS": 46063,
      "County Name": "Harding County",
      "State": "SD",
      "population": 1298
    },
    {
      "countyFIPS": 46065,
      "County Name": "Hughes County",
      "State": "SD",
      "population": 17526
    },
    {
      "countyFIPS": 46067,
      "County Name": "Hutchinson County",
      "State": "SD",
      "population": 7291
    },
    {
      "countyFIPS": 46069,
      "County Name": "Hyde County",
      "State": "SD",
      "population": 1301
    },
    {
      "countyFIPS": 46071,
      "County Name": "Jackson County",
      "State": "SD",
      "population": 3344
    },
    {
      "countyFIPS": 46073,
      "County Name": "Jerauld County",
      "State": "SD",
      "population": 2013
    },
    {
      "countyFIPS": 46075,
      "County Name": "Jones County",
      "State": "SD",
      "population": 903
    },
    {
      "countyFIPS": 46077,
      "County Name": "Kingsbury County",
      "State": "SD",
      "population": 4939
    },
    {
      "countyFIPS": 46079,
      "County Name": "Lake County",
      "State": "SD",
      "population": 12797
    },
    {
      "countyFIPS": 46081,
      "County Name": "Lawrence County",
      "State": "SD",
      "population": 25844
    },
    {
      "countyFIPS": 46083,
      "County Name": "Lincoln County",
      "State": "SD",
      "population": 61128
    },
    {
      "countyFIPS": 46085,
      "County Name": "Lyman County",
      "State": "SD",
      "population": 3781
    },
    {
      "countyFIPS": 46087,
      "County Name": "McCook County",
      "State": "SD",
      "population": 5586
    },
    {
      "countyFIPS": 46089,
      "County Name": "McPherson County",
      "State": "SD",
      "population": 2379
    },
    {
      "countyFIPS": 46091,
      "County Name": "Marshall County",
      "State": "SD",
      "population": 4935
    },
    {
      "countyFIPS": 46093,
      "County Name": "Meade County",
      "State": "SD",
      "population": 28332
    },
    {
      "countyFIPS": 46095,
      "County Name": "Mellette County",
      "State": "SD",
      "population": 2061
    },
    {
      "countyFIPS": 46097,
      "County Name": "Miner County",
      "State": "SD",
      "population": 2216
    },
    {
      "countyFIPS": 46099,
      "County Name": "Minnehaha County",
      "State": "SD",
      "population": 193134
    },
    {
      "countyFIPS": 46101,
      "County Name": "Moody County",
      "State": "SD",
      "population": 6576
    },
    {
      "countyFIPS": 46102,
      "County Name": "Oglala Lakota County",
      "State": "SD",
      "population": 14177
    },
    {
      "countyFIPS": 46103,
      "County Name": "Pennington County",
      "State": "SD",
      "population": 113775
    },
    {
      "countyFIPS": 46105,
      "County Name": "Perkins County",
      "State": "SD",
      "population": 2865
    },
    {
      "countyFIPS": 46107,
      "County Name": "Potter County",
      "State": "SD",
      "population": 2153
    },
    {
      "countyFIPS": 46109,
      "County Name": "Roberts County",
      "State": "SD",
      "population": 10394
    },
    {
      "countyFIPS": 46111,
      "County Name": "Sanborn County",
      "State": "SD",
      "population": 2344
    },
    {
      "countyFIPS": 46115,
      "County Name": "Spink County",
      "State": "SD",
      "population": 6376
    },
    {
      "countyFIPS": 46117,
      "County Name": "Stanley County",
      "State": "SD",
      "population": 3098
    },
    {
      "countyFIPS": 46119,
      "County Name": "Sully County",
      "State": "SD",
      "population": 1391
    },
    {
      "countyFIPS": 46121,
      "County Name": "Todd County",
      "State": "SD",
      "population": 10177
    },
    {
      "countyFIPS": 46123,
      "County Name": "Tripp County",
      "State": "SD",
      "population": 5441
    },
    {
      "countyFIPS": 46125,
      "County Name": "Turner County",
      "State": "SD",
      "population": 8384
    },
    {
      "countyFIPS": 46127,
      "County Name": "Union County",
      "State": "SD",
      "population": 15932
    },
    {
      "countyFIPS": 46129,
      "County Name": "Walworth County",
      "State": "SD",
      "population": 5435
    },
    {
      "countyFIPS": 46135,
      "County Name": "Yankton County",
      "State": "SD",
      "population": 22814
    },
    {
      "countyFIPS": 46137,
      "County Name": "Ziebach County",
      "State": "SD",
      "population": 2756
    },
    {
      "countyFIPS": 0,
      "County Name": "Statewide Unallocated",
      "State": "TN",
      "population": 0
    },
    {
      "countyFIPS": 47001,
      "County Name": "Anderson County",
      "State": "TN",
      "population": 76978
    },
    {
      "countyFIPS": 47003,
      "County Name": "Bedford County",
      "State": "TN",
      "population": 49713
    },
    {
      "countyFIPS": 47005,
      "County Name": "Benton County",
      "State": "TN",
      "population": 16160
    },
    {
      "countyFIPS": 47007,
      "County Name": "Bledsoe County",
      "State": "TN",
      "population": 15064
    },
    {
      "countyFIPS": 47009,
      "County Name": "Blount County",
      "State": "TN",
      "population": 133088
    },
    {
      "countyFIPS": 47011,
      "County Name": "Bradley County",
      "State": "TN",
      "population": 108110
    },
    {
      "countyFIPS": 47013,
      "County Name": "Campbell County",
      "State": "TN",
      "population": 39842
    },
    {
      "countyFIPS": 47015,
      "County Name": "Cannon County",
      "State": "TN",
      "population": 14678
    },
    {
      "countyFIPS": 47017,
      "County Name": "Carroll County",
      "State": "TN",
      "population": 27767
    },
    {
      "countyFIPS": 47019,
      "County Name": "Carter County",
      "State": "TN",
      "population": 56391
    },
    {
      "countyFIPS": 47021,
      "County Name": "Cheatham County",
      "State": "TN",
      "population": 40667
    },
    {
      "countyFIPS": 47023,
      "County Name": "Chester County",
      "State": "TN",
      "population": 17297
    },
    {
      "countyFIPS": 47025,
      "County Name": "Claiborne County",
      "State": "TN",
      "population": 31959
    },
    {
      "countyFIPS": 47027,
      "County Name": "Clay County",
      "State": "TN",
      "population": 7615
    },
    {
      "countyFIPS": 47029,
      "County Name": "Cocke County",
      "State": "TN",
      "population": 36004
    },
    {
      "countyFIPS": 47031,
      "County Name": "Coffee County",
      "State": "TN",
      "population": 56520
    },
    {
      "countyFIPS": 47033,
      "County Name": "Crockett County",
      "State": "TN",
      "population": 14230
    },
    {
      "countyFIPS": 47035,
      "County Name": "Cumberland County",
      "State": "TN",
      "population": 60520
    },
    {
      "countyFIPS": 47037,
      "County Name": "Davidson County",
      "State": "TN",
      "population": 694144
    },
    {
      "countyFIPS": 47039,
      "County Name": "Decatur County",
      "State": "TN",
      "population": 11663
    },
    {
      "countyFIPS": 47041,
      "County Name": "DeKalb County",
      "State": "TN",
      "population": 20490
    },
    {
      "countyFIPS": 47043,
      "County Name": "Dickson County",
      "State": "TN",
      "population": 53948
    },
    {
      "countyFIPS": 47045,
      "County Name": "Dyer County",
      "State": "TN",
      "population": 37159
    },
    {
      "countyFIPS": 47047,
      "County Name": "Fayette County",
      "State": "TN",
      "population": 41133
    },
    {
      "countyFIPS": 47049,
      "County Name": "Fentress County",
      "State": "TN",
      "population": 18523
    },
    {
      "countyFIPS": 47051,
      "County Name": "Franklin County",
      "State": "TN",
      "population": 42208
    },
    {
      "countyFIPS": 47053,
      "County Name": "Gibson County",
      "State": "TN",
      "population": 49133
    },
    {
      "countyFIPS": 47055,
      "County Name": "Giles County",
      "State": "TN",
      "population": 29464
    },
    {
      "countyFIPS": 47057,
      "County Name": "Grainger County",
      "State": "TN",
      "population": 23320
    },
    {
      "countyFIPS": 47059,
      "County Name": "Greene County",
      "State": "TN",
      "population": 69069
    },
    {
      "countyFIPS": 47061,
      "County Name": "Grundy County",
      "State": "TN",
      "population": 13427
    },
    {
      "countyFIPS": 47063,
      "County Name": "Hamblen County",
      "State": "TN",
      "population": 64934
    },
    {
      "countyFIPS": 47065,
      "County Name": "Hamilton County",
      "State": "TN",
      "population": 367804
    },
    {
      "countyFIPS": 47067,
      "County Name": "Hancock County",
      "State": "TN",
      "population": 6620
    },
    {
      "countyFIPS": 47069,
      "County Name": "Hardeman County",
      "State": "TN",
      "population": 25050
    },
    {
      "countyFIPS": 47071,
      "County Name": "Hardin County",
      "State": "TN",
      "population": 25652
    },
    {
      "countyFIPS": 47073,
      "County Name": "Hawkins County",
      "State": "TN",
      "population": 56786
    },
    {
      "countyFIPS": 47075,
      "County Name": "Haywood County",
      "State": "TN",
      "population": 17304
    },
    {
      "countyFIPS": 47077,
      "County Name": "Henderson County",
      "State": "TN",
      "population": 28117
    },
    {
      "countyFIPS": 47079,
      "County Name": "Henry County",
      "State": "TN",
      "population": 32345
    },
    {
      "countyFIPS": 47081,
      "County Name": "Hickman County",
      "State": "TN",
      "population": 25178
    },
    {
      "countyFIPS": 47083,
      "County Name": "Houston County",
      "State": "TN",
      "population": 8201
    },
    {
      "countyFIPS": 47085,
      "County Name": "Humphreys County",
      "State": "TN",
      "population": 18582
    },
    {
      "countyFIPS": 47087,
      "County Name": "Jackson County",
      "State": "TN",
      "population": 11786
    },
    {
      "countyFIPS": 47089,
      "County Name": "Jefferson County",
      "State": "TN",
      "population": 54495
    },
    {
      "countyFIPS": 47091,
      "County Name": "Johnson County",
      "State": "TN",
      "population": 17788
    },
    {
      "countyFIPS": 47093,
      "County Name": "Knox County",
      "State": "TN",
      "population": 470313
    },
    {
      "countyFIPS": 47095,
      "County Name": "Lake County",
      "State": "TN",
      "population": 7016
    },
    {
      "countyFIPS": 47097,
      "County Name": "Lauderdale County",
      "State": "TN",
      "population": 25633
    },
    {
      "countyFIPS": 47099,
      "County Name": "Lawrence County",
      "State": "TN",
      "population": 44142
    },
    {
      "countyFIPS": 47101,
      "County Name": "Lewis County",
      "State": "TN",
      "population": 12268
    },
    {
      "countyFIPS": 47103,
      "County Name": "Lincoln County",
      "State": "TN",
      "population": 34366
    },
    {
      "countyFIPS": 47105,
      "County Name": "Loudon County",
      "State": "TN",
      "population": 54068
    },
    {
      "countyFIPS": 47107,
      "County Name": "McMinn County",
      "State": "TN",
      "population": 53794
    },
    {
      "countyFIPS": 47109,
      "County Name": "McNairy County",
      "State": "TN",
      "population": 25694
    },
    {
      "countyFIPS": 47111,
      "County Name": "Macon County",
      "State": "TN",
      "population": 24602
    },
    {
      "countyFIPS": 47113,
      "County Name": "Madison County",
      "State": "TN",
      "population": 97984
    },
    {
      "countyFIPS": 47115,
      "County Name": "Marion County",
      "State": "TN",
      "population": 28907
    },
    {
      "countyFIPS": 47117,
      "County Name": "Marshall County",
      "State": "TN",
      "population": 34375
    },
    {
      "countyFIPS": 47119,
      "County Name": "Maury County",
      "State": "TN",
      "population": 96387
    },
    {
      "countyFIPS": 47121,
      "County Name": "Meigs County",
      "State": "TN",
      "population": 12422
    },
    {
      "countyFIPS": 47123,
      "County Name": "Monroe County",
      "State": "TN",
      "population": 46545
    },
    {
      "countyFIPS": 47125,
      "County Name": "Montgomery County",
      "State": "TN",
      "population": 208993
    },
    {
      "countyFIPS": 47127,
      "County Name": "Moore County",
      "State": "TN",
      "population": 6488
    },
    {
      "countyFIPS": 47129,
      "County Name": "Morgan County",
      "State": "TN",
      "population": 21403
    },
    {
      "countyFIPS": 47131,
      "County Name": "Obion County",
      "State": "TN",
      "population": 30069
    },
    {
      "countyFIPS": 47133,
      "County Name": "Overton County",
      "State": "TN",
      "population": 22241
    },
    {
      "countyFIPS": 47135,
      "County Name": "Perry County",
      "State": "TN",
      "population": 8076
    },
    {
      "countyFIPS": 47137,
      "County Name": "Pickett County",
      "State": "TN",
      "population": 5048
    },
    {
      "countyFIPS": 47139,
      "County Name": "Polk County",
      "State": "TN",
      "population": 16832
    },
    {
      "countyFIPS": 47141,
      "County Name": "Putnam County",
      "State": "TN",
      "population": 80245
    },
    {
      "countyFIPS": 47143,
      "County Name": "Rhea County",
      "State": "TN",
      "population": 33167
    },
    {
      "countyFIPS": 47145,
      "County Name": "Roane County",
      "State": "TN",
      "population": 53382
    },
    {
      "countyFIPS": 47147,
      "County Name": "Robertson County",
      "State": "TN",
      "population": 71813
    },
    {
      "countyFIPS": 47149,
      "County Name": "Rutherford County",
      "State": "TN",
      "population": 332285
    },
    {
      "countyFIPS": 47151,
      "County Name": "Scott County",
      "State": "TN",
      "population": 22068
    },
    {
      "countyFIPS": 47153,
      "County Name": "Sequatchie County",
      "State": "TN",
      "population": 15026
    },
    {
      "countyFIPS": 47155,
      "County Name": "Sevier County",
      "State": "TN",
      "population": 98250
    },
    {
      "countyFIPS": 47157,
      "County Name": "Shelby County",
      "State": "TN",
      "population": 937166
    },
    {
      "countyFIPS": 47159,
      "County Name": "Smith County",
      "State": "TN",
      "population": 20157
    },
    {
      "countyFIPS": 47161,
      "County Name": "Stewart County",
      "State": "TN",
      "population": 13715
    },
    {
      "countyFIPS": 47163,
      "County Name": "Sullivan County",
      "State": "TN",
      "population": 158348
    },
    {
      "countyFIPS": 47165,
      "County Name": "Sumner County",
      "State": "TN",
      "population": 191283
    },
    {
      "countyFIPS": 47167,
      "County Name": "Tipton County",
      "State": "TN",
      "population": 61599
    },
    {
      "countyFIPS": 47169,
      "County Name": "Trousdale County",
      "State": "TN",
      "population": 11284
    },
    {
      "countyFIPS": 47171,
      "County Name": "Unicoi County",
      "State": "TN",
      "population": 17883
    },
    {
      "countyFIPS": 47173,
      "County Name": "Union County",
      "State": "TN",
      "population": 19972
    },
    {
      "countyFIPS": 47175,
      "County Name": "Van Buren County",
      "State": "TN",
      "population": 5872
    },
    {
      "countyFIPS": 47177,
      "County Name": "Warren County",
      "State": "TN",
      "population": 41277
    },
    {
      "countyFIPS": 47179,
      "County Name": "Washington County",
      "State": "TN",
      "population": 129375
    },
    {
      "countyFIPS": 47181,
      "County Name": "Wayne County",
      "State": "TN",
      "population": 16673
    },
    {
      "countyFIPS": 47183,
      "County Name": "Weakley County",
      "State": "TN",
      "population": 33328
    },
    {
      "countyFIPS": 47185,
      "County Name": "White County",
      "State": "TN",
      "population": 27345
    },
    {
      "countyFIPS": 47187,
      "County Name": "Williamson County",
      "State": "TN",
      "population": 238412
    },
    {
      "countyFIPS": 47189,
      "County Name": "Wilson County",
      "State": "TN",
      "population": 144657
    },
    {
      "countyFIPS": 0,
      "County Name": "Statewide Unallocated",
      "State": "TX",
      "population": 0
    },
    {
      "countyFIPS": 48001,
      "County Name": "Anderson County",
      "State": "TX",
      "population": 57735
    },
    {
      "countyFIPS": 48003,
      "County Name": "Andrews County",
      "State": "TX",
      "population": 18705
    },
    {
      "countyFIPS": 48005,
      "County Name": "Angelina County",
      "State": "TX",
      "population": 86715
    },
    {
      "countyFIPS": 48007,
      "County Name": "Aransas County",
      "State": "TX",
      "population": 23510
    },
    {
      "countyFIPS": 48009,
      "County Name": "Archer County",
      "State": "TX",
      "population": 8553
    },
    {
      "countyFIPS": 48011,
      "County Name": "Armstrong County",
      "State": "TX",
      "population": 1887
    },
    {
      "countyFIPS": 48013,
      "County Name": "Atascosa County",
      "State": "TX",
      "population": 51153
    },
    {
      "countyFIPS": 48015,
      "County Name": "Austin County",
      "State": "TX",
      "population": 30032
    },
    {
      "countyFIPS": 48017,
      "County Name": "Bailey County",
      "State": "TX",
      "population": 7000
    },
    {
      "countyFIPS": 48019,
      "County Name": "Bandera County",
      "State": "TX",
      "population": 23112
    },
    {
      "countyFIPS": 48021,
      "County Name": "Bastrop County",
      "State": "TX",
      "population": 88723
    },
    {
      "countyFIPS": 48023,
      "County Name": "Baylor County",
      "State": "TX",
      "population": 3509
    },
    {
      "countyFIPS": 48025,
      "County Name": "Bee County",
      "State": "TX",
      "population": 32565
    },
    {
      "countyFIPS": 48027,
      "County Name": "Bell County",
      "State": "TX",
      "population": 362924
    },
    {
      "countyFIPS": 48029,
      "County Name": "Bexar County",
      "State": "TX",
      "population": 2003554
    },
    {
      "countyFIPS": 48031,
      "County Name": "Blanco County",
      "State": "TX",
      "population": 11931
    },
    {
      "countyFIPS": 48033,
      "County Name": "Borden County",
      "State": "TX",
      "population": 654
    },
    {
      "countyFIPS": 48035,
      "County Name": "Bosque County",
      "State": "TX",
      "population": 18685
    },
    {
      "countyFIPS": 48037,
      "County Name": "Bowie County",
      "State": "TX",
      "population": 93245
    },
    {
      "countyFIPS": 48039,
      "County Name": "Brazoria County",
      "State": "TX",
      "population": 374264
    },
    {
      "countyFIPS": 48041,
      "County Name": "Brazos County",
      "State": "TX",
      "population": 229211
    },
    {
      "countyFIPS": 48043,
      "County Name": "Brewster County",
      "State": "TX",
      "population": 9203
    },
    {
      "countyFIPS": 48045,
      "County Name": "Briscoe County",
      "State": "TX",
      "population": 1546
    },
    {
      "countyFIPS": 48047,
      "County Name": "Brooks County",
      "State": "TX",
      "population": 7093
    },
    {
      "countyFIPS": 48049,
      "County Name": "Brown County",
      "State": "TX",
      "population": 37864
    },
    {
      "countyFIPS": 48051,
      "County Name": "Burleson County",
      "State": "TX",
      "population": 18443
    },
    {
      "countyFIPS": 48053,
      "County Name": "Burnet County",
      "State": "TX",
      "population": 48155
    },
    {
      "countyFIPS": 48055,
      "County Name": "Caldwell County",
      "State": "TX",
      "population": 43664
    },
    {
      "countyFIPS": 48057,
      "County Name": "Calhoun County",
      "State": "TX",
      "population": 21290
    },
    {
      "countyFIPS": 48059,
      "County Name": "Callahan County",
      "State": "TX",
      "population": 13943
    },
    {
      "countyFIPS": 48061,
      "County Name": "Cameron County",
      "State": "TX",
      "population": 423163
    },
    {
      "countyFIPS": 48063,
      "County Name": "Camp County",
      "State": "TX",
      "population": 13094
    },
    {
      "countyFIPS": 48065,
      "County Name": "Carson County",
      "State": "TX",
      "population": 5926
    },
    {
      "countyFIPS": 48067,
      "County Name": "Cass County",
      "State": "TX",
      "population": 30026
    },
    {
      "countyFIPS": 48069,
      "County Name": "Castro County",
      "State": "TX",
      "population": 7530
    },
    {
      "countyFIPS": 48071,
      "County Name": "Chambers County",
      "State": "TX",
      "population": 43837
    },
    {
      "countyFIPS": 48073,
      "County Name": "Cherokee County",
      "State": "TX",
      "population": 52646
    },
    {
      "countyFIPS": 48075,
      "County Name": "Childress County",
      "State": "TX",
      "population": 7306
    },
    {
      "countyFIPS": 48077,
      "County Name": "Clay County",
      "State": "TX",
      "population": 10471
    },
    {
      "countyFIPS": 48079,
      "County Name": "Cochran County",
      "State": "TX",
      "population": 2853
    },
    {
      "countyFIPS": 48081,
      "County Name": "Coke County",
      "State": "TX",
      "population": 3387
    },
    {
      "countyFIPS": 48083,
      "County Name": "Coleman County",
      "State": "TX",
      "population": 8175
    },
    {
      "countyFIPS": 48085,
      "County Name": "Collin County",
      "State": "TX",
      "population": 1034730
    },
    {
      "countyFIPS": 48087,
      "County Name": "Collingsworth County",
      "State": "TX",
      "population": 2920
    },
    {
      "countyFIPS": 48089,
      "County Name": "Colorado County",
      "State": "TX",
      "population": 21493
    },
    {
      "countyFIPS": 48091,
      "County Name": "Comal County",
      "State": "TX",
      "population": 156209
    },
    {
      "countyFIPS": 48093,
      "County Name": "Comanche County",
      "State": "TX",
      "population": 13635
    },
    {
      "countyFIPS": 48095,
      "County Name": "Concho County",
      "State": "TX",
      "population": 2726
    },
    {
      "countyFIPS": 48097,
      "County Name": "Cooke County",
      "State": "TX",
      "population": 41257
    },
    {
      "countyFIPS": 48099,
      "County Name": "Coryell County",
      "State": "TX",
      "population": 75951
    },
    {
      "countyFIPS": 48101,
      "County Name": "Cottle County",
      "State": "TX",
      "population": 1398
    },
    {
      "countyFIPS": 48103,
      "County Name": "Crane County",
      "State": "TX",
      "population": 4797
    },
    {
      "countyFIPS": 48105,
      "County Name": "Crockett County",
      "State": "TX",
      "population": 3464
    },
    {
      "countyFIPS": 48107,
      "County Name": "Crosby County",
      "State": "TX",
      "population": 5737
    },
    {
      "countyFIPS": 48109,
      "County Name": "Culberson County",
      "State": "TX",
      "population": 2171
    },
    {
      "countyFIPS": 48111,
      "County Name": "Dallam County",
      "State": "TX",
      "population": 7287
    },
    {
      "countyFIPS": 48113,
      "County Name": "Dallas County",
      "State": "TX",
      "population": 2635516
    },
    {
      "countyFIPS": 48115,
      "County Name": "Dawson County",
      "State": "TX",
      "population": 12728
    },
    {
      "countyFIPS": 48117,
      "County Name": "Deaf Smith County",
      "State": "TX",
      "population": 18546
    },
    {
      "countyFIPS": 48119,
      "County Name": "Delta County",
      "State": "TX",
      "population": 5331
    },
    {
      "countyFIPS": 48121,
      "County Name": "Denton County",
      "State": "TX",
      "population": 887207
    },
    {
      "countyFIPS": 48123,
      "County Name": "DeWitt County",
      "State": "TX",
      "population": 20160
    },
    {
      "countyFIPS": 48125,
      "County Name": "Dickens County",
      "State": "TX",
      "population": 2211
    },
    {
      "countyFIPS": 48127,
      "County Name": "Dimmit County",
      "State": "TX",
      "population": 10124
    },
    {
      "countyFIPS": 48129,
      "County Name": "Donley County",
      "State": "TX",
      "population": 3278
    },
    {
      "countyFIPS": 48131,
      "County Name": "Duval County",
      "State": "TX",
      "population": 11157
    },
    {
      "countyFIPS": 48133,
      "County Name": "Eastland County",
      "State": "TX",
      "population": 18360
    },
    {
      "countyFIPS": 48135,
      "County Name": "Ector County",
      "State": "TX",
      "population": 166223
    },
    {
      "countyFIPS": 48137,
      "County Name": "Edwards County",
      "State": "TX",
      "population": 1932
    },
    {
      "countyFIPS": 48139,
      "County Name": "Ellis County",
      "State": "TX",
      "population": 184826
    },
    {
      "countyFIPS": 48141,
      "County Name": "El Paso County",
      "State": "TX",
      "population": 839238
    },
    {
      "countyFIPS": 48143,
      "County Name": "Erath County",
      "State": "TX",
      "population": 42698
    },
    {
      "countyFIPS": 48145,
      "County Name": "Falls County",
      "State": "TX",
      "population": 17297
    },
    {
      "countyFIPS": 48147,
      "County Name": "Fannin County",
      "State": "TX",
      "population": 35514
    },
    {
      "countyFIPS": 48149,
      "County Name": "Fayette County",
      "State": "TX",
      "population": 25346
    },
    {
      "countyFIPS": 48151,
      "County Name": "Fisher County",
      "State": "TX",
      "population": 3830
    },
    {
      "countyFIPS": 48153,
      "County Name": "Floyd County",
      "State": "TX",
      "population": 5712
    },
    {
      "countyFIPS": 48155,
      "County Name": "Foard County",
      "State": "TX",
      "population": 1155
    },
    {
      "countyFIPS": 48157,
      "County Name": "Fort Bend County",
      "State": "TX",
      "population": 811688
    },
    {
      "countyFIPS": 48159,
      "County Name": "Franklin County",
      "State": "TX",
      "population": 10725
    },
    {
      "countyFIPS": 48161,
      "County Name": "Freestone County",
      "State": "TX",
      "population": 19717
    },
    {
      "countyFIPS": 48163,
      "County Name": "Frio County",
      "State": "TX",
      "population": 20306
    },
    {
      "countyFIPS": 48165,
      "County Name": "Gaines County",
      "State": "TX",
      "population": 21492
    },
    {
      "countyFIPS": 48167,
      "County Name": "Galveston County",
      "State": "TX",
      "population": 342139
    },
    {
      "countyFIPS": 48169,
      "County Name": "Garza County",
      "State": "TX",
      "population": 6229
    },
    {
      "countyFIPS": 48171,
      "County Name": "Gillespie County",
      "State": "TX",
      "population": 26988
    },
    {
      "countyFIPS": 48173,
      "County Name": "Glasscock County",
      "State": "TX",
      "population": 1409
    },
    {
      "countyFIPS": 48175,
      "County Name": "Goliad County",
      "State": "TX",
      "population": 7658
    },
    {
      "countyFIPS": 48177,
      "County Name": "Gonzales County",
      "State": "TX",
      "population": 20837
    },
    {
      "countyFIPS": 48179,
      "County Name": "Gray County",
      "State": "TX",
      "population": 21886
    },
    {
      "countyFIPS": 48181,
      "County Name": "Grayson County",
      "State": "TX",
      "population": 136212
    },
    {
      "countyFIPS": 48183,
      "County Name": "Gregg County",
      "State": "TX",
      "population": 123945
    },
    {
      "countyFIPS": 48185,
      "County Name": "Grimes County",
      "State": "TX",
      "population": 28880
    },
    {
      "countyFIPS": 48187,
      "County Name": "Guadalupe County",
      "State": "TX",
      "population": 166847
    },
    {
      "countyFIPS": 48189,
      "County Name": "Hale County",
      "State": "TX",
      "population": 33406
    },
    {
      "countyFIPS": 48191,
      "County Name": "Hall County",
      "State": "TX",
      "population": 2964
    },
    {
      "countyFIPS": 48193,
      "County Name": "Hamilton County",
      "State": "TX",
      "population": 8461
    },
    {
      "countyFIPS": 48195,
      "County Name": "Hansford County",
      "State": "TX",
      "population": 5399
    },
    {
      "countyFIPS": 48197,
      "County Name": "Hardeman County",
      "State": "TX",
      "population": 3933
    },
    {
      "countyFIPS": 48199,
      "County Name": "Hardin County",
      "State": "TX",
      "population": 57602
    },
    {
      "countyFIPS": 48201,
      "County Name": "Harris County",
      "State": "TX",
      "population": 4713325
    },
    {
      "countyFIPS": 48203,
      "County Name": "Harrison County",
      "State": "TX",
      "population": 66553
    },
    {
      "countyFIPS": 48205,
      "County Name": "Hartley County",
      "State": "TX",
      "population": 5576
    },
    {
      "countyFIPS": 48207,
      "County Name": "Haskell County",
      "State": "TX",
      "population": 5658
    },
    {
      "countyFIPS": 48209,
      "County Name": "Hays County",
      "State": "TX",
      "population": 230191
    },
    {
      "countyFIPS": 48211,
      "County Name": "Hemphill County",
      "State": "TX",
      "population": 3819
    },
    {
      "countyFIPS": 48213,
      "County Name": "Henderson County",
      "State": "TX",
      "population": 82737
    },
    {
      "countyFIPS": 48215,
      "County Name": "Hidalgo County",
      "State": "TX",
      "population": 868707
    },
    {
      "countyFIPS": 48217,
      "County Name": "Hill County",
      "State": "TX",
      "population": 36649
    },
    {
      "countyFIPS": 48219,
      "County Name": "Hockley County",
      "State": "TX",
      "population": 23021
    },
    {
      "countyFIPS": 48221,
      "County Name": "Hood County",
      "State": "TX",
      "population": 61643
    },
    {
      "countyFIPS": 48223,
      "County Name": "Hopkins County",
      "State": "TX",
      "population": 37084
    },
    {
      "countyFIPS": 48225,
      "County Name": "Houston County",
      "State": "TX",
      "population": 22968
    },
    {
      "countyFIPS": 48227,
      "County Name": "Howard County",
      "State": "TX",
      "population": 36664
    },
    {
      "countyFIPS": 48229,
      "County Name": "Hudspeth County",
      "State": "TX",
      "population": 4886
    },
    {
      "countyFIPS": 48231,
      "County Name": "Hunt County",
      "State": "TX",
      "population": 98594
    },
    {
      "countyFIPS": 48233,
      "County Name": "Hutchinson County",
      "State": "TX",
      "population": 20938
    },
    {
      "countyFIPS": 48235,
      "County Name": "Irion County",
      "State": "TX",
      "population": 1536
    },
    {
      "countyFIPS": 48237,
      "County Name": "Jack County",
      "State": "TX",
      "population": 8935
    },
    {
      "countyFIPS": 48239,
      "County Name": "Jackson County",
      "State": "TX",
      "population": 14760
    },
    {
      "countyFIPS": 48241,
      "County Name": "Jasper County",
      "State": "TX",
      "population": 35529
    },
    {
      "countyFIPS": 48243,
      "County Name": "Jeff Davis County",
      "State": "TX",
      "population": 2274
    },
    {
      "countyFIPS": 48245,
      "County Name": "Jefferson County",
      "State": "TX",
      "population": 251565
    },
    {
      "countyFIPS": 48247,
      "County Name": "Jim Hogg County",
      "State": "TX",
      "population": 5200
    },
    {
      "countyFIPS": 48249,
      "County Name": "Jim Wells County",
      "State": "TX",
      "population": 40482
    },
    {
      "countyFIPS": 48251,
      "County Name": "Johnson County",
      "State": "TX",
      "population": 175817
    },
    {
      "countyFIPS": 48253,
      "County Name": "Jones County",
      "State": "TX",
      "population": 20083
    },
    {
      "countyFIPS": 48255,
      "County Name": "Karnes County",
      "State": "TX",
      "population": 15601
    },
    {
      "countyFIPS": 48257,
      "County Name": "Kaufman County",
      "State": "TX",
      "population": 136154
    },
    {
      "countyFIPS": 48259,
      "County Name": "Kendall County",
      "State": "TX",
      "population": 47431
    },
    {
      "countyFIPS": 48261,
      "County Name": "Kenedy County",
      "State": "TX",
      "population": 404
    },
    {
      "countyFIPS": 48263,
      "County Name": "Kent County",
      "State": "TX",
      "population": 762
    },
    {
      "countyFIPS": 48265,
      "County Name": "Kerr County",
      "State": "TX",
      "population": 52600
    },
    {
      "countyFIPS": 48267,
      "County Name": "Kimble County",
      "State": "TX",
      "population": 4337
    },
    {
      "countyFIPS": 48269,
      "County Name": "King County",
      "State": "TX",
      "population": 272
    },
    {
      "countyFIPS": 48271,
      "County Name": "Kinney County",
      "State": "TX",
      "population": 3667
    },
    {
      "countyFIPS": 48273,
      "County Name": "Kleberg County",
      "State": "TX",
      "population": 30680
    },
    {
      "countyFIPS": 48275,
      "County Name": "Knox County",
      "State": "TX",
      "population": 3664
    },
    {
      "countyFIPS": 48277,
      "County Name": "Lamar County",
      "State": "TX",
      "population": 49859
    },
    {
      "countyFIPS": 48279,
      "County Name": "Lamb County",
      "State": "TX",
      "population": 12893
    },
    {
      "countyFIPS": 48281,
      "County Name": "Lampasas County",
      "State": "TX",
      "population": 21428
    },
    {
      "countyFIPS": 48283,
      "County Name": "La Salle County",
      "State": "TX",
      "population": 7520
    },
    {
      "countyFIPS": 48285,
      "County Name": "Lavaca County",
      "State": "TX",
      "population": 20154
    },
    {
      "countyFIPS": 48287,
      "County Name": "Lee County",
      "State": "TX",
      "population": 17239
    },
    {
      "countyFIPS": 48289,
      "County Name": "Leon County",
      "State": "TX",
      "population": 17404
    },
    {
      "countyFIPS": 48291,
      "County Name": "Liberty County",
      "State": "TX",
      "population": 88219
    },
    {
      "countyFIPS": 48293,
      "County Name": "Limestone County",
      "State": "TX",
      "population": 23437
    },
    {
      "countyFIPS": 48295,
      "County Name": "Lipscomb County",
      "State": "TX",
      "population": 3233
    },
    {
      "countyFIPS": 48297,
      "County Name": "Live Oak County",
      "State": "TX",
      "population": 12207
    },
    {
      "countyFIPS": 48299,
      "County Name": "Llano County",
      "State": "TX",
      "population": 21795
    },
    {
      "countyFIPS": 48301,
      "County Name": "Loving County",
      "State": "TX",
      "population": 169
    },
    {
      "countyFIPS": 48303,
      "County Name": "Lubbock County",
      "State": "TX",
      "population": 310569
    },
    {
      "countyFIPS": 48305,
      "County Name": "Lynn County",
      "State": "TX",
      "population": 5951
    },
    {
      "countyFIPS": 48307,
      "County Name": "McCulloch County",
      "State": "TX",
      "population": 7984
    },
    {
      "countyFIPS": 48309,
      "County Name": "McLennan County",
      "State": "TX",
      "population": 256623
    },
    {
      "countyFIPS": 48311,
      "County Name": "McMullen County",
      "State": "TX",
      "population": 743
    },
    {
      "countyFIPS": 48313,
      "County Name": "Madison County",
      "State": "TX",
      "population": 14284
    },
    {
      "countyFIPS": 48315,
      "County Name": "Marion County",
      "State": "TX",
      "population": 9854
    },
    {
      "countyFIPS": 48317,
      "County Name": "Martin County",
      "State": "TX",
      "population": 5771
    },
    {
      "countyFIPS": 48319,
      "County Name": "Mason County",
      "State": "TX",
      "population": 4274
    },
    {
      "countyFIPS": 48321,
      "County Name": "Matagorda County",
      "State": "TX",
      "population": 36643
    },
    {
      "countyFIPS": 48323,
      "County Name": "Maverick County",
      "State": "TX",
      "population": 58722
    },
    {
      "countyFIPS": 48325,
      "County Name": "Medina County",
      "State": "TX",
      "population": 51584
    },
    {
      "countyFIPS": 48327,
      "County Name": "Menard County",
      "State": "TX",
      "population": 2138
    },
    {
      "countyFIPS": 48329,
      "County Name": "Midland County",
      "State": "TX",
      "population": 176832
    },
    {
      "countyFIPS": 48331,
      "County Name": "Milam County",
      "State": "TX",
      "population": 24823
    },
    {
      "countyFIPS": 48333,
      "County Name": "Mills County",
      "State": "TX",
      "population": 4873
    },
    {
      "countyFIPS": 48335,
      "County Name": "Mitchell County",
      "State": "TX",
      "population": 8545
    },
    {
      "countyFIPS": 48337,
      "County Name": "Montague County",
      "State": "TX",
      "population": 19818
    },
    {
      "countyFIPS": 48339,
      "County Name": "Montgomery County",
      "State": "TX",
      "population": 607391
    },
    {
      "countyFIPS": 48341,
      "County Name": "Moore County",
      "State": "TX",
      "population": 20940
    },
    {
      "countyFIPS": 48343,
      "County Name": "Morris County",
      "State": "TX",
      "population": 12388
    },
    {
      "countyFIPS": 48345,
      "County Name": "Motley County",
      "State": "TX",
      "population": 1200
    },
    {
      "countyFIPS": 48347,
      "County Name": "Nacogdoches County",
      "State": "TX",
      "population": 65204
    },
    {
      "countyFIPS": 48349,
      "County Name": "Navarro County",
      "State": "TX",
      "population": 50113
    },
    {
      "countyFIPS": 48351,
      "County Name": "Newton County",
      "State": "TX",
      "population": 13595
    },
    {
      "countyFIPS": 48353,
      "County Name": "Nolan County",
      "State": "TX",
      "population": 14714
    },
    {
      "countyFIPS": 48355,
      "County Name": "Nueces County",
      "State": "TX",
      "population": 362294
    },
    {
      "countyFIPS": 48357,
      "County Name": "Ochiltree County",
      "State": "TX",
      "population": 9836
    },
    {
      "countyFIPS": 48359,
      "County Name": "Oldham County",
      "State": "TX",
      "population": 2112
    },
    {
      "countyFIPS": 48361,
      "County Name": "Orange County",
      "State": "TX",
      "population": 83396
    },
    {
      "countyFIPS": 48363,
      "County Name": "Palo Pinto County",
      "State": "TX",
      "population": 29189
    },
    {
      "countyFIPS": 48365,
      "County Name": "Panola County",
      "State": "TX",
      "population": 23194
    },
    {
      "countyFIPS": 48367,
      "County Name": "Parker County",
      "State": "TX",
      "population": 142878
    },
    {
      "countyFIPS": 48369,
      "County Name": "Parmer County",
      "State": "TX",
      "population": 9605
    },
    {
      "countyFIPS": 48371,
      "County Name": "Pecos County",
      "State": "TX",
      "population": 15823
    },
    {
      "countyFIPS": 48373,
      "County Name": "Polk County",
      "State": "TX",
      "population": 51353
    },
    {
      "countyFIPS": 48375,
      "County Name": "Potter County",
      "State": "TX",
      "population": 117415
    },
    {
      "countyFIPS": 48377,
      "County Name": "Presidio County",
      "State": "TX",
      "population": 6704
    },
    {
      "countyFIPS": 48379,
      "County Name": "Rains County",
      "State": "TX",
      "population": 12514
    },
    {
      "countyFIPS": 48381,
      "County Name": "Randall County",
      "State": "TX",
      "population": 137713
    },
    {
      "countyFIPS": 48383,
      "County Name": "Reagan County",
      "State": "TX",
      "population": 3849
    },
    {
      "countyFIPS": 48385,
      "County Name": "Real County",
      "State": "TX",
      "population": 3452
    },
    {
      "countyFIPS": 48387,
      "County Name": "Red River County",
      "State": "TX",
      "population": 12023
    },
    {
      "countyFIPS": 48389,
      "County Name": "Reeves County",
      "State": "TX",
      "population": 15976
    },
    {
      "countyFIPS": 48391,
      "County Name": "Refugio County",
      "State": "TX",
      "population": 6948
    },
    {
      "countyFIPS": 48393,
      "County Name": "Roberts County",
      "State": "TX",
      "population": 854
    },
    {
      "countyFIPS": 48395,
      "County Name": "Robertson County",
      "State": "TX",
      "population": 17074
    },
    {
      "countyFIPS": 48397,
      "County Name": "Rockwall County",
      "State": "TX",
      "population": 104915
    },
    {
      "countyFIPS": 48399,
      "County Name": "Runnels County",
      "State": "TX",
      "population": 10264
    },
    {
      "countyFIPS": 48401,
      "County Name": "Rusk County",
      "State": "TX",
      "population": 54406
    },
    {
      "countyFIPS": 48403,
      "County Name": "Sabine County",
      "State": "TX",
      "population": 10542
    },
    {
      "countyFIPS": 48405,
      "County Name": "San Augustine County",
      "State": "TX",
      "population": 8237
    },
    {
      "countyFIPS": 48407,
      "County Name": "San Jacinto County",
      "State": "TX",
      "population": 28859
    },
    {
      "countyFIPS": 48409,
      "County Name": "San Patricio County",
      "State": "TX",
      "population": 66730
    },
    {
      "countyFIPS": 48411,
      "County Name": "San Saba County",
      "State": "TX",
      "population": 6055
    },
    {
      "countyFIPS": 48413,
      "County Name": "Schleicher County",
      "State": "TX",
      "population": 2793
    },
    {
      "countyFIPS": 48415,
      "County Name": "Scurry County",
      "State": "TX",
      "population": 16703
    },
    {
      "countyFIPS": 48417,
      "County Name": "Shackelford County",
      "State": "TX",
      "population": 3265
    },
    {
      "countyFIPS": 48419,
      "County Name": "Shelby County",
      "State": "TX",
      "population": 25274
    },
    {
      "countyFIPS": 48421,
      "County Name": "Sherman County",
      "State": "TX",
      "population": 3022
    },
    {
      "countyFIPS": 48423,
      "County Name": "Smith County",
      "State": "TX",
      "population": 232751
    },
    {
      "countyFIPS": 48425,
      "County Name": "Somervell County",
      "State": "TX",
      "population": 9128
    },
    {
      "countyFIPS": 48427,
      "County Name": "Starr County",
      "State": "TX",
      "population": 64633
    },
    {
      "countyFIPS": 48429,
      "County Name": "Stephens County",
      "State": "TX",
      "population": 9366
    },
    {
      "countyFIPS": 48431,
      "County Name": "Sterling County",
      "State": "TX",
      "population": 1291
    },
    {
      "countyFIPS": 48433,
      "County Name": "Stonewall County",
      "State": "TX",
      "population": 1350
    },
    {
      "countyFIPS": 48435,
      "County Name": "Sutton County",
      "State": "TX",
      "population": 3776
    },
    {
      "countyFIPS": 48437,
      "County Name": "Swisher County",
      "State": "TX",
      "population": 7397
    },
    {
      "countyFIPS": 48439,
      "County Name": "Tarrant County",
      "State": "TX",
      "population": 2102515
    },
    {
      "countyFIPS": 48441,
      "County Name": "Taylor County",
      "State": "TX",
      "population": 138034
    },
    {
      "countyFIPS": 48443,
      "County Name": "Terrell County",
      "State": "TX",
      "population": 776
    },
    {
      "countyFIPS": 48445,
      "County Name": "Terry County",
      "State": "TX",
      "population": 12337
    },
    {
      "countyFIPS": 48447,
      "County Name": "Throckmorton County",
      "State": "TX",
      "population": 1501
    },
    {
      "countyFIPS": 48449,
      "County Name": "Titus County",
      "State": "TX",
      "population": 32750
    },
    {
      "countyFIPS": 48451,
      "County Name": "Tom Green County",
      "State": "TX",
      "population": 119200
    },
    {
      "countyFIPS": 48453,
      "County Name": "Travis County",
      "State": "TX",
      "population": 1273954
    },
    {
      "countyFIPS": 48455,
      "County Name": "Trinity County",
      "State": "TX",
      "population": 14651
    },
    {
      "countyFIPS": 48457,
      "County Name": "Tyler County",
      "State": "TX",
      "population": 21672
    },
    {
      "countyFIPS": 48459,
      "County Name": "Upshur County",
      "State": "TX",
      "population": 41753
    },
    {
      "countyFIPS": 48461,
      "County Name": "Upton County",
      "State": "TX",
      "population": 3657
    },
    {
      "countyFIPS": 48463,
      "County Name": "Uvalde County",
      "State": "TX",
      "population": 26741
    },
    {
      "countyFIPS": 48465,
      "County Name": "Val Verde County",
      "State": "TX",
      "population": 49025
    },
    {
      "countyFIPS": 48467,
      "County Name": "Van Zandt County",
      "State": "TX",
      "population": 56590
    },
    {
      "countyFIPS": 48469,
      "County Name": "Victoria County",
      "State": "TX",
      "population": 92084
    },
    {
      "countyFIPS": 48471,
      "County Name": "Walker County",
      "State": "TX",
      "population": 72971
    },
    {
      "countyFIPS": 48473,
      "County Name": "Waller County",
      "State": "TX",
      "population": 55246
    },
    {
      "countyFIPS": 48475,
      "County Name": "Ward County",
      "State": "TX",
      "population": 11998
    },
    {
      "countyFIPS": 48477,
      "County Name": "Washington County",
      "State": "TX",
      "population": 35882
    },
    {
      "countyFIPS": 48479,
      "County Name": "Webb County",
      "State": "TX",
      "population": 276652
    },
    {
      "countyFIPS": 48481,
      "County Name": "Wharton County",
      "State": "TX",
      "population": 41556
    },
    {
      "countyFIPS": 48483,
      "County Name": "Wheeler County",
      "State": "TX",
      "population": 5056
    },
    {
      "countyFIPS": 48485,
      "County Name": "Wichita County",
      "State": "TX",
      "population": 132230
    },
    {
      "countyFIPS": 48487,
      "County Name": "Wilbarger County",
      "State": "TX",
      "population": 12769
    },
    {
      "countyFIPS": 48489,
      "County Name": "Willacy County",
      "State": "TX",
      "population": 21358
    },
    {
      "countyFIPS": 48491,
      "County Name": "Williamson County",
      "State": "TX",
      "population": 590551
    },
    {
      "countyFIPS": 48493,
      "County Name": "Wilson County",
      "State": "TX",
      "population": 51070
    },
    {
      "countyFIPS": 48495,
      "County Name": "Winkler County",
      "State": "TX",
      "population": 8010
    },
    {
      "countyFIPS": 48497,
      "County Name": "Wise County",
      "State": "TX",
      "population": 69984
    },
    {
      "countyFIPS": 48499,
      "County Name": "Wood County",
      "State": "TX",
      "population": 45539
    },
    {
      "countyFIPS": 48501,
      "County Name": "Yoakum County",
      "State": "TX",
      "population": 8713
    },
    {
      "countyFIPS": 48503,
      "County Name": "Young County",
      "State": "TX",
      "population": 18010
    },
    {
      "countyFIPS": 48505,
      "County Name": "Zapata County",
      "State": "TX",
      "population": 14179
    },
    {
      "countyFIPS": 48507,
      "County Name": "Zavala County",
      "State": "TX",
      "population": 11840
    },
    {
      "countyFIPS": 0,
      "County Name": "Statewide Unallocated",
      "State": "UT",
      "population": 0
    },
    {
      "countyFIPS": 49001,
      "County Name": "Beaver County",
      "State": "UT",
      "population": 6710
    },
    {
      "countyFIPS": 49003,
      "County Name": "Box Elder County",
      "State": "UT",
      "population": 56046
    },
    {
      "countyFIPS": 49005,
      "County Name": "Cache County",
      "State": "UT",
      "population": 128289
    },
    {
      "countyFIPS": 49007,
      "County Name": "Carbon County",
      "State": "UT",
      "population": 20463
    },
    {
      "countyFIPS": 49009,
      "County Name": "Daggett County",
      "State": "UT",
      "population": 950
    },
    {
      "countyFIPS": 49011,
      "County Name": "Davis County",
      "State": "UT",
      "population": 355481
    },
    {
      "countyFIPS": 49013,
      "County Name": "Duchesne County",
      "State": "UT",
      "population": 19938
    },
    {
      "countyFIPS": 49015,
      "County Name": "Emery County",
      "State": "UT",
      "population": 10012
    },
    {
      "countyFIPS": 49017,
      "County Name": "Garfield County",
      "State": "UT",
      "population": 5051
    },
    {
      "countyFIPS": 49019,
      "County Name": "Grand County",
      "State": "UT",
      "population": 9754
    },
    {
      "countyFIPS": 49021,
      "County Name": "Iron County",
      "State": "UT",
      "population": 54839
    },
    {
      "countyFIPS": 49023,
      "County Name": "Juab County",
      "State": "UT",
      "population": 12017
    },
    {
      "countyFIPS": 49025,
      "County Name": "Kane County",
      "State": "UT",
      "population": 7886
    },
    {
      "countyFIPS": 49027,
      "County Name": "Millard County",
      "State": "UT",
      "population": 13188
    },
    {
      "countyFIPS": 49029,
      "County Name": "Morgan County",
      "State": "UT",
      "population": 12124
    },
    {
      "countyFIPS": 49031,
      "County Name": "Piute County",
      "State": "UT",
      "population": 1479
    },
    {
      "countyFIPS": 49033,
      "County Name": "Rich County",
      "State": "UT",
      "population": 2483
    },
    {
      "countyFIPS": 49035,
      "County Name": "Salt Lake County",
      "State": "UT",
      "population": 1160437
    },
    {
      "countyFIPS": 49037,
      "County Name": "San Juan County",
      "State": "UT",
      "population": 15308
    },
    {
      "countyFIPS": 49039,
      "County Name": "Sanpete County",
      "State": "UT",
      "population": 30939
    },
    {
      "countyFIPS": 49041,
      "County Name": "Sevier County",
      "State": "UT",
      "population": 21620
    },
    {
      "countyFIPS": 49043,
      "County Name": "Summit County",
      "State": "UT",
      "population": 42145
    },
    {
      "countyFIPS": 49045,
      "County Name": "Tooele County",
      "State": "UT",
      "population": 72259
    },
    {
      "countyFIPS": 49047,
      "County Name": "Uintah County",
      "State": "UT",
      "population": 35734
    },
    {
      "countyFIPS": 49049,
      "County Name": "Utah County",
      "State": "UT",
      "population": 636235
    },
    {
      "countyFIPS": 49051,
      "County Name": "Wasatch County",
      "State": "UT",
      "population": 34091
    },
    {
      "countyFIPS": 49053,
      "County Name": "Washington County",
      "State": "UT",
      "population": 177556
    },
    {
      "countyFIPS": 49055,
      "County Name": "Wayne County",
      "State": "UT",
      "population": 2711
    },
    {
      "countyFIPS": 49057,
      "County Name": "Weber County",
      "State": "UT",
      "population": 260213
    },
    {
      "countyFIPS": 0,
      "County Name": "Statewide Unallocated",
      "State": "VT",
      "population": 0
    },
    {
      "countyFIPS": 50001,
      "County Name": "Addison County",
      "State": "VT",
      "population": 36777
    },
    {
      "countyFIPS": 50003,
      "County Name": "Bennington County",
      "State": "VT",
      "population": 35470
    },
    {
      "countyFIPS": 50005,
      "County Name": "Caledonia County",
      "State": "VT",
      "population": 29993
    },
    {
      "countyFIPS": 50007,
      "County Name": "Chittenden County",
      "State": "VT",
      "population": 163774
    },
    {
      "countyFIPS": 50009,
      "County Name": "Essex County",
      "State": "VT",
      "population": 6163
    },
    {
      "countyFIPS": 50011,
      "County Name": "Franklin County",
      "State": "VT",
      "population": 49402
    },
    {
      "countyFIPS": 50013,
      "County Name": "Grand Isle County",
      "State": "VT",
      "population": 7235
    },
    {
      "countyFIPS": 50015,
      "County Name": "Lamoille County",
      "State": "VT",
      "population": 25362
    },
    {
      "countyFIPS": 50017,
      "County Name": "Orange County",
      "State": "VT",
      "population": 28892
    },
    {
      "countyFIPS": 50019,
      "County Name": "Orleans County",
      "State": "VT",
      "population": 27037
    },
    {
      "countyFIPS": 50021,
      "County Name": "Rutland County",
      "State": "VT",
      "population": 58191
    },
    {
      "countyFIPS": 50023,
      "County Name": "Washington County",
      "State": "VT",
      "population": 58409
    },
    {
      "countyFIPS": 50025,
      "County Name": "Windham County",
      "State": "VT",
      "population": 42222
    },
    {
      "countyFIPS": 50027,
      "County Name": "Windsor County",
      "State": "VT",
      "population": 55062
    },
    {
      "countyFIPS": 0,
      "County Name": "Statewide Unallocated",
      "State": "VA",
      "population": 0
    },
    {
      "countyFIPS": 51001,
      "County Name": "Accomack County",
      "State": "VA",
      "population": 32316
    },
    {
      "countyFIPS": 51003,
      "County Name": "Albemarle County",
      "State": "VA",
      "population": 109330
    },
    {
      "countyFIPS": 51005,
      "County Name": "Alleghany County",
      "State": "VA",
      "population": 14860
    },
    {
      "countyFIPS": 51007,
      "County Name": "Amelia County",
      "State": "VA",
      "population": 13145
    },
    {
      "countyFIPS": 51009,
      "County Name": "Amherst County",
      "State": "VA",
      "population": 31605
    },
    {
      "countyFIPS": 51011,
      "County Name": "Appomattox County",
      "State": "VA",
      "population": 15911
    },
    {
      "countyFIPS": 51013,
      "County Name": "Arlington County",
      "State": "VA",
      "population": 236842
    },
    {
      "countyFIPS": 51015,
      "County Name": "Augusta County",
      "State": "VA",
      "population": 75558
    },
    {
      "countyFIPS": 51017,
      "County Name": "Bath County",
      "State": "VA",
      "population": 4147
    },
    {
      "countyFIPS": 51019,
      "County Name": "Bedford County",
      "State": "VA",
      "population": 78997
    },
    {
      "countyFIPS": 51021,
      "County Name": "Bland County",
      "State": "VA",
      "population": 6280
    },
    {
      "countyFIPS": 51023,
      "County Name": "Botetourt County",
      "State": "VA",
      "population": 33419
    },
    {
      "countyFIPS": 51025,
      "County Name": "Brunswick County",
      "State": "VA",
      "population": 16231
    },
    {
      "countyFIPS": 51027,
      "County Name": "Buchanan County",
      "State": "VA",
      "population": 21004
    },
    {
      "countyFIPS": 51029,
      "County Name": "Buckingham County",
      "State": "VA",
      "population": 17148
    },
    {
      "countyFIPS": 51031,
      "County Name": "Campbell County",
      "State": "VA",
      "population": 54885
    },
    {
      "countyFIPS": 51033,
      "County Name": "Caroline County",
      "State": "VA",
      "population": 30725
    },
    {
      "countyFIPS": 51035,
      "County Name": "Carroll County",
      "State": "VA",
      "population": 29791
    },
    {
      "countyFIPS": 51036,
      "County Name": "Charles City County",
      "State": "VA",
      "population": 6963
    },
    {
      "countyFIPS": 51037,
      "County Name": "Charlotte County",
      "State": "VA",
      "population": 11880
    },
    {
      "countyFIPS": 51041,
      "County Name": "Chesterfield County",
      "State": "VA",
      "population": 352802
    },
    {
      "countyFIPS": 51043,
      "County Name": "Clarke County",
      "State": "VA",
      "population": 14619
    },
    {
      "countyFIPS": 51045,
      "County Name": "Craig County",
      "State": "VA",
      "population": 5131
    },
    {
      "countyFIPS": 51047,
      "County Name": "Culpeper County",
      "State": "VA",
      "population": 52605
    },
    {
      "countyFIPS": 51049,
      "County Name": "Cumberland County",
      "State": "VA",
      "population": 9932
    },
    {
      "countyFIPS": 51051,
      "County Name": "Dickenson County",
      "State": "VA",
      "population": 14318
    },
    {
      "countyFIPS": 51053,
      "County Name": "Dinwiddie County",
      "State": "VA",
      "population": 28544
    },
    {
      "countyFIPS": 51057,
      "County Name": "Essex County",
      "State": "VA",
      "population": 10953
    },
    {
      "countyFIPS": 51059,
      "County Name": "Fairfax County",
      "State": "VA",
      "population": 1147532
    },
    {
      "countyFIPS": 51061,
      "County Name": "Fauquier County",
      "State": "VA",
      "population": 71222
    },
    {
      "countyFIPS": 51063,
      "County Name": "Floyd County",
      "State": "VA",
      "population": 15749
    },
    {
      "countyFIPS": 51065,
      "County Name": "Fluvanna County",
      "State": "VA",
      "population": 27270
    },
    {
      "countyFIPS": 51067,
      "County Name": "Franklin County",
      "State": "VA",
      "population": 56042
    },
    {
      "countyFIPS": 51069,
      "County Name": "Frederick County",
      "State": "VA",
      "population": 89313
    },
    {
      "countyFIPS": 51071,
      "County Name": "Giles County",
      "State": "VA",
      "population": 16720
    },
    {
      "countyFIPS": 51073,
      "County Name": "Gloucester County",
      "State": "VA",
      "population": 37348
    },
    {
      "countyFIPS": 51075,
      "County Name": "Goochland County",
      "State": "VA",
      "population": 23753
    },
    {
      "countyFIPS": 51077,
      "County Name": "Grayson County",
      "State": "VA",
      "population": 15550
    },
    {
      "countyFIPS": 51079,
      "County Name": "Greene County",
      "State": "VA",
      "population": 19819
    },
    {
      "countyFIPS": 51081,
      "County Name": "Greensville County",
      "State": "VA",
      "population": 11336
    },
    {
      "countyFIPS": 51083,
      "County Name": "Halifax County",
      "State": "VA",
      "population": 33911
    },
    {
      "countyFIPS": 51085,
      "County Name": "Hanover County",
      "State": "VA",
      "population": 107766
    },
    {
      "countyFIPS": 51087,
      "County Name": "Henrico County",
      "State": "VA",
      "population": 330818
    },
    {
      "countyFIPS": 51089,
      "County Name": "Henry County",
      "State": "VA",
      "population": 50557
    },
    {
      "countyFIPS": 51091,
      "County Name": "Highland County",
      "State": "VA",
      "population": 2190
    },
    {
      "countyFIPS": 51093,
      "County Name": "Isle of Wight County",
      "State": "VA",
      "population": 37109
    },
    {
      "countyFIPS": 51095,
      "County Name": "James City County",
      "State": "VA",
      "population": 76523
    },
    {
      "countyFIPS": 51097,
      "County Name": "King and Queen County",
      "State": "VA",
      "population": 7025
    },
    {
      "countyFIPS": 51099,
      "County Name": "King George County",
      "State": "VA",
      "population": 26836
    },
    {
      "countyFIPS": 51101,
      "County Name": "King William County",
      "State": "VA",
      "population": 17148
    },
    {
      "countyFIPS": 51103,
      "County Name": "Lancaster County",
      "State": "VA",
      "population": 10603
    },
    {
      "countyFIPS": 51105,
      "County Name": "Lee County",
      "State": "VA",
      "population": 23423
    },
    {
      "countyFIPS": 51107,
      "County Name": "Loudoun County",
      "State": "VA",
      "population": 413538
    },
    {
      "countyFIPS": 51109,
      "County Name": "Louisa County",
      "State": "VA",
      "population": 37591
    },
    {
      "countyFIPS": 51111,
      "County Name": "Lunenburg County",
      "State": "VA",
      "population": 12196
    },
    {
      "countyFIPS": 51113,
      "County Name": "Madison County",
      "State": "VA",
      "population": 13261
    },
    {
      "countyFIPS": 51115,
      "County Name": "Matthews County",
      "State": "VA",
      "population": 8834
    },
    {
      "countyFIPS": 51117,
      "County Name": "Mecklenburg County",
      "State": "VA",
      "population": 30587
    },
    {
      "countyFIPS": 51119,
      "County Name": "Middlesex County",
      "State": "VA",
      "population": 10582
    },
    {
      "countyFIPS": 51121,
      "County Name": "Montgomery County",
      "State": "VA",
      "population": 98535
    },
    {
      "countyFIPS": 51125,
      "County Name": "Nelson County",
      "State": "VA",
      "population": 14930
    },
    {
      "countyFIPS": 51127,
      "County Name": "New Kent County",
      "State": "VA",
      "population": 23091
    },
    {
      "countyFIPS": 51131,
      "County Name": "Northampton County",
      "State": "VA",
      "population": 11710
    },
    {
      "countyFIPS": 51133,
      "County Name": "Northumberland County",
      "State": "VA",
      "population": 12095
    },
    {
      "countyFIPS": 51135,
      "County Name": "Nottoway County",
      "State": "VA",
      "population": 15232
    },
    {
      "countyFIPS": 51137,
      "County Name": "Orange County",
      "State": "VA",
      "population": 37051
    },
    {
      "countyFIPS": 51139,
      "County Name": "Page County",
      "State": "VA",
      "population": 23902
    },
    {
      "countyFIPS": 51141,
      "County Name": "Patrick County",
      "State": "VA",
      "population": 17608
    },
    {
      "countyFIPS": 51143,
      "County Name": "Pittsylvania County",
      "State": "VA",
      "population": 60354
    },
    {
      "countyFIPS": 51145,
      "County Name": "Powhatan County",
      "State": "VA",
      "population": 29652
    },
    {
      "countyFIPS": 51147,
      "County Name": "Prince Edward County",
      "State": "VA",
      "population": 22802
    },
    {
      "countyFIPS": 51149,
      "County Name": "Prince George County",
      "State": "VA",
      "population": 38353
    },
    {
      "countyFIPS": 51153,
      "County Name": "Prince William County",
      "State": "VA",
      "population": 470335
    },
    {
      "countyFIPS": 51155,
      "County Name": "Pulaski County",
      "State": "VA",
      "population": 34027
    },
    {
      "countyFIPS": 51157,
      "County Name": "Rappahannock County",
      "State": "VA",
      "population": 7370
    },
    {
      "countyFIPS": 51159,
      "County Name": "Richmond County",
      "State": "VA",
      "population": 9023
    },
    {
      "countyFIPS": 51161,
      "County Name": "Roanoke County",
      "State": "VA",
      "population": 94186
    },
    {
      "countyFIPS": 51163,
      "County Name": "Rockbridge County",
      "State": "VA",
      "population": 22573
    },
    {
      "countyFIPS": 51165,
      "County Name": "Rockingham County",
      "State": "VA",
      "population": 81948
    },
    {
      "countyFIPS": 51167,
      "County Name": "Russell County",
      "State": "VA",
      "population": 26586
    },
    {
      "countyFIPS": 51169,
      "County Name": "Scott County",
      "State": "VA",
      "population": 21566
    },
    {
      "countyFIPS": 51171,
      "County Name": "Shenandoah County",
      "State": "VA",
      "population": 43616
    },
    {
      "countyFIPS": 51173,
      "County Name": "Smyth County",
      "State": "VA",
      "population": 30104
    },
    {
      "countyFIPS": 51175,
      "County Name": "Southampton County",
      "State": "VA",
      "population": 17631
    },
    {
      "countyFIPS": 51177,
      "County Name": "Spotsylvania County",
      "State": "VA",
      "population": 136215
    },
    {
      "countyFIPS": 51179,
      "County Name": "Stafford County",
      "State": "VA",
      "population": 152882
    },
    {
      "countyFIPS": 51181,
      "County Name": "Surry County",
      "State": "VA",
      "population": 6422
    },
    {
      "countyFIPS": 51183,
      "County Name": "Sussex County",
      "State": "VA",
      "population": 11159
    },
    {
      "countyFIPS": 51185,
      "County Name": "Tazewell County",
      "State": "VA",
      "population": 40595
    },
    {
      "countyFIPS": 51187,
      "County Name": "Warren County",
      "State": "VA",
      "population": 40164
    },
    {
      "countyFIPS": 51191,
      "County Name": "Washington County",
      "State": "VA",
      "population": 53740
    },
    {
      "countyFIPS": 51193,
      "County Name": "Westmoreland County",
      "State": "VA",
      "population": 18015
    },
    {
      "countyFIPS": 51195,
      "County Name": "Wise County",
      "State": "VA",
      "population": 37383
    },
    {
      "countyFIPS": 51197,
      "County Name": "Wythe County",
      "State": "VA",
      "population": 28684
    },
    {
      "countyFIPS": 51199,
      "County Name": "York County",
      "State": "VA",
      "population": 68280
    },
    {
      "countyFIPS": 51510,
      "County Name": "Alexandria City",
      "State": "VA",
      "population": 159428
    },
    {
      "countyFIPS": 51520,
      "County Name": "Bristol city",
      "State": "VA",
      "population": 16762
    },
    {
      "countyFIPS": 51530,
      "County Name": "Buena Vista city",
      "State": "VA",
      "population": 6478
    },
    {
      "countyFIPS": 51540,
      "County Name": "Charlottesville City",
      "State": "VA",
      "population": 47266
    },
    {
      "countyFIPS": 51550,
      "County Name": "Chesapeake City",
      "State": "VA",
      "population": 244835
    },
    {
      "countyFIPS": 51570,
      "County Name": "Colonial Heights city",
      "State": "VA",
      "population": 17370
    },
    {
      "countyFIPS": 51580,
      "County Name": "Covington city",
      "State": "VA",
      "population": 5538
    },
    {
      "countyFIPS": 51590,
      "County Name": "Danville City",
      "State": "VA",
      "population": 40044
    },
    {
      "countyFIPS": 51595,
      "County Name": "Emporia city",
      "State": "VA",
      "population": 5346
    },
    {
      "countyFIPS": 51600,
      "County Name": "Fairfax city",
      "State": "VA",
      "population": 24019
    },
    {
      "countyFIPS": 51610,
      "County Name": "Falls Church city",
      "State": "VA",
      "population": 14617
    },
    {
      "countyFIPS": 51620,
      "County Name": "Franklin city",
      "State": "VA",
      "population": 7967
    },
    {
      "countyFIPS": 51630,
      "County Name": "Fredericksburg City",
      "State": "VA",
      "population": 29036
    },
    {
      "countyFIPS": 51640,
      "County Name": "Galax city",
      "State": "VA",
      "population": 6347
    },
    {
      "countyFIPS": 51650,
      "County Name": "Hampton city",
      "State": "VA",
      "population": 134510
    },
    {
      "countyFIPS": 51660,
      "County Name": "Harrisonburg City",
      "State": "VA",
      "population": 53016
    },
    {
      "countyFIPS": 51670,
      "County Name": "Hopewell city",
      "State": "VA",
      "population": 22529
    },
    {
      "countyFIPS": 51678,
      "County Name": "Lexington city",
      "State": "VA",
      "population": 7446
    },
    {
      "countyFIPS": 51680,
      "County Name": "Lynchburg city",
      "State": "VA",
      "population": 82168
    },
    {
      "countyFIPS": 51683,
      "County Name": "Manassas City",
      "State": "VA",
      "population": 41085
    },
    {
      "countyFIPS": 51685,
      "County Name": "Manassas Park city",
      "State": "VA",
      "population": 17478
    },
    {
      "countyFIPS": 51690,
      "County Name": "Martinsville city",
      "State": "VA",
      "population": 12554
    },
    {
      "countyFIPS": 51700,
      "County Name": "Newport News City",
      "State": "VA",
      "population": 179225
    },
    {
      "countyFIPS": 51710,
      "County Name": "Norfolk City",
      "State": "VA",
      "population": 242742
    },
    {
      "countyFIPS": 51720,
      "County Name": "Norton city",
      "State": "VA",
      "population": 3981
    },
    {
      "countyFIPS": 51730,
      "County Name": "Petersburg city",
      "State": "VA",
      "population": 31346
    },
    {
      "countyFIPS": 51735,
      "County Name": "Poquoson city",
      "State": "VA",
      "population": 12271
    },
    {
      "countyFIPS": 51740,
      "County Name": "Portsmouth City",
      "State": "VA",
      "population": 94398
    },
    {
      "countyFIPS": 51750,
      "County Name": "Radford city",
      "State": "VA",
      "population": 18249
    },
    {
      "countyFIPS": 51760,
      "County Name": "Richmond City",
      "State": "VA",
      "population": 230436
    },
    {
      "countyFIPS": 51770,
      "County Name": "Roanoke city",
      "State": "VA",
      "population": 99143
    },
    {
      "countyFIPS": 51775,
      "County Name": "Salem city",
      "State": "VA",
      "population": 25301
    },
    {
      "countyFIPS": 51790,
      "County Name": "Staunton city",
      "State": "VA",
      "population": 24932
    },
    {
      "countyFIPS": 51800,
      "County Name": "Suffolk City",
      "State": "VA",
      "population": 92108
    },
    {
      "countyFIPS": 51810,
      "County Name": "Virginia Beach City",
      "State": "VA",
      "population": 449974
    },
    {
      "countyFIPS": 51820,
      "County Name": "Waynesboro city",
      "State": "VA",
      "population": 22630
    },
    {
      "countyFIPS": 51830,
      "County Name": "Williamsburg City",
      "State": "VA",
      "population": 14954
    },
    {
      "countyFIPS": 51840,
      "County Name": "Winchester city",
      "State": "VA",
      "population": 28078
    },
    {
      "countyFIPS": 0,
      "County Name": "Statewide Unallocated",
      "State": "WA",
      "population": 0
    },
    {
      "countyFIPS": 53001,
      "County Name": "Adams County",
      "State": "WA",
      "population": 19983
    },
    {
      "countyFIPS": 53003,
      "County Name": "Asotin County",
      "State": "WA",
      "population": 22582
    },
    {
      "countyFIPS": 53005,
      "County Name": "Benton County",
      "State": "WA",
      "population": 204390
    },
    {
      "countyFIPS": 53007,
      "County Name": "Chelan County",
      "State": "WA",
      "population": 77200
    },
    {
      "countyFIPS": 53009,
      "County Name": "Clallam County",
      "State": "WA",
      "population": 77331
    },
    {
      "countyFIPS": 53011,
      "County Name": "Clark County",
      "State": "WA",
      "population": 488241
    },
    {
      "countyFIPS": 53013,
      "County Name": "Columbia County",
      "State": "WA",
      "population": 3985
    },
    {
      "countyFIPS": 53015,
      "County Name": "Cowlitz County",
      "State": "WA",
      "population": 110593
    },
    {
      "countyFIPS": 53017,
      "County Name": "Douglas County",
      "State": "WA",
      "population": 43429
    },
    {
      "countyFIPS": 53019,
      "County Name": "Ferry County",
      "State": "WA",
      "population": 7627
    },
    {
      "countyFIPS": 53021,
      "County Name": "Franklin County",
      "State": "WA",
      "population": 95222
    },
    {
      "countyFIPS": 53023,
      "County Name": "Garfield County",
      "State": "WA",
      "population": 2225
    },
    {
      "countyFIPS": 53025,
      "County Name": "Grant County",
      "State": "WA",
      "population": 97733
    },
    {
      "countyFIPS": 53027,
      "County Name": "Grays Harbor County",
      "State": "WA",
      "population": 75061
    },
    {
      "countyFIPS": 53029,
      "County Name": "Island County",
      "State": "WA",
      "population": 85141
    },
    {
      "countyFIPS": 53031,
      "County Name": "Jefferson County",
      "State": "WA",
      "population": 32221
    },
    {
      "countyFIPS": 53033,
      "County Name": "King County",
      "State": "WA",
      "population": 2252782
    },
    {
      "countyFIPS": 53035,
      "County Name": "Kitsap County",
      "State": "WA",
      "population": 271473
    },
    {
      "countyFIPS": 53037,
      "County Name": "Kittitas County",
      "State": "WA",
      "population": 47935
    },
    {
      "countyFIPS": 53039,
      "County Name": "Klickitat County",
      "State": "WA",
      "population": 22425
    },
    {
      "countyFIPS": 53041,
      "County Name": "Lewis County",
      "State": "WA",
      "population": 80707
    },
    {
      "countyFIPS": 53043,
      "County Name": "Lincoln County",
      "State": "WA",
      "population": 10939
    },
    {
      "countyFIPS": 53045,
      "County Name": "Mason County",
      "State": "WA",
      "population": 66768
    },
    {
      "countyFIPS": 53047,
      "County Name": "Okanogan County",
      "State": "WA",
      "population": 42243
    },
    {
      "countyFIPS": 53049,
      "County Name": "Pacific County",
      "State": "WA",
      "population": 22471
    },
    {
      "countyFIPS": 53051,
      "County Name": "Pend Oreille County",
      "State": "WA",
      "population": 13724
    },
    {
      "countyFIPS": 53053,
      "County Name": "Pierce County",
      "State": "WA",
      "population": 904980
    },
    {
      "countyFIPS": 53055,
      "County Name": "San Juan County",
      "State": "WA",
      "population": 17582
    },
    {
      "countyFIPS": 53057,
      "County Name": "Skagit County",
      "State": "WA",
      "population": 129205
    },
    {
      "countyFIPS": 53059,
      "County Name": "Skamania County",
      "State": "WA",
      "population": 12083
    },
    {
      "countyFIPS": 53061,
      "County Name": "Snohomish County",
      "State": "WA",
      "population": 822083
    },
    {
      "countyFIPS": 53063,
      "County Name": "Spokane County",
      "State": "WA",
      "population": 522798
    },
    {
      "countyFIPS": 53065,
      "County Name": "Stevens County",
      "State": "WA",
      "population": 45723
    },
    {
      "countyFIPS": 53067,
      "County Name": "Thurston County",
      "State": "WA",
      "population": 290536
    },
    {
      "countyFIPS": 53069,
      "County Name": "Wahkiakum County",
      "State": "WA",
      "population": 4488
    },
    {
      "countyFIPS": 53071,
      "County Name": "Walla Walla County",
      "State": "WA",
      "population": 60760
    },
    {
      "countyFIPS": 53073,
      "County Name": "Whatcom County",
      "State": "WA",
      "population": 229247
    },
    {
      "countyFIPS": 53075,
      "County Name": "Whitman County",
      "State": "WA",
      "population": 50104
    },
    {
      "countyFIPS": 53077,
      "County Name": "Yakima County",
      "State": "WA",
      "population": 250873
    },
    {
      "countyFIPS": 0,
      "County Name": "Statewide Unallocated",
      "State": "WV",
      "population": 0
    },
    {
      "countyFIPS": 54001,
      "County Name": "Barbour County",
      "State": "WV",
      "population": 16441
    },
    {
      "countyFIPS": 54003,
      "County Name": "Berkeley County",
      "State": "WV",
      "population": 119171
    },
    {
      "countyFIPS": 54005,
      "County Name": "Boone County",
      "State": "WV",
      "population": 21457
    },
    {
      "countyFIPS": 54007,
      "County Name": "Braxton County",
      "State": "WV",
      "population": 13957
    },
    {
      "countyFIPS": 54009,
      "County Name": "Brooke County",
      "State": "WV",
      "population": 21939
    },
    {
      "countyFIPS": 54011,
      "County Name": "Cabell County",
      "State": "WV",
      "population": 91945
    },
    {
      "countyFIPS": 54013,
      "County Name": "Calhoun County",
      "State": "WV",
      "population": 7109
    },
    {
      "countyFIPS": 54015,
      "County Name": "Clay County",
      "State": "WV",
      "population": 8508
    },
    {
      "countyFIPS": 54017,
      "County Name": "Doddridge County",
      "State": "WV",
      "population": 8448
    },
    {
      "countyFIPS": 54019,
      "County Name": "Fayette County",
      "State": "WV",
      "population": 42406
    },
    {
      "countyFIPS": 54021,
      "County Name": "Gilmer County",
      "State": "WV",
      "population": 7823
    },
    {
      "countyFIPS": 54023,
      "County Name": "Grant County",
      "State": "WV",
      "population": 11568
    },
    {
      "countyFIPS": 54025,
      "County Name": "Greenbrier County",
      "State": "WV",
      "population": 34662
    },
    {
      "countyFIPS": 54027,
      "County Name": "Hampshire County",
      "State": "WV",
      "population": 23175
    },
    {
      "countyFIPS": 54029,
      "County Name": "Hancock County",
      "State": "WV",
      "population": 28810
    },
    {
      "countyFIPS": 54031,
      "County Name": "Hardy County",
      "State": "WV",
      "population": 13776
    },
    {
      "countyFIPS": 54033,
      "County Name": "Harrison County",
      "State": "WV",
      "population": 67256
    },
    {
      "countyFIPS": 54035,
      "County Name": "Jackson County",
      "State": "WV",
      "population": 28576
    },
    {
      "countyFIPS": 54037,
      "County Name": "Jefferson County",
      "State": "WV",
      "population": 57146
    },
    {
      "countyFIPS": 54039,
      "County Name": "Kanawha County",
      "State": "WV",
      "population": 178124
    },
    {
      "countyFIPS": 54041,
      "County Name": "Lewis County",
      "State": "WV",
      "population": 15907
    },
    {
      "countyFIPS": 54043,
      "County Name": "Lincoln County",
      "State": "WV",
      "population": 20409
    },
    {
      "countyFIPS": 54045,
      "County Name": "Logan County",
      "State": "WV",
      "population": 32019
    },
    {
      "countyFIPS": 54047,
      "County Name": "McDowell County",
      "State": "WV",
      "population": 17624
    },
    {
      "countyFIPS": 54049,
      "County Name": "Marion County",
      "State": "WV",
      "population": 56072
    },
    {
      "countyFIPS": 54051,
      "County Name": "Marshall County",
      "State": "WV",
      "population": 30531
    },
    {
      "countyFIPS": 54053,
      "County Name": "Mason County",
      "State": "WV",
      "population": 26516
    },
    {
      "countyFIPS": 54055,
      "County Name": "Mercer County",
      "State": "WV",
      "population": 58758
    },
    {
      "countyFIPS": 54057,
      "County Name": "Mineral County",
      "State": "WV",
      "population": 26868
    },
    {
      "countyFIPS": 54059,
      "County Name": "Mingo County",
      "State": "WV",
      "population": 23424
    },
    {
      "countyFIPS": 54061,
      "County Name": "Monongalia County",
      "State": "WV",
      "population": 105612
    },
    {
      "countyFIPS": 54063,
      "County Name": "Monroe County",
      "State": "WV",
      "population": 13275
    },
    {
      "countyFIPS": 54065,
      "County Name": "Morgan County",
      "State": "WV",
      "population": 17884
    },
    {
      "countyFIPS": 54067,
      "County Name": "Nicholas County",
      "State": "WV",
      "population": 24496
    },
    {
      "countyFIPS": 54069,
      "County Name": "Ohio County",
      "State": "WV",
      "population": 41411
    },
    {
      "countyFIPS": 54071,
      "County Name": "Pendleton County",
      "State": "WV",
      "population": 6969
    },
    {
      "countyFIPS": 54073,
      "County Name": "Pleasants County",
      "State": "WV",
      "population": 7460
    },
    {
      "countyFIPS": 54075,
      "County Name": "Pocahontas County",
      "State": "WV",
      "population": 8247
    },
    {
      "countyFIPS": 54077,
      "County Name": "Preston County",
      "State": "WV",
      "population": 33432
    },
    {
      "countyFIPS": 54079,
      "County Name": "Putnam County",
      "State": "WV",
      "population": 56450
    },
    {
      "countyFIPS": 54081,
      "County Name": "Raleigh County",
      "State": "WV",
      "population": 73361
    },
    {
      "countyFIPS": 54083,
      "County Name": "Randolph County",
      "State": "WV",
      "population": 28695
    },
    {
      "countyFIPS": 54085,
      "County Name": "Ritchie County",
      "State": "WV",
      "population": 9554
    },
    {
      "countyFIPS": 54087,
      "County Name": "Roane County",
      "State": "WV",
      "population": 13688
    },
    {
      "countyFIPS": 54089,
      "County Name": "Summers County",
      "State": "WV",
      "population": 12573
    },
    {
      "countyFIPS": 54091,
      "County Name": "Taylor County",
      "State": "WV",
      "population": 16695
    },
    {
      "countyFIPS": 54093,
      "County Name": "Tucker County",
      "State": "WV",
      "population": 6839
    },
    {
      "countyFIPS": 54095,
      "County Name": "Tyler County",
      "State": "WV",
      "population": 8591
    },
    {
      "countyFIPS": 54097,
      "County Name": "Upshur County",
      "State": "WV",
      "population": 24176
    },
    {
      "countyFIPS": 54099,
      "County Name": "Wayne County",
      "State": "WV",
      "population": 39402
    },
    {
      "countyFIPS": 54101,
      "County Name": "Webster County",
      "State": "WV",
      "population": 8114
    },
    {
      "countyFIPS": 54103,
      "County Name": "Wetzel County",
      "State": "WV",
      "population": 15065
    },
    {
      "countyFIPS": 54105,
      "County Name": "Wirt County",
      "State": "WV",
      "population": 5821
    },
    {
      "countyFIPS": 54107,
      "County Name": "Wood County",
      "State": "WV",
      "population": 83518
    },
    {
      "countyFIPS": 54109,
      "County Name": "Wyoming County",
      "State": "WV",
      "population": 20394
    },
    {
      "countyFIPS": 0,
      "County Name": "Statewide Unallocated",
      "State": "WI",
      "population": 0
    },
    {
      "countyFIPS": 55001,
      "County Name": "Adams County",
      "State": "WI",
      "population": 20220
    },
    {
      "countyFIPS": 55003,
      "County Name": "Ashland County",
      "State": "WI",
      "population": 15562
    },
    {
      "countyFIPS": 55005,
      "County Name": "Barron County",
      "State": "WI",
      "population": 45244
    },
    {
      "countyFIPS": 55007,
      "County Name": "Bayfield County",
      "State": "WI",
      "population": 15036
    },
    {
      "countyFIPS": 55009,
      "County Name": "Brown County",
      "State": "WI",
      "population": 264542
    },
    {
      "countyFIPS": 55011,
      "County Name": "Buffalo County",
      "State": "WI",
      "population": 13031
    },
    {
      "countyFIPS": 55013,
      "County Name": "Burnett County",
      "State": "WI",
      "population": 15414
    },
    {
      "countyFIPS": 55015,
      "County Name": "Calumet County",
      "State": "WI",
      "population": 50089
    },
    {
      "countyFIPS": 55017,
      "County Name": "Chippewa County",
      "State": "WI",
      "population": 64658
    },
    {
      "countyFIPS": 55019,
      "County Name": "Clark County",
      "State": "WI",
      "population": 34774
    },
    {
      "countyFIPS": 55021,
      "County Name": "Columbia County",
      "State": "WI",
      "population": 57532
    },
    {
      "countyFIPS": 55023,
      "County Name": "Crawford County",
      "State": "WI",
      "population": 16131
    },
    {
      "countyFIPS": 55025,
      "County Name": "Dane County",
      "State": "WI",
      "population": 546695
    },
    {
      "countyFIPS": 55027,
      "County Name": "Dodge County",
      "State": "WI",
      "population": 87839
    },
    {
      "countyFIPS": 55029,
      "County Name": "Door County",
      "State": "WI",
      "population": 27668
    },
    {
      "countyFIPS": 55031,
      "County Name": "Douglas County",
      "State": "WI",
      "population": 43150
    },
    {
      "countyFIPS": 55033,
      "County Name": "Dunn County",
      "State": "WI",
      "population": 45368
    },
    {
      "countyFIPS": 55035,
      "County Name": "Eau Claire County",
      "State": "WI",
      "population": 104646
    },
    {
      "countyFIPS": 55037,
      "County Name": "Florence County",
      "State": "WI",
      "population": 4295
    },
    {
      "countyFIPS": 55039,
      "County Name": "Fond du Lac County",
      "State": "WI",
      "population": 103403
    },
    {
      "countyFIPS": 55041,
      "County Name": "Forest County",
      "State": "WI",
      "population": 9004
    },
    {
      "countyFIPS": 55043,
      "County Name": "Grant County",
      "State": "WI",
      "population": 51439
    },
    {
      "countyFIPS": 55045,
      "County Name": "Green County",
      "State": "WI",
      "population": 36960
    },
    {
      "countyFIPS": 55047,
      "County Name": "Green Lake County",
      "State": "WI",
      "population": 18913
    },
    {
      "countyFIPS": 55049,
      "County Name": "Iowa County",
      "State": "WI",
      "population": 23678
    },
    {
      "countyFIPS": 55051,
      "County Name": "Iron County",
      "State": "WI",
      "population": 5687
    },
    {
      "countyFIPS": 55053,
      "County Name": "Jackson County",
      "State": "WI",
      "population": 20643
    },
    {
      "countyFIPS": 55055,
      "County Name": "Jefferson County",
      "State": "WI",
      "population": 84769
    },
    {
      "countyFIPS": 55057,
      "County Name": "Juneau County",
      "State": "WI",
      "population": 26687
    },
    {
      "countyFIPS": 55059,
      "County Name": "Kenosha County",
      "State": "WI",
      "population": 169561
    },
    {
      "countyFIPS": 55061,
      "County Name": "Kewaunee County",
      "State": "WI",
      "population": 20434
    },
    {
      "countyFIPS": 55063,
      "County Name": "La Crosse County",
      "State": "WI",
      "population": 118016
    },
    {
      "countyFIPS": 55065,
      "County Name": "Lafayette County",
      "State": "WI",
      "population": 16665
    },
    {
      "countyFIPS": 55067,
      "County Name": "Langlade County",
      "State": "WI",
      "population": 19189
    },
    {
      "countyFIPS": 55069,
      "County Name": "Lincoln County",
      "State": "WI",
      "population": 27593
    },
    {
      "countyFIPS": 55071,
      "County Name": "Manitowoc County",
      "State": "WI",
      "population": 78981
    },
    {
      "countyFIPS": 55073,
      "County Name": "Marathon County",
      "State": "WI",
      "population": 135692
    },
    {
      "countyFIPS": 55075,
      "County Name": "Marinette County",
      "State": "WI",
      "population": 40350
    },
    {
      "countyFIPS": 55077,
      "County Name": "Marquette County",
      "State": "WI",
      "population": 15574
    },
    {
      "countyFIPS": 55078,
      "County Name": "Menominee County",
      "State": "WI",
      "population": 4556
    },
    {
      "countyFIPS": 55079,
      "County Name": "Milwaukee County",
      "State": "WI",
      "population": 945726
    },
    {
      "countyFIPS": 55081,
      "County Name": "Monroe County",
      "State": "WI",
      "population": 46253
    },
    {
      "countyFIPS": 55083,
      "County Name": "Oconto County",
      "State": "WI",
      "population": 37930
    },
    {
      "countyFIPS": 55085,
      "County Name": "Oneida County",
      "State": "WI",
      "population": 35595
    },
    {
      "countyFIPS": 55087,
      "County Name": "Outagamie County",
      "State": "WI",
      "population": 187885
    },
    {
      "countyFIPS": 55089,
      "County Name": "Ozaukee County",
      "State": "WI",
      "population": 89221
    },
    {
      "countyFIPS": 55091,
      "County Name": "Pepin County",
      "State": "WI",
      "population": 7287
    },
    {
      "countyFIPS": 55093,
      "County Name": "Pierce County",
      "State": "WI",
      "population": 42754
    },
    {
      "countyFIPS": 55095,
      "County Name": "Polk County",
      "State": "WI",
      "population": 43783
    },
    {
      "countyFIPS": 55097,
      "County Name": "Portage County",
      "State": "WI",
      "population": 70772
    },
    {
      "countyFIPS": 55099,
      "County Name": "Price County",
      "State": "WI",
      "population": 13351
    },
    {
      "countyFIPS": 55101,
      "County Name": "Racine County",
      "State": "WI",
      "population": 196311
    },
    {
      "countyFIPS": 55103,
      "County Name": "Richland County",
      "State": "WI",
      "population": 17252
    },
    {
      "countyFIPS": 55105,
      "County Name": "Rock County",
      "State": "WI",
      "population": 163354
    },
    {
      "countyFIPS": 55107,
      "County Name": "Rusk County",
      "State": "WI",
      "population": 14178
    },
    {
      "countyFIPS": 55109,
      "County Name": "St. Croix County",
      "State": "WI",
      "population": 90687
    },
    {
      "countyFIPS": 55111,
      "County Name": "Sauk County",
      "State": "WI",
      "population": 64442
    },
    {
      "countyFIPS": 55113,
      "County Name": "Sawyer County",
      "State": "WI",
      "population": 16558
    },
    {
      "countyFIPS": 55115,
      "County Name": "Shawano County",
      "State": "WI",
      "population": 40899
    },
    {
      "countyFIPS": 55117,
      "County Name": "Sheboygan County",
      "State": "WI",
      "population": 115340
    },
    {
      "countyFIPS": 55119,
      "County Name": "Taylor County",
      "State": "WI",
      "population": 20343
    },
    {
      "countyFIPS": 55121,
      "County Name": "Trempealeau County",
      "State": "WI",
      "population": 29649
    },
    {
      "countyFIPS": 55123,
      "County Name": "Vernon County",
      "State": "WI",
      "population": 30822
    },
    {
      "countyFIPS": 55125,
      "County Name": "Vilas County",
      "State": "WI",
      "population": 22195
    },
    {
      "countyFIPS": 55127,
      "County Name": "Walworth County",
      "State": "WI",
      "population": 103868
    },
    {
      "countyFIPS": 55129,
      "County Name": "Washburn County",
      "State": "WI",
      "population": 15720
    },
    {
      "countyFIPS": 55131,
      "County Name": "Washington County",
      "State": "WI",
      "population": 136034
    },
    {
      "countyFIPS": 55133,
      "County Name": "Waukesha County",
      "State": "WI",
      "population": 404198
    },
    {
      "countyFIPS": 55135,
      "County Name": "Waupaca County",
      "State": "WI",
      "population": 50990
    },
    {
      "countyFIPS": 55137,
      "County Name": "Waushara County",
      "State": "WI",
      "population": 24443
    },
    {
      "countyFIPS": 55139,
      "County Name": "Winnebago County",
      "State": "WI",
      "population": 171907
    },
    {
      "countyFIPS": 55141,
      "County Name": "Wood County",
      "State": "WI",
      "population": 72999
    },
    {
      "countyFIPS": 0,
      "County Name": "Statewide Unallocated",
      "State": "WY",
      "population": 0
    },
    {
      "countyFIPS": 56001,
      "County Name": "Albany County",
      "State": "WY",
      "population": 38880
    },
    {
      "countyFIPS": 56003,
      "County Name": "Big Horn County",
      "State": "WY",
      "population": 11790
    },
    {
      "countyFIPS": 56005,
      "County Name": "Campbell County",
      "State": "WY",
      "population": 46341
    },
    {
      "countyFIPS": 56007,
      "County Name": "Carbon County",
      "State": "WY",
      "population": 14800
    },
    {
      "countyFIPS": 56009,
      "County Name": "Converse County",
      "State": "WY",
      "population": 13822
    },
    {
      "countyFIPS": 56011,
      "County Name": "Crook County",
      "State": "WY",
      "population": 7584
    },
    {
      "countyFIPS": 56013,
      "County Name": "Fremont County",
      "State": "WY",
      "population": 39261
    },
    {
      "countyFIPS": 56015,
      "County Name": "Goshen County",
      "State": "WY",
      "population": 13211
    },
    {
      "countyFIPS": 56017,
      "County Name": "Hot Springs County",
      "State": "WY",
      "population": 4413
    },
    {
      "countyFIPS": 56019,
      "County Name": "Johnson County",
      "State": "WY",
      "population": 8445
    },
    {
      "countyFIPS": 56021,
      "County Name": "Laramie County",
      "State": "WY",
      "population": 99500
    },
    {
      "countyFIPS": 56023,
      "County Name": "Lincoln County",
      "State": "WY",
      "population": 19830
    },
    {
      "countyFIPS": 56025,
      "County Name": "Natrona County",
      "State": "WY",
      "population": 79858
    },
    {
      "countyFIPS": 56027,
      "County Name": "Niobrara County",
      "State": "WY",
      "population": 2356
    },
    {
      "countyFIPS": 56029,
      "County Name": "Park County",
      "State": "WY",
      "population": 29194
    },
    {
      "countyFIPS": 56031,
      "County Name": "Platte County",
      "State": "WY",
      "population": 8393
    },
    {
      "countyFIPS": 56033,
      "County Name": "Sheridan County",
      "State": "WY",
      "population": 30485
    },
    {
      "countyFIPS": 56035,
      "County Name": "Sublette County",
      "State": "WY",
      "population": 9831
    },
    {
      "countyFIPS": 56037,
      "County Name": "Sweetwater County",
      "State": "WY",
      "population": 42343
    },
    {
      "countyFIPS": 56039,
      "County Name": "Teton County",
      "State": "WY",
      "population": 23464
    },
    {
      "countyFIPS": 56041,
      "County Name": "Uinta County",
      "State": "WY",
      "population": 20226
    },
    {
      "countyFIPS": 56043,
      "County Name": "Washakie County",
      "State": "WY",
      "population": 7805
    },
    {
      "countyFIPS": 56045,
      "County Name": "Weston County",
      "State": "WY",
      "population": 6927
    }
  ]