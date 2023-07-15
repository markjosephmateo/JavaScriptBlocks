console.log ('connected')

function solution(blocks) {
    const n = blocks.length;
    let maxDistance = 0;
  
    for (let i = 0; i < n; i++) {
      let j = i;
      let k = i;
  
      while (k < n - 1 && blocks[k] <= blocks[k + 1]) {
        k++;
      }
  
      while (j > 0 && blocks[j] <= blocks[j - 1]) {
        j--;
      }
  
      maxDistance = Math.max(maxDistance, k - j + 1);
    }
  
    return maxDistance;
  }
  
  function drawGraph(blocks, startBlockIndex, graphId) {
    const labels = blocks.map((_, index) => `Block ${index}`);
  
    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Block Height',
          data: blocks,
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
        },
      ],
    };
  
    const options = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };
  
    const ctx = document.getElementById(graphId).getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options,
    });
  }
  
  // Example 1
  const blocks1 = [2, 6, 8, 5];
  console.log('Example 1');
  console.log('Blocks:', blocks1);
  console.log('Maximum Distance:', solution(blocks1));
  console.log('Graph:');
  drawGraph(blocks1, 0, 'graph1');
  console.log();
  
  // Example 2
  const blocks2 = [1, 5, 5, 2, 6];
  console.log('Example 2');
  console.log('Blocks:', blocks2);
  console.log('Maximum Distance:', solution(blocks2));
  console.log('Graph:');
  drawGraph(blocks2, 3, 'graph2');
  console.log();
  