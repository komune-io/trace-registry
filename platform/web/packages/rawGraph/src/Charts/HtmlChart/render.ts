
export function render(
  node,
  data,
) {
  console.log(data)
  const a = `
    <div style="
      border: 2px solid #f7941d; 
      border-radius: 5px; 
      font-family: Arial, sans-serif;
      overflow: hidden;
    ">
      <!-- Header -->
      <div style="
        background-color: #f7941d; 
        color: #fff; 
        padding: 10px; 
        font-weight: bold; 
        display: flex; 
        justify-content: space-between;
        align-items: center;
      ">
        <span>Synthèse économique</span>
        <span style="font-size: 1.2em; font-weight: normal;">+</span>
      </div>
    
      <!-- Body: Two columns -->
      <div style="
        display: flex; 
        flex-wrap: nowrap;
        background-color: #fff;
      ">
        <!-- Left (Coûts) -->
        <div style="
          flex: 1; 
          padding: 10px; 
          color: #fff;
        ">
          <h3 style="margin: 0 0 10px; font-size: 1.2em; font-weight: bold; background: linear-gradient(to bottom, #ff0000, #b70000);">COÛTS</h3>
          <ul style="margin: 0; padding: 0 0 0 18px; list-style: disc; color: #000;">
            <li><strong>CAPEX&nbsp;:</strong> 2 066 000 EUR Projet</li>
            <li><strong>OPEX&nbsp;:</strong> 582 000 EUR /an</li>
          </ul>
        </div>
    
        <!-- Right (Gains) -->
        <div style="
          flex: 1; 
          padding: 10px; 
          color: #fff;
        ">
          <h3 style="margin: 0 0 10px; font-size: 1.2em; font-weight: bold; background: linear-gradient(to bottom, #008000, #046304);">GAINS</h3>
          <ul style="margin: 0; padding: 0 0 0 18px; list-style: disc; color: #000;">
            <li><strong>ÉCONOMIE D'ÉNERGIE&nbsp;:</strong> 1&nbsp;100&nbsp;tep/an</li>
            <li><strong>EMISSIONS GES ÉVITÉES&nbsp;:</strong> 4&nbsp;164&nbsp;tCO2e/an</li>
          </ul>
        </div>
      </div>
    </div>


    <a href="/catalogues/100m-project-54/" class="editor-link ltr" dir="ltr">
      <span data-lexical-text="true">Etude de cas 54. Enseignement | Etats-Unis</span>
    </a>
   `
  node.innerHTML = a
}
