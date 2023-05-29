const incomeSelect = document.getElementById('income');

const makeSelect = document.getElementById('make');

const modelSelect = document.getElementById('model');

const imageSelect = document.getElementById('carImage')

const carLinksContainer = document.getElementById('carLinks')




incomeSelect.addEventListener('change', function() {
    makeSelect.disabled = false
    resetSelect(makeSelect)
    resetSelect(modelSelect)
    imageSelect.src = ''
    carLinksContainer.innerHTML = ''
    const incomeIndex = parseInt(incomeSelect.value)
    if (incomeIndex === 1) {
        populateMakes(['Kia'])
    } else if (incomeIndex === 2) {
        populateMakes(['Kia','Honda'])
    } else if (incomeIndex === 3) {
        populateMakes(['Kia','Honda','BMW'])
    } else if (incomeIndex === 4) {
        populateMakes(['Kia','Honda','BMW','Ferrari'])
    } else if (incomeIndex === 0) {
        makeSelect.disabled = true
        makeSelect.innerHTML = '<option value="" selected disabled>Select your income first</option>';
    }
})


makeSelect.addEventListener('change', function() {
    modelSelect.disabled = false
    resetSelect(modelSelect)
    imageSelect.src = ''
    carLinksContainer.innerHTML = ''
    const selectedMake = makeSelect.value
    if (selectedMake === 'Kia') {
        populatedModels(['Sorrento','Soul'])
    } else if (selectedMake === 'Honda') {
        populatedModels(['Civic','Accord'])
    } else if (selectedMake === 'BMW') {
        populatedModels(['3 Series','5 Series'])
    } else if (selectedMake === 'Ferrari') {
        populatedModels(['Roma','Tributo'])
    } 
})

modelSelect.addEventListener('change', function() {

    const selectedModel = modelSelect.value;
        if (selectedModel) {
            imageSelect.src = getImageUrl(selectedModel)
            populateCarLinks(selectedModel)
        } else {
            imageSelect.src = ''
            carLinksContainer.innerHTML = ''
        }
})




function resetSelect(selectElement) {
    selectElement.innerHTML = '<option value= " " selected disabled> Select an option</option>'

}

function populateMakes(makes) {
    makes.forEach(function(make) {
        const option = document.createElement('option')
        option.value = make
        option.textContent = make
        makeSelect.appendChild(option)
    })


    
}

function populatedModels(models) {
    models.forEach(function(model) {
        const option = document.createElement('option')
        option.value = model
        option.textContent = model
        modelSelect.appendChild(option)
    })

}

function getImageUrl (model) {
    const imageUrl = {
        'Sorrento': 'https://media.ed.edmunds-media.com/kia/sorento/2022/oem/2022_kia_sorento_4dr-suv_sx_fq_oem_1_1600.jpg',
        'Soul': 'https://hips.hearstapps.com/hmg-prod/images/18863-2023-soul-1651667384.jpg?crop=0.541xw:0.720xh;0.350xw,0.280xh&resize=640:*',
        'Civic': 'https://www.motortrend.com/uploads/2022/12/2022-honda-civic-hybrid-01.jpg',
        'Accord': 'https://www.motortrend.com/uploads/2022/02/2023-Honda-Accord-rendering-01.jpg',
        '3 Series': 'https://hips.hearstapps.com/hmg-prod/images/2023-bmw-3-series-114-1652798465.jpg',
        '5 Series': 'https://mysterio.yahoo.com/mysterio/api/4CF91E2C464E97794A314BE399F3CFE605BFD70325BA48DE42CAB0D063E96A72/autoblog/resizefill_w660_h372;quality_80;format_webp;cc_31536000;/https://s.aolcdn.com/os/ab/_cms/2023/05/24011400/P90505005.jpg',
        'Roma': 'https://www.motortrend.com/uploads/2023/04/2023-Ferrari-Roma-exterior-8.jpg?fit=around%7C875:492.1875',
        'Tributo': 'https://hips.hearstapps.com/hmg-prod/images/2020-ferrari-f8-tributo-214-1590706671.jpg?crop=0.696xw:0.538xh;0.162xw,0.214xh&resize=1200:*',
    }

   

    return imageUrl[model] || ''
}


function populateCarLinks (model) {
    const carWebsiteUrls = {
        'Sorrento': 'https://www.kia.com/us/en/sorento',
        'Soul': 'https://www.kia.com/us/en/soul',
        'Civic': 'https://automobiles.honda.com/civic-sedan',
        'Accord': 'https://automobiles.honda.com/accord-sedan?experience=shop&cid=search_google_hgr_low_general_my23-accord_sustain-general_nalng_brd_exact&gclsrc=aw.ds&gad=1&gclid=Cj0KCQjwmtGjBhDhARIsAEqfDEeYEAt8OEPMxRd64tF1Q2jlCUudoOA1naey-ycSijwon6vK7OPcbX0aAs9VEALw_wcB&gclsrc=aw.ds',
        '3 Series': 'https://www.bmwusa.com/vehicles/3-series/sedan/overview.html',
        '5 Series': 'https://www.bmwusa.com/vehicles/5-series/sedan/overview.html?cid=GOOGLE_G%7CBMW%7CNAT%7CT1%7C5+Series%7CModel%7CAO%7CAlways+On%7CExact_5+Series+%7C+Brand+Core+%7C+Exact&tier=tier1&maco=national&ch=paid_search&veh=NA&gclsrc=aw.ds&ds_rl=1255066&gad=1&gclid=Cj0KCQjwmtGjBhDhARIsAEqfDEf4AvytQz3XayqRPaH8tPMrWuWMlksD8DYDZslSvq47v_b-QgCSsWEaAhMeEALw_wcB&gclsrc=aw.ds',
        'Roma': 'https://www.caranddriver.com/ferrari/roma',
        'Tributo': 'https://www.ferrari.com/en-EN/auto/f8-tributo',


    }
    const carLinks = []
    for (const [carModels,url] of Object.entries(carWebsiteUrls)) {
        if (carModels === model) {
            const link = document.createElement('a')
            link.href = url
            link.className = "car-link h2"
            link.target = "_blank"
            link.textContent = `For more Information about ${carModels}`
            carLinks.push(link)
            
        }
    }
    carLinksContainer.innerHTML = ''
    for (const link of carLinks) {
        carLinksContainer.appendChild(link)
      
    }
}