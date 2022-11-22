<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0" 
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<?xsl-stylesheet type="text/css" href="./css/style.css"?>
<xsl:template match="/">
<html>
  <head>
    <head>
      <!-- Required meta tags -->
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <!-- Bootstrap CSS -->
      <link rel="stylesheet" href="./css/style.css"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto|Varela+Round"/>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/all.css"/>
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

        <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
    
        <script src = "https://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
        <script src = "https://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular-route.min.js"></script>
        <script src="./js/script.js" ></script>
        <script src="./js/crud.js"></script>
        <script src="./js/imageUpload.js"></script>
    </head>
  </head>
  <body class="back-image">
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color: hsl(0, 0%, 96%)">
        <a class="navbar-brand" href="#" >
            <img src="./images/logo.png" class="navbar-image"/>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="w3-bar collapse navbar-collapse" id="navbarNav" >
          <a href="index.html" class="w3-bar-item w3-button navbar-nav ml-auto" id="nav-text1">Home</a>
          <a href="services.html" class="w3-bar-item w3-button" id="nav-text2" >Services</a>
          <div class="w3-dropdown-hover">
            <button class="w3-button" id="nav-text3">
              User Profile <i class="fa fa-caret-down" ></i>
            </button>
            <div id="demo" class="w3-dropdown-content w3-bar-block w3-card">
              <a href="/view_profile" class="w3-bar-item w3-button" id="nav-text4">View</a>
              <a href="/update_profile" class="w3-bar-item w3-button" id="nav-text4">Update</a>    
              <a href="delete_profile.html" class="w3-bar-item w3-button" id="nav-text4">Delete</a>
            </div>
          </div>
      </div>
      </nav>
    <div class="container-fluid back-image">
      <div class="row">
          <div class="col-12 text-center">
              <h2 class="register-heading">Find Driver service details Here</h2>
              <p class="register-desc">Select the appropriate category</p>
          </div>
      </div>     
      <div class="row" ng-app="instantSearch">
        <div class="col-md-8 m-auto text-center p-2" ng-controller="InstantSearchController" >
            <section class="p-5">
              <div class="m-auto p-3">
                Filter Here: <input type="text" ng-model="searchText" placeholder="Enter your search terms"/>
              </div>
                  <div class="table-responsive">
                       <table class="table table-hover bg-white">
                          <thead class="bg-dark text-light">
                            <tr>
                              <th>Name</th>
                              <th>Age</th>
                              <th>Address</th>
                              <th>Gender</th>
                              <th>Phone Number</th>
                              <th>Type</th>
                              <th>Further Information</th>
                            </tr>
                          </thead>
                          <xsl:for-each select="Driver/Workers/Worker">
                            <tr ng-repeat="user in users | filter: searchText">
                              <td><xsl:value-of select="Name"/></td>
                              <td><xsl:value-of select="Age"/></td>
                              <td><xsl:value-of select="Address"/></td>
                              <td><xsl:value-of select="Gender"/></td>
                              <td><xsl:value-of select="PhoneNumber"/></td>
                              <td><xsl:value-of select="Type"/></td>
                              <td><xsl:value-of select="FurtherInfo"/>
                                <a href="info.html" class="know-more-link"> Get More Info
                                  <svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-arrow-right-short" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                      fill-rule="evenodd"
                                      d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                                    />
                                  </svg>
                                </a>
                              </td>
 
                            </tr>
                          </xsl:for-each>
                        </table>
                  </div>
              </section>
          </div>
      </div>
    </div>
 </body>
 </html>
</xsl:template>
</xsl:stylesheet>
