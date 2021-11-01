  export const optionsProvider = (items : any) => ({
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'spline',
      zoom:'xy'
    },
    title:'',
    xAxis: {
    	type: "datetime",
      title: {
        text: ''        
      },
      labels: {
        formatter: function() {
          return  this.y;
        }
      }
    }, 
    yAxis: {
      title: {
        text: ''        
      },
      labels: {
        formatter: function() {
          return  this.x;
        }
      }
    }, 
  


  series: items
  })