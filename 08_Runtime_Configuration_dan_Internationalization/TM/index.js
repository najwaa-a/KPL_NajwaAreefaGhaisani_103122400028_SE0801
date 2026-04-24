require('dotenv').config() 
// ini dia nge import dotenv untuk bisa baca file .ENV

async function ambilData(angka) {
    try {
        const respon = await fetch(process.env.BASE_API, {
            headers: {
                'Accept': 'application/json'
            }
        });

        if (!respon.ok) throw new Error();

        const data = await respon.json();
        
        const rateCNH = data.idr.cnh;
        const rateEUR = data.idr.eur;
        const tanggal = new Date(data.date);

        const formatTanggal = new Intl.DateTimeFormat('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        }).format(tanggal);

        const formatIDR = "Rp" + new Intl.NumberFormat('id-ID').format(angka);

        const nilaiCNH = (angka * rateCNH).toFixed(2);
        const formatCNH = 
            "CNH" + 
            new Intl.NumberFormat("id-ID", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }).format(nilaiCNH);

        const nilaiEUR = (angka * rateEUR).toFixed(2);
        const formatEUR =
            new Intl.NumberFormat("id-ID", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }).format(nilaiEUR) + " €";

            console.log(
                `Kurs ${formatIDR} pada ${formatTanggal} adalah ${formatCNH} dan ${formatEUR}`,
            );
    } catch (error) {
        console.error("Error:", error.message);
    }
}

const testCases = [25000, 50000, 100000];

(async () => {
    for (const angka of testCases) {
        await ambilData(angka);
    }
})();




