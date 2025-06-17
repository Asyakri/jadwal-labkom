import React, { useState } from 'react';
import { Clock, MapPin, Users, Phone, Calendar, User, BookOpen } from 'lucide-react';
import './jadwal.css';

interface Schedule {
  id: number;
  hari: string;
  jam: string;
  ruangan: string;
  matkul: string;
  dosen: string;
  asisten?: string;
  prodi: string;
  whatsapp?: string;
  kirimAsdos?: string;
}

const LabScheduleCards = () => {
  const [selectedDay, setSelectedDay] = useState('Semua');
  const [selectedRoom, setSelectedRoom] = useState('Semua');
  const [selectedProdi, setSelectedProdi] = useState('Semua');
  const [selectedDosen, setSelectedDosen] = useState('Semua');
  const [selectedAsisten, setSelectedAsisten] = useState('Semua');
  const [searchTerm, setSearchTerm] = useState('');

  const handleWhatsAppBroadcast = (schedule: Schedule) => {
    const targetName = (schedule.asisten && schedule.kirimAsdos && schedule.kirimAsdos !== "Tidak ada") ? schedule.asisten : schedule.dosen;
    const targetNumber = (schedule.asisten && schedule.kirimAsdos && schedule.kirimAsdos !== "Tidak ada") ? schedule.kirimAsdos : schedule.whatsapp;
    if (targetNumber) {
      const message = generateLabReminderMessage(schedule, targetName);
      const encodedMessage = encodeURIComponent(message);
      window.open(`https://wa.me/${targetNumber}?text=${encodedMessage}`, '_blank');
    }
  };

  const generateLabReminderMessage = (schedule: Schedule, targetName: string) => `
Yth. ${targetName}
Assalamu'alaikum warahmatullahi wabarakatuh.
Salam Sejahtera untuk kita semua

*Note: Pesan Otomatis LabKom Bumigora*
Kami Admin LabKom ingin Mengingatkan bahwa Bapak/Ibu Dosen dijadwalkan mengajar matakuliah *${schedule.matkul}* Pada:
Hari: ${schedule.hari}
Pukul: ${schedule.jam}
Ruang: ${schedule.ruangan}
Program Studi: ${schedule.prodi}
Untuk melihat jadwal lengkap, Bapak/Ibu dapat mengakses tautan berikut:
https://docs.google.com/spreadsheets/d/1nxPY1av4haF82O3qU9cnEcjsa8-JkHYh/edit?gid=366048715#gid=366048715

Demikian pengingat ini kami sampaikan.

Mohon maaf bila ada kekeliruan dalam informasi, dan terima kasih atas perhatian serta kerjasamanya.
Wassalamu'alaikum warahmatullahi wabarakatuh.

Hormat Kami

LabkomBumigora
`;

  const scheduleData = [
    {
      "id": 1,
      "dosen": "HASBULLAH. M.Sn/ Qatrunnada, M.Pd.",
      "matkul": "ANIMASI EKSPERIMENTAL",
      "prodi": "S1DKV/VIII/A",
      "ruangan": "LAB DKV 2",
      "asisten": "",
      "jam": "13.50-16.20",
      "hari": "Gabung",
      "whatsapp": "",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 2,
      "dosen": "MUDAWIL QULUB. M.Kom",
      "matkul": "DESAIN UI/UX",
      "prodi": "S1BISDIG/VI/A",
      "ruangan": "LAB DKV 2",
      "asisten": "",
      "jam": "08.00-09.40",
      "hari": "Jumat",
      "whatsapp": "6281997946977",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 3,
      "dosen": "Dr. Zainuddin Abdussamad, S.S., M. Hum",
      "matkul": "Listening Comprehension 2",
      "prodi": "S1SASING/II/A",
      "ruangan": "LAB DKV 2",
      "asisten": "",
      "jam": "14.00-16.20",
      "hari": "Jumat",
      "whatsapp": "",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 4,
      "dosen": "Dr. Zainuddin Abdussamad, S.S., M. Hum",
      "matkul": "Listening Comprehension 4",
      "prodi": "S1SASING/IV/A",
      "ruangan": "LAB DKV 2",
      "asisten": "",
      "jam": "14.00-16.20",
      "hari": "Jumat",
      "whatsapp": "",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 5,
      "dosen": "Rosidah Alawiyah, M.Pd",
      "matkul": "Listening Comprehension 2",
      "prodi": "S1SASTRA/II/A",
      "ruangan": "LAB DKV 2",
      "asisten": "",
      "jam": "17.10-19.00",
      "hari": "Jumat",
      "whatsapp": "6287865503231",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 6,
      "dosen": "Rosidah Alawiyah, M.Pd",
      "matkul": "Listening Comprehension 4",
      "prodi": "S1SASTRA/IV/A",
      "ruangan": "LAB DKV 2",
      "asisten": "",
      "jam": "14.40-16.20",
      "hari": "Jumat",
      "whatsapp": "6287865503231",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 7,
      "dosen": "KHAIRAN MARZUKI. M.Kom",
      "matkul": "JARINGAN KOMPUTER",
      "prodi": "S1ILKOM/IV/E",
      "ruangan": "LAB RPL 4",
      "asisten": "Faisal",
      "jam": "13:50-14:40",
      "hari": "Jumat",
      "whatsapp": "6285933083240",
      "kirimAsdos": "6281236108782"
    },
    {
      "id": 8,
      "dosen": "Dr. Husain. M.Kom",
      "matkul": "PENGANTAR JARINGAN KOMPUTER",
      "prodi": "D3RPLA/II/A",
      "ruangan": "LAB RPL 1",
      "asisten": "Azral Satriani",
      "jam": "08.00-09.40",
      "hari": "Jumat",
      "whatsapp": "6281805745587",
      "kirimAsdos": "6285238751525"
    },
    {
      "id": 9,
      "dosen": "HARIRI. S.Kom",
      "matkul": "PEMROGRAMAN WEB I",
      "prodi": "D3SI/II/A",
      "ruangan": "LAB RPL 1",
      "asisten": "",
      "jam": "13.50-15.30",
      "hari": "Jumat",
      "whatsapp": "6281935103137",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 10,
      "dosen": "KURNIADIN ABDUL LATIF.M.Kom",
      "matkul": "PEMROGRAMAN WEB I",
      "prodi": "D3SI/II/A",
      "ruangan": "LAB RPL 1",
      "asisten": "",
      "jam": "13.50-15.30",
      "hari": "Jumat",
      "whatsapp": "6282349065484",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 11,
      "dosen": "Muhammad Tahir, S.Pd., M.Msi.",
      "matkul": "TESTING DAN IMPLEMENTASI PERANGKAT LUNAK",
      "prodi": "D3SI/VI/A",
      "ruangan": "LAB RPL 2",
      "asisten": "",
      "jam": "13.50-15.30",
      "hari": "Jumat",
      "whatsapp": "6281381652460",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 12,
      "dosen": "RAISUL AZHAR. ST.,M.T",
      "matkul": "JARINGAN KOMPUTER",
      "prodi": "S1ILKOM/IV/C1",
      "ruangan": "LAB RPL 1",
      "asisten": "Naufal Hanif",
      "jam": "09.40-10.30",
      "hari": "Jumat",
      "whatsapp": "6281917032207",
      "kirimAsdos": "6281558860855"
    },
    {
      "id": 13,
      "dosen": "RAISUL AZHAR. ST.,M.T",
      "matkul": "JARINGAN KOMPUTER",
      "prodi": "S1ILKOM/IV/C2",
      "ruangan": "LAB RPL 1",
      "asisten": "",
      "jam": "09.40-10.30",
      "hari": "Jumat",
      "whatsapp": "6281917032207",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 14,
      "dosen": "RAISUL AZHAR. ST.,M.T",
      "matkul": "JARINGAN KOMPUTER",
      "prodi": "S1ILKOM/IV/D1",
      "ruangan": "LAB RPL 1",
      "asisten": "Naufal Hanif",
      "jam": "09.40-10.30",
      "hari": "Jumat",
      "whatsapp": "6281917032207",
      "kirimAsdos": "6281558860855"
    },
    {
      "id": 15,
      "dosen": "RAISUL AZHAR. ST.,M.T",
      "matkul": "JARINGAN KOMPUTER",
      "prodi": "S1ILKOM/IV/D2",
      "ruangan": "LAB RPL 1",
      "asisten": "",
      "jam": "10.30-11.20",
      "hari": "Jumat",
      "whatsapp": "6281917032207",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 16,
      "dosen": "MAYADI. M.Kom",
      "matkul": "PENGANTAR KOMPUTER DAN INTERNET",
      "prodi": "S1MANAJEMEN/II/C",
      "ruangan": "LAB RPL 1",
      "asisten": "",
      "jam": "15.30-17.10",
      "hari": "Jumat",
      "whatsapp": "6287753166756",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 17,
      "dosen": "RAISUL AZHAR. ST.,M.T",
      "matkul": "JARINGAN KOMPUTER",
      "prodi": "S1ILKOM/IV/B1",
      "ruangan": "LAB RPL 2",
      "asisten": "Naufal Hanif",
      "jam": "15.30-16.20",
      "hari": "Jumat",
      "whatsapp": "6281917032207",
      "kirimAsdos": "6281558860855"
    },
    {
      "id": 18,
      "dosen": "RAISUL AZHAR. ST.,M.T",
      "matkul": "JARINGAN KOMPUTER",
      "prodi": "S1ILKOM/IV/B2",
      "ruangan": "LAB RPL 2",
      "asisten": "Faisal",
      "jam": "15.30-16.20",
      "hari": "Jumat",
      "whatsapp": "6281917032207",
      "kirimAsdos": "6281236108782"
    },
    {
      "id": 19,
      "dosen": "Ir. ANTHONY ANGGRAWAN, M.T.,Ph.D",
      "matkul": "DATA MINING LANJUT",
      "prodi": "S1ILKOM/VI/A",
      "ruangan": "LAB RPL 2",
      "asisten": "Tanwir",
      "jam": "09.40-11.20",
      "hari": "Jumat",
      "whatsapp": "6287865503231",
      "kirimAsdos": "6287865503231"
    },
    {
      "id": 20,
      "dosen": "HAIRANI. S.Kom.,M.Eng",
      "matkul": "DATA MINING LANJUT",
      "prodi": "S1ILKOM/VI/A",
      "ruangan": "LAB RPL 2",
      "asisten": "Tanwir",
      "jam": "09.40-11.20",
      "hari": "Jumat",
      "whatsapp": "6287839793970",
      "kirimAsdos": "6287865503231"
    },
    {
      "id": 21,
      "dosen": "HAIRANI. S.Kom.,M.Eng",
      "matkul": "DATA MINING LANJUT",
      "prodi": "S1ILKOM/VI/B",
      "ruangan": "LAB RPL 2",
      "asisten": "Tanwir",
      "jam": "08.00-09.40",
      "hari": "Jumat",
      "whatsapp": "6287839793970",
      "kirimAsdos": "6287865503231"
    },
    {
      "id": 22,
      "dosen": "Dr.GALIH HENDRO MARTONO, M.Eng",
      "matkul": "TEKNOLOGI BIG DATA",
      "prodi": "S1TI/VIII/A",
      "ruangan": "LAB RPL 2",
      "asisten": "Amrullah Husaini",
      "jam": "08.50-09.40",
      "hari": "Jumat",
      "whatsapp": "6287839304219",
      "kirimAsdos": "6281548743584"
    },
    {
      "id": 23,
      "dosen": "ONDI ASRONI, M.Kom.",
      "matkul": "DATABASE SYSTEM",
      "prodi": "S1BISDIG/II/A",
      "ruangan": "LAB RPL 3",
      "asisten": "",
      "jam": "08.00-09.40",
      "hari": "Jumat",
      "whatsapp": "6281808506723",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 24,
      "dosen": "Fahry, M.Kom",
      "matkul": "PEMROGRAMAN WEB",
      "prodi": "S1BISDIG/II/A",
      "ruangan": "LAB RPL 3",
      "asisten": "",
      "jam": "14.00-15.20",
      "hari": "Jumat",
      "whatsapp": "6287705561599",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 25,
      "dosen": "I Gede Anjas Kharismanata. S.ds., M.Ds",
      "matkul": "KOMPUTER GRAFIS I",
      "prodi": "S1DKV/II/B",
      "ruangan": "LAB RPL 3",
      "asisten": "Khaerul Ihsan",
      "jam": "09.40-11.20",
      "hari": "Jumat",
      "whatsapp": "6287865503231",
      "kirimAsdos": "6282350021288"
    },
    {
      "id": 26,
      "dosen": "Muhammad Tahir, S.Pd., M.Msi.",
      "matkul": "STRUKTUR DATA",
      "prodi": "S1TI/II/A",
      "ruangan": "LAB RPL 4",
      "asisten": "",
      "jam": "08.00-08.50",
      "hari": "Jumat",
      "whatsapp": "6281381652460",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 27,
      "dosen": "Muhammad Tahir, S.Pd., M.Msi.",
      "matkul": "STRUKTUR DATA",
      "prodi": "S1TI/II/B",
      "ruangan": "LAB RPL 4",
      "asisten": "",
      "jam": "08.50-09.40",
      "hari": "Jumat",
      "whatsapp": "6281381652460",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 28,
      "dosen": "L. ZAZULI AZHAR MARDEDI. M.Kom",
      "matkul": "PEMROGRAMAN BERORIENTASI OBJEK",
      "prodi": "S1PTI/IV/A",
      "ruangan": "LAB DKV 2",
      "asisten": "",
      "jam": "13.20-14.40",
      "hari": "Kamis",
      "whatsapp": "6281805208998",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 29,
      "dosen": "JULIANA PALIT, S.Kom., MMSI",
      "whatsapp": "6281289748680",
      "matkul": "PEMROGRAMAN LANJUT",
      "prodi": "S1BISDIG/IV/A",
      "ruangan": "LAB DKV 2",
      "asisten": "Lalu Izaq Nune Indraswari",
      "jam": "12.10-13.50",
      "hari": "Sabtu",
      "kirimAsdos": "6287865678987"
    },
    {
      "id": 30,
      "dosen": "Dr. I Nyoman Yoga Sumadewa, S.Kom., M.Sn",
      "whatsapp": "6281221768401",
      "matkul": "VISUAL EFECT & EDITING",
      "prodi": "S1DKV/VIII/A",
      "ruangan": "LAB RPL 4",
      "asisten": "Khaerul Ihsan",
      "jam": "09.40-12.10",
      "hari": "Sabtu",
      "kirimAsdos": "6282350021288"
    },
    {
      "id": 31,
      "dosen": "HASBULLAH. M.Sn/ Qatrunnada, M.Pd.",
      "whatsapp": "6282350021288",
      "matkul": "ANIMASI DASAR",
      "prodi": "S1DKV/II/B",
      "ruangan": "LAB RPL 1",
      "asisten": "Lalu Nanda Cahya Ardi",
      "jam": "13.00-14.40",
      "hari": "Sabtu",
      "kirimAsdos": "6287710632909"
    },
    {
      "id": 32,
      "dosen": "MUDAWIL QULUB. M.Kom",
      "whatsapp": "6281997946977",
      "matkul": "E-COMMERS",
      "prodi": "S1ILKOM/II/C",
      "ruangan": "LAB RPL 1",
      "asisten": "-",
      "jam": "08.00-09.40",
      "hari": "Sabtu",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 33,
      "dosen": "MUDAWIL QULUB. M.Kom",
      "whatsapp": "6281997946977",
      "matkul": "E-COMMERS",
      "prodi": "S1ILKOM/II/D",
      "ruangan": "LAB RPL 1",
      "asisten": "-",
      "jam": "09.40-11.20",
      "hari": "Sabtu",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 34,
      "dosen": "Dr.GALIH HENDRO MARTONO, M.Eng",
      "whatsapp": "6287839304219",
      "matkul": "PEMROGRAMAN BASIS DATA",
      "prodi": "D3SI/IV/A",
      "ruangan": "LAB RPL 2",
      "asisten": "Naufal Hanif",
      "jam": "13.00-14.40",
      "hari": "Sabtu",
      "kirimAsdos": "6281558860855"
    },
    {
      "id": 35,
      "dosen": "Muhammad Tahir, S.Pd., M.Msi.",
      "whatsapp": "6281381652460",
      "matkul": "PEMROGRAMAN BASIS DATA",
      "prodi": "D3SI/IV/A",
      "ruangan": "LAB RPL 2",
      "asisten": "Naufal Hanif",
      "jam": "13.00-14.40",
      "hari": "Sabtu",
      "kirimAsdos": "6281558860855"
    },
    {
      "id": 36,
      "dosen": "I Nyoman Switrayana, S.T.,M.T",
      "whatsapp": "6281221768401",
      "matkul": "NATURAL LANGUAGE PROCESSING",
      "prodi": "S1ILKOM/VI/A",
      "ruangan": "LAB RPL 2",
      "asisten": "Tanwir",
      "jam": "11.20-13.00",
      "hari": "Sabtu",
      "kirimAsdos": "6287865503231"
    },
    {
      "id": 37,
      "dosen": "I Nyoman Switrayana, S.T.,M.T",
      "whatsapp": "6281221768401",
      "matkul": "NATURAL LANGUAGE PROCESSING",
      "prodi": "S1ILKOM/VI/B",
      "ruangan": "LAB RPL 2",
      "asisten": "Tanwir",
      "jam": "08.00-09.40",
      "hari": "Sabtu",
      "kirimAsdos": "6287865503231"
    },
    {
      "id": 38,
      "dosen": "L. ZAZULI AZHAR MARDEDI. M.Kom",
      "whatsapp": "6281805208998",
      "matkul": "JARINGAN NIRKABEL",
      "prodi": "S1ILKOM/VI/B2",
      "ruangan": "LAB RPL 2",
      "asisten": "Naufal Hanif",
      "jam": "19.50-20.40",
      "hari": "Sabtu",
      "kirimAsdos": "6281558860855"
    },
    {
      "id": 39,
      "dosen": "MOCH. SAHRIR. S.St.,M.Kom",
      "whatsapp": "6282339759991",
      "matkul": "PEMROGRAMAN VISUAL DASAR",
      "prodi": "D3SI/RPLA/IV/A",
      "ruangan": "LAB DKV 2",
      "asisten": "-",
      "jam": "08.00-09.40",
      "hari": "Sabtu",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 40,
      "dosen": "I Gede Anjas Kharismanata. S.ds., M.Ds",
      "whatsapp": "6282350021288",
      "matkul": "MULTIMEDIA LANJUT",
      "prodi": "S1BISDIG/IV/A",
      "ruangan": "LAB RPL 3",
      "asisten": "Khaerul Ihsan",
      "jam": "11.20-13.00",
      "hari": "Sabtu",
      "kirimAsdos": "6282350021288"
    },
    {
      "id": 41,
      "dosen": "KURNIADIN ABDUL LATIF.M.Kom",
      "whatsapp": "6282349065484",
      "matkul": "KEAMANAN DAN PEMELIHARAAN WEB",
      "prodi": "D3SI/VI/A",
      "ruangan": "LAB RPL 1",
      "asisten": "-",
      "jam": "11.20-13.00",
      "hari": "Sabtu",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 42,
      "dosen": "JULIANA PALIT, S.Kom., MMSI",
      "whatsapp": "6281289748680",
      "matkul": "E-COMMERS",
      "prodi": "S1BISDIG/VI/A",
      "ruangan": "LAB RPL 4",
      "asisten": "-",
      "jam": "11.20-13.00",
      "hari": "Sabtu",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 43,
      "dosen": "Dr.Gede Pramudya Ananta, P.Hd",
      "whatsapp": "6282350021288",
      "matkul": "BIG DATA",
      "prodi": "S1ILKOM/VIII/A",
      "ruangan": "LAB RPL 1",
      "asisten": "Amrullah Husaini",
      "jam": "13.00-14.40",
      "hari": "Sabtu",
      "kirimAsdos": "6281548743584"
    },
    {
      "id": 44,
      "dosen": "Dr.GALIH HENDRO MARTONO, M.Eng",
      "whatsapp": "6287839304219",
      "matkul": "BIG DATA",
      "prodi": "S1ILKOM/VIII/A",
      "ruangan": "LAB RPL 1",
      "asisten": "Amrullah Husaini",
      "jam": "13.00-14.40",
      "hari": "Sabtu",
      "kirimAsdos": "6281548743584"
    },
    {
      "id": 45,
      "dosen": "I PUTU HARIYADI. M.Kom",
      "whatsapp": "6281936733568",
      "matkul": "PEMROGRAMAN SISTEM JARINGAN",
      "prodi": "S1TI/VI/A",
      "ruangan": "LAB RPL 4",
      "asisten": "-",
      "jam": "08.00-08.50",
      "hari": "Sabtu",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 218,
      "dosen": "I PUTU HARIYADI. M.Kom",
      "whatsapp": "6281936733568",
      "matkul": "PEMROGRAMAN SISTEM JARINGAN",
      "prodi": "S1TI/VI/B",
      "ruangan": "LAB RPL 4",
      "asisten": "-",
      "jam": "08.50-09.40",
      "hari": "Sabtu",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 46,
      "dosen": "Dr. DADANG PRIYANTO. M.Kom",
      "whatsapp": "62818362756",
      "matkul": "PEMODELAN PERANGKAT LUNAK",
      "prodi": "D3RPLA/IV/A",
      "ruangan": "LAB DKV 2",
      "asisten": "-",
      "jam": "15.30-17.10",
      "hari": "Senin",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 47,
      "dosen": "TOMI TRI SUJAKA. M.Kom",
      "whatsapp": "6287864913819",
      "matkul": "PEMROGRAMAN WEB",
      "prodi": "S1ILKOM/IV/A2",
      "ruangan": "LAB DKV 2",
      "asisten": "Faisal",
      "jam": "08.00-09.40",
      "hari": "Senin",
      "kirimAsdos": "6281236108782"
    },
    {
      "id": 48,
      "dosen": "TOMI TRI SUJAKA. M.Kom",
      "whatsapp": "6287864913819",
      "matkul": "PEMROGRAMAN WEB",
      "prodi": "S1ILKOM/IV/B2",
      "ruangan": "LAB DKV 2",
      "asisten": "Faisal",
      "jam": "08.00-09.40",
      "hari": "Senin",
      "kirimAsdos": "6281236108782"
    },
    {
      "id": 49,
      "dosen": "TOMI TRI SUJAKA. M.Kom",
      "whatsapp": "6287864913819",
      "matkul": "PEMROGRAMAN WEB",
      "prodi": "S1ILKOM/IV/C2",
      "ruangan": "LAB DKV 2",
      "asisten": "Faisal",
      "jam": "11.20-13.00",
      "hari": "Senin",
      "kirimAsdos": "6281236108782"
    },
    {
      "id": 50,
      "dosen": "KURNIADIN ABDUL LATIF.M.Kom",
      "whatsapp": "6282349065484",
      "matkul": "KEAMANAN KOMPUTER DAN JARINGAN",
      "prodi": "S1RPL/VIII/A",
      "ruangan": "LAB DKV 2",
      "asisten": "-",
      "jam": "13.50-15.30",
      "hari": "Senin",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 51,
      "dosen": "I Gede Anjas Kharismanata. S.ds., M.Ds",
      "whatsapp": "6282350021288",
      "matkul": "KOMPUTER GRAFIS III",
      "prodi": "S1DKV/IV/A",
      "ruangan": "LAB RPL 1",
      "asisten": "Khaerul Ihsan",
      "jam": "16.20-18.00",
      "hari": "Senin",
      "kirimAsdos": "6282350021288"
    },
    {
      "id": 52,
      "dosen": "TOMI TRI SUJAKA. M.Kom",
      "whatsapp": "6287864913819",
      "matkul": "PEMROGRAMAN WEB",
      "prodi": "S1ILKOM/IV/A1",
      "ruangan": "LAB RPL 1",
      "asisten": "-",
      "jam": "08.00-09.40",
      "hari": "Senin",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 53,
      "dosen": "TOMI TRI SUJAKA. M.Kom",
      "whatsapp": "6287864913819",
      "matkul": "PEMROGRAMAN WEB",
      "prodi": "S1ILKOM/IV/B1",
      "ruangan": "LAB RPL 1",
      "asisten": "-",
      "jam": "08.00-09.40",
      "hari": "Senin",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 54,
      "dosen": "TOMI TRI SUJAKA. M.Kom",
      "whatsapp": "6287864913819",
      "matkul": "PEMROGRAMAN WEB",
      "prodi": "S1ILKOM/IV/C1",
      "ruangan": "LAB RPL 1",
      "asisten": "-",
      "jam": "11.20-13.00",
      "hari": "Senin",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 55,
      "dosen": "ONDI ASRONI, M.Kom.",
      "whatsapp": "6281808506723",
      "matkul": "MANAJEMEN KEAMANAN INFORMASI",
      "prodi": "S1TI/VI/A",
      "ruangan": "LAB RPL 1",
      "asisten": "Naufal Hanif",
      "jam": "13:00-13:50",
      "hari": "Senin",
      "kirimAsdos": "6281558860855"
    },
    {
      "id": 56,
      "dosen": "HAIRANI. S.Kom.,M.Eng",
      "whatsapp": "6287839793970",
      "matkul": "MACHINE LEARNING",
      "prodi": "S1TI/VI/A",
      "ruangan": "LAB RPL 1",
      "asisten": "Amrullah Husaini",
      "jam": "14.40-16.20",
      "hari": "Senin",
      "kirimAsdos": "6281548743584"
    },
    {
      "id": 57,
      "dosen": "ONDI ASRONI, M.Kom.",
      "whatsapp": "6281808506723",
      "matkul": "MANAJEMEN KEAMANAN INFORMASI",
      "prodi": "S1TI/VI/B",
      "ruangan": "LAB RPL 1",
      "asisten": "Naufal Hanif",
      "jam": "13:50-14:40",
      "hari": "Senin",
      "kirimAsdos": "6281558860855"
    },
    {
      "id": 58,
      "dosen": "L. ZAZULI AZHAR MARDEDI. M.Kom",
      "whatsapp": "6281805208998",
      "matkul": "PEMROGRAMAN BERORIENTASI OBJEK LANJUT",
      "prodi": "D3RPLA/II/A",
      "ruangan": "LAB RPL 2",
      "asisten": "Amrullah Husaini",
      "jam": "14.40-16.20",
      "hari": "Senin",
      "kirimAsdos": "6281548743584"
    },
    {
      "id": 59,
      "dosen": "Muhammad Tahir, S.Pd., M.Msi.",
      "whatsapp": "6281381652460",
      "matkul": "PEMODELAN PERANGKAT LUNAK",
      "prodi": "D3RPLA/IV/A",
      "ruangan": "LAB RPL 2",
      "asisten": "-",
      "jam": "13.00-14.40",
      "hari": "Senin",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 60,
      "dosen": "MUHAMMAD AZWAR. M.Kom",
      "whatsapp": "6287838425106",
      "matkul": "PEMROGRAMAN II",
      "prodi": "S1ILKOM/II/A2",
      "ruangan": "LAB RPL 2",
      "asisten": "Lalu Izaq Nune Indraswari",
      "jam": "08.00-08.50",
      "hari": "Senin",
      "kirimAsdos": "6287865678987"
    },
    {
      "id": 61,
      "dosen": "MUHAMMAD AZWAR. M.Kom",
      "whatsapp": "6287838425106",
      "matkul": "PEMROGRAMAN II",
      "prodi": "S1ILKOM/II/B2",
      "ruangan": "LAB RPL 2",
      "asisten": "Lalu Izaq Nune Indraswari",
      "jam": "08.50-09.40",
      "hari": "Senin",
      "kirimAsdos": "6287865678987"
    },
    {
      "id": 62,
      "dosen": "I MADE YADI DARMA. M.Kom",
      "whatsapp": "628172306218",
      "matkul": "PEMROGRAMAN II",
      "prodi": "S1ILKOM/II/C2",
      "ruangan": "LAB RPL 2",
      "asisten": "Lalu Izaq Nune Indraswari",
      "jam": "09.40-10.30",
      "hari": "Senin",
      "kirimAsdos": "6287865678987"
    },
    {
      "id": 63,
      "dosen": "I MADE YADI DARMA. M.Kom",
      "whatsapp": "628172306218",
      "matkul": "PEMROGRAMAN II",
      "prodi": "S1ILKOM/II/D2",
      "ruangan": "LAB RPL 2",
      "asisten": "Lalu Izaq Nune Indraswari",
      "jam": "10.30-11.20",
      "hari": "Senin",
      "kirimAsdos": "6287865678987"
    },
    {
      "id": 64,
      "dosen": "MOCH. SAHRIR. S.St.,M.Kom",
      "whatsapp": "6282339759991",
      "matkul": "PEMROGRAMAN II",
      "prodi": "S1ILKOM/II/E",
      "ruangan": "LAB RPL 2",
      "asisten": "Lalu Izaq Nune Indraswari",
      "jam": "11.20-12.10",
      "hari": "Senin",
      "kirimAsdos": "6287865678987"
    },
    {
      "id": 65,
      "dosen": "MUHAMMAD HARIS NASRI. M.Eng",
      "whatsapp": "6285157578783",
      "matkul": "CLOUD COMPUTING",
      "prodi": "S1TI/VIII/A",
      "ruangan": "LAB RPL 2",
      "asisten": "Faisal",
      "jam": "16.20-17.10",
      "hari": "Senin",
      "kirimAsdos": "6281236108782"
    },
    {
      "id": 66,
      "dosen": "MUHAMMAD HARIS NASRI. M.Eng",
      "whatsapp": "6285157578783",
      "matkul": "CLOUD COMPUTING",
      "prodi": "S1TI/VIII/B",
      "ruangan": "LAB RPL 2",
      "asisten": "Faisal",
      "jam": "17.10-18.00",
      "hari": "Senin",
      "kirimAsdos": "6281236108782"
    },
    {
      "id": 67,
      "dosen": "Ni Ketut Sri Winarti, SE.,Ak.,MSA",
      "whatsapp": "6281805449797",
      "matkul": "AKUNTANSI BERBASIS KOMPUTER",
      "prodi": "S1AKUNTANSI/IV/A",
      "ruangan": "LAB RPL 3",
      "asisten": "-",
      "jam": "14.40-16.20",
      "hari": "Senin",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 68,
      "dosen": "Ni Ketut Sri Winarti, SE.,Ak.,MSA",
      "whatsapp": "6281805449797",
      "matkul": "AKUNTANSI BERBASIS KOMPUTER",
      "prodi": "S1AKUNTANSI/IV/B",
      "ruangan": "LAB RPL 3",
      "asisten": "-",
      "jam": "14.40-16.20",
      "hari": "Selasa",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 69,
      "dosen": "MUHAMMAD AZWAR. M.Kom",
      "whatsapp": "6287838425106",
      "matkul": "PEMROGRAMAN II",
      "prodi": "S1ILKOM/II/A1",
      "ruangan": "LAB RPL 3",
      "asisten": "Tanwir",
      "jam": "08.00-08.50",
      "hari": "Senin",
      "kirimAsdos": "6287865503231"
    },
    {
      "id": 70,
      "dosen": "MUHAMMAD AZWAR. M.Kom",
      "whatsapp": "6287838425106",
      "matkul": "PEMROGRAMAN II",
      "prodi": "S1ILKOM/II/B1",
      "ruangan": "LAB RPL 3",
      "asisten": "Tanwir",
      "jam": "08.50-09.40",
      "hari": "Senin",
      "kirimAsdos": "6287865503231"
    },
    {
      "id": 71,
      "dosen": "I MADE YADI DARMA. M.Kom",
      "whatsapp": "628172306218",
      "matkul": "PEMROGRAMAN II",
      "prodi": "S1ILKOM/II/C1",
      "ruangan": "LAB RPL 3",
      "asisten": "Tanwir",
      "jam": "09.40-10.30",
      "hari": "Senin",
      "kirimAsdos": "6287865503231"
    },
    {
      "id": 72,
      "dosen": "I MADE YADI DARMA. M.Kom",
      "whatsapp": "628172306218",
      "matkul": "PEMROGRAMAN II",
      "prodi": "S1ILKOM/II/D1",
      "ruangan": "LAB RPL 3",
      "asisten": "Tanwir",
      "jam": "10.30-11.20",
      "hari": "Senin",
      "kirimAsdos": "6287865503231"
    },
    {
      "id": 73,
      "dosen": "MOCH. SAHRIR. S.St.,M.Kom",
      "whatsapp": "6282339759991",
      "matkul": "PEMROGRAMAN BERORIENTASI OBJEK",
      "prodi": "S1RPL/II/A",
      "ruangan": "LAB RPL 3",
      "asisten": "Tanwir",
      "jam": "13.50-15.30",
      "hari": "Senin",
      "kirimAsdos": "6287865503231"
    },
    {
      "id": 74,
      "dosen": "MUHAMMAD HARIS NASRI. M.Eng",
      "whatsapp": "6285157578783",
      "matkul": "KEAMANAN INFRASTRUKTUR",
      "prodi": "S1TI/VIII/A",
      "ruangan": "LAB RPL 3",
      "asisten": "Naufal Hanif",
      "jam": "18.00-19.50",
      "hari": "Senin",
      "kirimAsdos": "6281558860855"
    },
    {
      "id": 75,
      "dosen": "HARIRI. S.Kom",
      "matkul": "PEMROGRAMAN WEB DASAR",
      "prodi": "D3RPLA/II/A",
      "ruangan": "LAB RPL 4",
      "asisten": "-",
      "jam": "08.00-09.40",
      "hari": "Senin",
      "whatsapp": "6281935103137",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 76,
      "dosen": "KURNIADIN ABDUL LATIF.M.Kom",
      "whatsapp": "6282349065484",
      "matkul": "PEMROGRAMAN WEB DASAR",
      "prodi": "D3RPLA/II/A",
      "ruangan": "LAB RPL 4",
      "asisten": "-",
      "jam": "08.00-09.40",
      "hari": "Senin",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 77,
      "dosen": "ANDI SOFYAN ANAS. M.Kom",
      "whatsapp": "6285338787782",
      "matkul": "SISTEM OPERASI",
      "prodi": "D3RPLA/II/A",
      "ruangan": "LAB RPL 4",
      "asisten": "Naufal Hanif",
      "jam": "14.40-16.20",
      "hari": "Senin",
      "kirimAsdos": "6281558860855"
    },
    {
      "id": 78,
      "dosen": "ANDI SOFYAN ANAS. M.Kom",
      "whatsapp": "6285338787782",
      "matkul": "SISTEM OPERASI",
      "prodi": "D3SI/II/A",
      "ruangan": "LAB RPL 4",
      "asisten": "Naufal Hanif",
      "jam": "14.40-16.20",
      "hari": "Senin",
      "kirimAsdos": "6281558860855"
    },
    {
      "id": 79,
      "dosen": "ONDI ASRONI, M.Kom.",
      "whatsapp": "6281808506723",
      "matkul": "PENGOLAHAN PUSAT DATA",
      "prodi": "S1ILKOM/VIII/A1",
      "ruangan": "LAB RPL 4",
      "asisten": "-",
      "jam": "18.00-19.50",
      "hari": "Rabu",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 80,
      "dosen": "ONDI ASRONI, M.Kom.",
      "whatsapp": "6281808506723",
      "matkul": "PENGOLAHAN PUSAT DATA",
      "prodi": "S1ILKOM/VIII/A2",
      "ruangan": "LAB RPL 4",
      "asisten": "-",
      "jam": "19.50-20.40",
      "hari": "Rabu",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 81,
      "dosen": "KHAIRAN MARZUKI. M.Kom",
      "whatsapp": "6285933083240",
      "matkul": "PENGANTAR SISTEM OPERASI",
      "prodi": "S1RPL/II/A",
      "ruangan": "LAB RPL 4",
      "asisten": "Azral Satriani",
      "jam": "09.40-11.20",
      "hari": "Senin",
      "kirimAsdos": "6285238751525"
    },
    {
      "id": 82,
      "dosen": "L. ZAZULI AZHAR MARDEDI. M.Kom",
      "whatsapp": "6281805208998",
      "matkul": "PEMROGRAMAN DEKSTOP",
      "prodi": "S1RPL/IV/A",
      "ruangan": "LAB RPL 4",
      "asisten": "-",
      "jam": "11.20-13.00",
      "hari": "Senin",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 83,
      "dosen": "Fahry, M.Kom",
      "whatsapp": "6287705561599",
      "matkul": "PEMROGRAMAN WEB SERVICE",
      "prodi": "S1BISDIG/VI/A",
      "ruangan": "LAB DKV 2",
      "asisten": "-",
      "jam": "09.40-11.20",
      "hari": "Selasa",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 84,
      "dosen": "MUHAMMAD INNUDDIN. M.Kom",
      "whatsapp": "6285929095755",
      "matkul": "SISTEM BASIS DATA",
      "prodi": "S1ILKOM/II/E2",
      "ruangan": "LAB DKV 2",
      "asisten": "Azral Satriani",
      "jam": "08.00-08.50",
      "hari": "Selasa",
      "kirimAsdos": "6285238751525"
    },
    {
      "id": 85,
      "dosen": "MUDAWIL QULUB. M.Kom",
      "whatsapp": "6281997946977",
      "matkul": "E-COMMERS",
      "prodi": "S1RPL/II/A",
      "ruangan": "LAB DKV 2",
      "asisten": "-",
      "jam": "15.30-17.10",
      "hari": "Selasa",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 86,
      "dosen": "Fahry, M.Kom",
      "whatsapp": "6287705561599",
      "matkul": "PEMROGRAMAN WEB SERVICE",
      "prodi": "S1RPL/VI/A",
      "ruangan": "LAB DKV 2",
      "asisten": "-",
      "jam": "08.00-09.40",
      "hari": "Selasa",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 87,
      "dosen": "Dr. Lela Rahmawati, M.Pd",
      "whatsapp": "6282339813411",
      "matkul": "BAHASA INGGRIS II",
      "prodi": "S1RPL/VIII/A",
      "ruangan": "LAB DKV 2",
      "asisten": "-",
      "jam": "13.00-13.50",
      "hari": "Selasa",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 88,
      "dosen": "I MADE YADI DARMA. M.Kom",
      "whatsapp": "628172306218",
      "matkul": "SISTEM INFORMASI PARIWISATA",
      "prodi": "S1RPL/VIII/A",
      "ruangan": "LAB DKV 2",
      "asisten": "-",
      "jam": "13.50-15.30",
      "hari": "Selasa",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 89,
      "dosen": "I Nyoman Switrayana, S.T.,M.T",
      "whatsapp": "6281221768401",
      "matkul": "KECERDASAN BUATAN",
      "prodi": "S1TI/IV/A",
      "ruangan": "LAB DKV 2",
      "asisten": "-",
      "jam": "11.20-12.10",
      "hari": "Selasa",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 90,
      "dosen": "Muhammad Wisnu Alfiansyah, S.Kom., M.Sc",
      "whatsapp": "6282359132232",
      "matkul": "KECERDASAN BUATAN",
      "prodi": "S1TI/IV/A",
      "ruangan": "LAB DKV 2",
      "asisten": "-",
      "jam": "11.20-12.10",
      "hari": "Selasa",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 91,
      "dosen": "I Nyoman Switrayana, S.T.,M.T",
      "whatsapp": "6281221768401",
      "matkul": "KECERDASAN BUATAN",
      "prodi": "S1TI/IV/B",
      "ruangan": "LAB DKV 2",
      "asisten": "-",
      "jam": "12.10-13.00",
      "hari": "Selasa",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 92,
      "dosen": "Muhammad Wisnu Alfiansyah, S.Kom., M.Sc",
      "whatsapp": "6282359132232",
      "matkul": "KECERDASAN BUATAN",
      "prodi": "S1TI/IV/B",
      "ruangan": "LAB DKV 2",
      "asisten": "-",
      "jam": "13.00-14.40",
      "hari": "Selasa",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 93,
      "dosen": "HASBULLAH. M.Sn/ Qatrunnada, M.Pd.",
      "whatsapp": "6282350021288",
      "matkul": "ANIMASI DASAR",
      "prodi": "S1DKV/II/A",
      "ruangan": "LAB RPL 1",
      "asisten": "Lalu Nanda Cahya Ardi",
      "jam": "12.10-13.50",
      "hari": "Rabu",
      "kirimAsdos": "6287710632909"
    },
    {
      "id": 94,
      "dosen": "MUDAWIL QULUB. M.Kom",
      "whatsapp": "6281997946977",
      "matkul": "E-COMMERS",
      "prodi": "S1ILKOM/II/E",
      "ruangan": "LAB RPL 4",
      "asisten": "-",
      "jam": "13.50-15.30",
      "hari": "Selasa",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 95,
      "dosen": "Fahry, M.Kom",
      "whatsapp": "6287705561599",
      "matkul": "PEMROGRAMAN WEB",
      "prodi": "S1ILKOM/IV/D",
      "ruangan": "LAB RPL 1",
      "asisten": "-",
      "jam": "08.00-09.40",
      "hari": "Selasa",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 96,
      "dosen": "Fahry, M.Kom",
      "whatsapp": "6287705561599",
      "matkul": "PEMROGRAMAN WEB",
      "prodi": "S1ILKOM/IV/E",
      "ruangan": "LAB RPL 1",
      "asisten": "-",
      "jam": "09.40-11.20",
      "hari": "Selasa",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 97,
      "dosen": "MUHAMMAD AZWAR. M.Kom",
      "whatsapp": "6287838425106",
      "matkul": "LAYANAN SISTEM VIRTUAL",
      "prodi": "S1TI/VI/A",
      "ruangan": "LAB RPL 1",
      "asisten": "Naufal Hanif",
      "jam": "11.20-12.10",
      "hari": "Selasa",
      "kirimAsdos": "6281558860855"
    },
    {
      "id": 98,
      "dosen": "MUHAMMAD AZWAR. M.Kom",
      "whatsapp": "6287838425106",
      "matkul": "LAYANAN SISTEM VIRTUAL",
      "prodi": "S1TI/VI/B",
      "ruangan": "LAB RPL 1",
      "asisten": "Naufal Hanif",
      "jam": "12.10-13.00",
      "hari": "Selasa",
      "kirimAsdos": "6281558860855"
    },
    {
      "id": 99,
      "dosen": "MIFTAHUL MADANI. M.Kom",
      "whatsapp": "6281805405452",
      "matkul": "AUGMENTED REALITY",
      "prodi": "S1ILKOM/VI/A",
      "ruangan": "LAB RPL 2",
      "asisten": "Lalu Nanda Cahya Ardi",
      "jam": "15.30-14.40",
      "hari": "Selasa",
      "kirimAsdos": "6287710632909"
    },
    {
      "id": 100,
      "dosen": "LILIK WIDYAWATI. M.Kom",
      "whatsapp": "6281916608880",
      "matkul": "KRIPTOGRAFI",
      "prodi": "S1ILKOM/VI/A1",
      "ruangan": "LAB RPL 2",
      "asisten": "Faisal",
      "jam": "11.20-12.10",
      "hari": "Selasa",
      "kirimAsdos": "6281236108782"
    },
    {
      "id": 101,
      "dosen": "I PUTU HARIYADI. M.Kom",
      "whatsapp": "6281936733568",
      "matkul": "PEMROGRAMAN SISTEM JARINGAN",
      "prodi": "S1ILKOM/VI/A1",
      "ruangan": "LAB RPL 2",
      "asisten": "-",
      "jam": "08.00-08.50",
      "hari": "Selasa",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 102,
      "dosen": "L. ZAZULI AZHAR MARDEDI. M.Kom",
      "whatsapp": "6281805208998",
      "matkul": "JARINGAN NIRKABEL",
      "prodi": "S1ILKOM/VI/A1",
      "ruangan": "LAB RPL 2",
      "asisten": "Azral Satriani",
      "jam": "16.20-17.10",
      "hari": "Selasa",
      "kirimAsdos": "6285238751525"
    },
    {
      "id": 103,
      "dosen": "LILIK WIDYAWATI. M.Kom",
      "whatsapp": "6281916608880",
      "matkul": "KRIPTOGRAFI",
      "prodi": "S1ILKOM/VI/A2",
      "ruangan": "LAB RPL 2",
      "asisten": "Faisal",
      "jam": "12.10-13.00",
      "hari": "Selasa",
      "kirimAsdos": "6281236108782"
    },
    {
      "id": 104,
      "dosen": "I PUTU HARIYADI. M.Kom",
      "whatsapp": "6281936733568",
      "matkul": "PEMROGRAMAN SISTEM JARINGAN",
      "prodi": "S1ILKOM/VI/A2",
      "ruangan": "LAB RPL 2",
      "asisten": "-",
      "jam": "08.50-09.40",
      "hari": "Selasa",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 105,
      "dosen": "L. ZAZULI AZHAR MARDEDI. M.Kom",
      "whatsapp": "6281805208998",
      "matkul": "JARINGAN NIRKABEL",
      "prodi": "S1ILKOM/VI/A2",
      "ruangan": "LAB RPL 2",
      "asisten": "Azral Satriani",
      "jam": "17.10-18.00",
      "hari": "Selasa",
      "kirimAsdos": "6285238751525"
    },
    {
      "id": 106,
      "dosen": "LILIK WIDYAWATI. M.Kom",
      "whatsapp": "6281916608880",
      "matkul": "KRIPTOGRAFI",
      "prodi": "S1ILKOM/VI/B1",
      "ruangan": "LAB RPL 2",
      "asisten": "Faisal",
      "jam": "13.00-13.50",
      "hari": "Selasa",
      "kirimAsdos": "6281236108782"
    },
    {
      "id": 107,
      "dosen": "I PUTU HARIYADI. M.Kom",
      "whatsapp": "6281936733568",
      "matkul": "PEMROGRAMAN SISTEM JARINGAN",
      "prodi": "S1ILKOM/VI/B1",
      "ruangan": "LAB RPL 2",
      "asisten": "-",
      "jam": "09.40-10.30",
      "hari": "Selasa",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 108,
      "dosen": "L. ZAZULI AZHAR MARDEDI. M.Kom",
      "whatsapp": "6281805208998",
      "matkul": "JARINGAN NIRKABEL",
      "prodi": "S1ILKOM/VI/B1",
      "ruangan": "LAB RPL 2",
      "asisten": "Naufal Hanif",
      "jam": "18.00-19.50",
      "hari": "Selasa",
      "kirimAsdos": "6281558860855"
    },
    {
      "id": 109,
      "dosen": "LILIK WIDYAWATI. M.Kom",
      "whatsapp": "6281916608880",
      "matkul": "KRIPTOGRAFI",
      "prodi": "S1ILKOM/VI/B2",
      "ruangan": "LAB RPL 2",
      "asisten": "Faisal",
      "jam": "13.50-14.40",
      "hari": "Selasa",
      "kirimAsdos": "6281236108782"
    },
    {
      "id": 110,
      "dosen": "I PUTU HARIYADI. M.Kom",
      "whatsapp": "6281936733568",
      "matkul": "PEMROGRAMAN SISTEM JARINGAN",
      "prodi": "S1ILKOM/VI/B2",
      "ruangan": "LAB RPL 2",
      "asisten": "-",
      "jam": "10.30-11.20",
      "hari": "Selasa",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 111,
      "dosen": "HARIRI. S.Kom",
      "matkul": "ANALISA DESAIN SISTEM INFORMASI",
      "prodi": "D3SI/IV/A",
      "ruangan": "LAB RPL 3",
      "asisten": "-",
      "jam": "13.50-15.30",
      "hari": "Sabtu",
      "whatsapp": "6281935103137",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 112,
      "dosen": "ISMARMIATY. S.T.,M.MSI",
      "whatsapp": "6281905812788",
      "matkul": "ANALISA DESAIN SISTEM INFORMASI",
      "prodi": "D3SI/IV/A",
      "ruangan": "LAB RPL 3",
      "asisten": "-",
      "jam": "13.50-15.30",
      "hari": "Sabtu",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 113,
      "dosen": "MUHAMMAD INNUDDIN. M.Kom",
      "whatsapp": "6285929095755",
      "matkul": "SISTEM BASIS DATA",
      "prodi": "S1ILKOM/II/C",
      "ruangan": "LAB RPL 3",
      "asisten": "Naufal Hanif",
      "jam": "09.40-10.30",
      "hari": "Selasa",
      "kirimAsdos": "6281558860855"
    },
    {
      "id": 114,
      "dosen": "MUHAMMAD INNUDDIN. M.Kom",
      "whatsapp": "6285929095755",
      "matkul": "SISTEM BASIS DATA",
      "prodi": "S1ILKOM/II/E1",
      "ruangan": "LAB RPL 3",
      "asisten": "Amrullah Husaini",
      "jam": "08.00-08.50",
      "hari": "Selasa",
      "kirimAsdos": "6281548743584"
    },
    {
      "id": 115,
      "dosen": "MAYADI. M.Kom",
      "whatsapp": "6287753166756",
      "matkul": "PEMROGRAMAN IV",
      "prodi": "S1ILKOM/IV/E",
      "ruangan": "LAB RPL 4",
      "asisten": "Tanwir",
      "jam": "09.40-11.20",
      "hari": "Selasa",
      "kirimAsdos": "6287865503231"
    },
    {
      "id": 116,
      "dosen": "MELATI ROSANENSI. M.Kom",
      "whatsapp": "6287718994218",
      "matkul": "ANIMASI 2 DIMENSI",
      "prodi": "S1ILKOM/VI/A",
      "ruangan": "LAB RPL 4",
      "asisten": "Lalu Nanda Cahya Ardi",
      "jam": "16.20-18.00",
      "hari": "Selasa",
      "kirimAsdos": "6287710632909"
    },
    {
      "id": 117,
      "dosen": "APRIANI. M.Kom",
      "whatsapp": "6281917250314",
      "matkul": "DESAIN PERANGKAT LUNAK",
      "prodi": "S1RPL/IV/A",
      "ruangan": "LAB RPL 4",
      "asisten": "Amrullah Husaini",
      "jam": "08.00-09.40",
      "hari": "Selasa",
      "kirimAsdos": "6281548743584"
    },
    {
      "id": 118,
      "dosen": "MELATI ROSANENSI. M.Kom",
      "whatsapp": "6287718994218",
      "matkul": "INTERAKTIV DISAIN",
      "prodi": "S1RPL/IV/A",
      "ruangan": "LAB RPL 4",
      "asisten": "Lalu Nanda Cahya Ardi",
      "jam": "11.20-12.10",
      "hari": "Selasa",
      "kirimAsdos": "6287710632909"
    },
    {
      "id": 119,
      "dosen": "AGUS PRIBADI, S.T, M.Sc",
      "whatsapp": "6281945742389",
      "matkul": "MOBILE COMPUTING",
      "prodi": "S1ILKOM/VI/D2",
      "ruangan": "LAB RPL 3",
      "asisten": "-",
      "jam": "17.10-18.00",
      "hari": "Rabu",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 120,
      "dosen": "KARTARINA. M.Kom",
      "whatsapp": "6285931211038",
      "matkul": "PEMROGRAMAN BERORIENTASI OBJEK",
      "prodi": "S1TI/II/A",
      "ruangan": "LAB RPL 3",
      "asisten": "Lalu Izaq Nune Indraswari",
      "jam": "16.20-17.10",
      "hari": "Senin",
      "kirimAsdos": "6287865678987"
    },
    {
      "id": 121,
      "dosen": "KARTARINA. M.Kom",
      "whatsapp": "6285931211038",
      "matkul": "PEMROGRAMAN BERORIENTASI OBJEK",
      "prodi": "S1TI/II/B",
      "ruangan": "LAB RPL 3",
      "asisten": "Lalu Izaq Nune Indraswari",
      "jam": "17.10-18.00",
      "hari": "Senin",
      "kirimAsdos": "6287865678987"
    },
    {
      "id": 122,
      "dosen": "MUHAMMAD INNUDDIN. M.Kom",
      "whatsapp": "6285929095755",
      "matkul": "KRIPTOGRAFI",
      "prodi": "S1TI/VIII/A",
      "ruangan": "LAB RPL 3",
      "asisten": "Naufal Hanif",
      "jam": "15.30-16.20",
      "hari": "Rabu",
      "kirimAsdos": "6281558860855"
    },
    {
      "id": 123,
      "dosen": "HEROE SANTOSO. M.Kom",
      "whatsapp": "628175417996",
      "matkul": "SISTEM BASIS DATA",
      "prodi": "D3RPLA/II/A",
      "ruangan": "LAB RPL 4",
      "asisten": "Azral Satriani",
      "jam": "11.20-13.00",
      "hari": "Rabu",
      "kirimAsdos": "6285238751525"
    },
    {
      "id": 124,
      "dosen": "HARIRI. S.Kom",
      "matkul": "KEAMANAN DAN PEMELIHARAAN WEB",
      "prodi": "D3SI/VI/A",
      "ruangan": "LAB RPL 4",
      "asisten": "-",
      "jam": "10.30-12.10",
      "hari": "Rabu",
      "whatsapp": "6281935103137",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 125,
      "dosen": "HEROE SANTOSO. M.Kom",
      "whatsapp": "628175417996",
      "matkul": "SISTEM BASIS DATA",
      "prodi": "S1ILKOM/II/A1",
      "ruangan": "LAB RPL 4",
      "asisten": "Khaerul Ihsan",
      "jam": "15.20-16.00",
      "hari": "Rabu",
      "kirimAsdos": "6282350021288"
    },
    {
      "id": 127,
      "dosen": "RAISUL AZHAR. ST.,M.T",
      "whatsapp": "6281917032207",
      "matkul": "JARINGAN KOMPUTER",
      "prodi": "S1ILKOM/IV/A1",
      "ruangan": "LAB RPL 4",
      "asisten": "Naufal Hanif",
      "jam": "09.40-10.30",
      "hari": "Rabu",
      "kirimAsdos": "6281558860855"
    },
    {
      "id": 128,
      "dosen": "MOCH. SAHRIR. S.St.,M.Kom",
      "whatsapp": "6282339759991",
      "matkul": "PEMROGRAMAN IV",
      "prodi": "S1ILKOM/IV/A2",
      "ruangan": "LAB RPL 4",
      "asisten": "Lalu Izaq Nune Indraswari",
      "jam": "08.00-09.40",
      "hari": "Rabu",
      "kirimAsdos": "6287865678987"
    },
    {
      "id": 129,
      "dosen": "RAISUL AZHAR. ST.,M.T",
      "whatsapp": "6281917032207",
      "matkul": "JARINGAN KOMPUTER",
      "prodi": "S1ILKOM/IV/A2",
      "ruangan": "LAB RPL 1",
      "asisten": "Naufal Hanif",
      "jam": "09.40-10.30",
      "hari": "Rabu",
      "kirimAsdos": "6281558860855"
    },
    {
      "id": 130,
      "dosen": "MUHAMMAD AZWAR. M.Kom",
      "whatsapp": "6287838425106",
      "matkul": "PEMROGRAMAN IV",
      "prodi": "S1ILKOM/IV/B2",
      "ruangan": "LAB RPL 4",
      "asisten": "Faisal",
      "jam": "11.20-12.40",
      "hari": "Rabu",
      "kirimAsdos": "6281236108782"
    },
    {
      "id": 131,
      "dosen": "MAYADI. M.Kom",
      "whatsapp": "6287753166756",
      "matkul": "PEMROGRAMAN IV",
      "prodi": "S1ILKOM/IV/D",
      "ruangan": "LAB RPL 4",
      "asisten": "Lalu Izaq Nune Indraswari",
      "jam": "16.20-18.00",
      "hari": "Rabu",
      "kirimAsdos": "6287865678987"
    },
    {
      "id": 132,
      "dosen": "HEROE SANTOSO. M.Kom",
      "whatsapp": "628175417996",
      "matkul": "SISTEM BASIS DATA",
      "prodi": "S1TI/II/A,B",
      "ruangan": "LAB RPL 4",
      "asisten": "-",
      "jam": "12.10-13.00",
      "hari": "Selasa",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 133,
      "dosen": "Dr. Dian Syafitri, S.Kom, MDigMMedia",
      "whatsapp": "62818362760",
      "matkul": "SISTEM BASIS DATA",
      "prodi": "S1 PTI/II/A",
      "ruangan": "LAB DKV 2",
      "asisten": "Naufal Hanif",
      "jam": "10.40-12.00",
      "hari": "Rabu",
      "kirimAsdos": "6281558860855"
    },
    {
      "id": 134,
      "dosen": "AGUS PRIBADI, S.T, M.Sc",
      "whatsapp": "6281945742389",
      "matkul": "MOBILE COMPUTING",
      "prodi": "S1ILKOM/VI/A2",
      "ruangan": "LAB DKV 2",
      "asisten": "Faisal",
      "jam": "15.30-16.20",
      "hari": "Rabu",
      "kirimAsdos": "6281236108782"
    },
    {
      "id": 135,
      "dosen": "AGUS PRIBADI, S.T, M.Sc",
      "whatsapp": "6281945742389",
      "matkul": "MOBILE COMPUTING",
      "prodi": "S1ILKOM/VI/B2",
      "ruangan": "LAB DKV 2",
      "asisten": "Faisal",
      "jam": "13:50-14:40",
      "hari": "Rabu",
      "kirimAsdos": "6281236108782"
    },
    {
      "id": 136,
      "dosen": "AGUS PRIBADI, S.T, M.Sc",
      "whatsapp": "6281945742389",
      "matkul": "MOBILE COMPUTING",
      "prodi": "S1ILKOM/VI/C2",
      "ruangan": "LAB DKV 2",
      "asisten": "Faisal",
      "jam": "14:40-15:30",
      "hari": "Rabu",
      "kirimAsdos": "6281236108782"
    },
    {
      "id": 137,
      "dosen": "Zulkipli, S.Kom., M.Pd",
      "whatsapp": "6282350021288",
      "matkul": "KOMUNIKASI DATA & JARINGAN KOMPUTER",
      "prodi": "S1PTI/IV/A",
      "ruangan": "LAB DKV 2",
      "asisten": "-",
      "jam": "08.00-08.50",
      "hari": "Rabu",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 138,
      "dosen": "Irhas, S.Kom., M.Pd",
      "whatsapp": "6282350021288",
      "matkul": "DESAIN GRAFIS",
      "prodi": "S1PTI/IV/A",
      "ruangan": "LAB DKV 2",
      "asisten": "Khaerul Ihsan",
      "jam": "10.40-12.00",
      "hari": "Rabu",
      "kirimAsdos": "6282350021288"
    },
    {
      "id": 139,
      "dosen": "MELATI ROSANENSI. M.Kom",
      "whatsapp": "6287718994218",
      "matkul": "PENGEMBANGAN MULTIMEDIA INTERAKTIV",
      "prodi": "S1RPL/VIA",
      "ruangan": "LAB DKV 2",
      "asisten": "Lalu Nanda Cahya Ardi",
      "jam": "09.40-11.20",
      "hari": "Rabu",
      "kirimAsdos": "6287710632909"
    },
    {
      "id": 140,
      "dosen": "KARTARINA. M.Kom",
      "whatsapp": "6285931211038",
      "matkul": "PEMROGRAMAN BERORIENTASI OBJEK DASAR",
      "prodi": "D3RPLA/II/A",
      "ruangan": "LAB RPL 1",
      "asisten": "-",
      "jam": "10.30-12.10",
      "hari": "Rabu",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 141,
      "dosen": "KARTARINA. M.Kom",
      "whatsapp": "6285931211038",
      "matkul": "PEMROGRAMAN BERORIENTASI OBJEK",
      "prodi": "D3SI/II/A",
      "ruangan": "LAB RPL 1",
      "asisten": "-",
      "jam": "10.30-12.10",
      "hari": "Rabu",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 142,
      "dosen": "I Gede Anjas Kharismanata. S.ds., M.Ds",
      "whatsapp": "-",
      "matkul": "KOMPUTER GRAFIS I",
      "prodi": "S1DKV/II/A",
      "ruangan": "LAB RPL 1",
      "asisten": "Khaerul Ihsan",
      "jam": "16.20-18.00",
      "hari": "Rabu",
      "kirimAsdos": "6282350021288"
    },
    {
      "id": 143,
      "dosen": "HASBULLAH. M.Sn/ Qatrunnada, M.Pd.",
      "whatsapp": "-",
      "matkul": "DESAIN GAME",
      "prodi": "S1DKV/IV/B",
      "ruangan": "LAB RPL 1",
      "asisten": "Lalu Nanda Cahya Ardi",
      "jam": "14.00-15.20",
      "hari": "Rabu",
      "kirimAsdos": "6287710632909"
    },
    {
      "id": 144,
      "dosen": "Dr. HELNA WARDHANA, S.Kom, M.Kom",
      "whatsapp": "62817463573",
      "matkul": "REKAYASA PERANGKAT LUNAK",
      "prodi": "S1ILKOM/IV/C",
      "ruangan": "LAB RPL 1",
      "asisten": "Amrullah Husaini",
      "jam": "08.00-08.50",
      "hari": "Rabu",
      "kirimAsdos": "6281548743584"
    },
    {
      "id": 145,
      "dosen": "AGUS PRIBADI, S.T, M.Sc",
      "whatsapp": "6281945742389",
      "matkul": "MOBILE COMPUTING",
      "prodi": "S1ILKOM/VI/A1",
      "ruangan": "LAB RPL 1",
      "asisten": "-",
      "jam": "15.30-16.20",
      "hari": "Rabu",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 146,
      "dosen": "AGUS PRIBADI, S.T, M.Sc",
      "whatsapp": "6281945742389",
      "matkul": "MOBILE COMPUTING",
      "prodi": "S1ILKOM/VI/B1",
      "ruangan": "LAB RPL 1",
      "asisten": "-",
      "jam": "13:50-14:40",
      "hari": "Rabu",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 147,
      "dosen": "AGUS PRIBADI, S.T, M.Sc",
      "whatsapp": "6281945742389",
      "matkul": "MOBILE COMPUTING",
      "prodi": "S1ILKOM/VI/C1",
      "ruangan": "LAB RPL 1",
      "asisten": "-",
      "jam": "14:40-15:30",
      "hari": "Rabu",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 148,
      "dosen": "Zulkipli, S.Kom., M.Pd",
      "whatsapp": "6282350021288",
      "matkul": "MANAJEMEN JARINGAN",
      "prodi": "S1PTI/VI/A",
      "ruangan": "LAB RPL 1",
      "asisten": "Naufal Hanif",
      "jam": "08.00-09.40",
      "hari": "Rabu",
      "kirimAsdos": "6281558860855"
    },
    {
      "id": 149,
      "dosen": "HEROE SANTOSO. M.Kom",
      "whatsapp": "628175417996",
      "matkul": "PEMODELAN BASIS DATA",
      "prodi": "S1RPL/II/A",
      "ruangan": "LAB RPL 1",
      "asisten": "-",
      "jam": "8.00-9.40",
      "hari": "Rabu",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 150,
      "dosen": "LILIK WIDYAWATI. M.Kom",
      "whatsapp": "6281916608880",
      "matkul": "ETHICAL HACKING AND PENETRATION TESTING",
      "prodi": "S1TI/VI/A",
      "ruangan": "LAB RPL 1",
      "asisten": "Faisal",
      "jam": "10.30-11.20",
      "hari": "Rabu",
      "kirimAsdos": "6281236108782"
    },
    {
      "id": 151,
      "dosen": "I Nyoman Subudiartha, S.Pd.H., M.I.Kom",
      "whatsapp": "6287755818282",
      "matkul": "DESAIN GAME",
      "prodi": "S1DKV/IV/B",
      "ruangan": "LAB RPL 2",
      "asisten": "-",
      "jam": "15.30-17.10",
      "hari": "Rabu",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 152,
      "dosen": "Ir. ANTHONY ANGGRAWAN, M.T.,Ph.D",
      "whatsapp": "-",
      "matkul": "DATA MINING LANJUT",
      "prodi": "S1ILKOM/VI/B",
      "ruangan": "LAB RPL 2",
      "asisten": "Tanwir",
      "jam": "08.00-09.40",
      "hari": "Rabu",
      "kirimAsdos": "6287865503231"
    },
    {
      "id": 153,
      "dosen": "I PUTU HARIYADI. M.Kom",
      "whatsapp": "6281936733568",
      "matkul": "CLOUD COMPUTING",
      "prodi": "S1ILKOM/VIII/A1",
      "ruangan": "LAB RPL 2",
      "asisten": "-",
      "jam": "13.50-14.40",
      "hari": "Rabu",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 154,
      "dosen": "I PUTU HARIYADI. M.Kom",
      "whatsapp": "6281936733568",
      "matkul": "CLOUD COMPUTING",
      "prodi": "S1ILKOM/VIII/A2",
      "ruangan": "LAB RPL 2",
      "asisten": "-",
      "jam": "14.40-15.30",
      "hari": "Rabu",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 155,
      "dosen": "I PUTU HARIYADI. M.Kom",
      "whatsapp": "6281936733568",
      "matkul": "CLOUD COMPUTING",
      "prodi": "S1ILKOM/VIII/B1",
      "ruangan": "LAB RPL 2",
      "asisten": "-",
      "jam": "12.10-13.00",
      "hari": "Rabu",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 156,
      "dosen": "I PUTU HARIYADI. M.Kom",
      "whatsapp": "6281936733568",
      "matkul": "CLOUD COMPUTING",
      "prodi": "S1ILKOM/VIII/B2",
      "ruangan": "LAB RPL 2",
      "asisten": "-",
      "jam": "13.00-13.50",
      "hari": "Rabu",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 157,
      "dosen": "MUHAMMAD HARIS NASRI. M.Eng",
      "whatsapp": "6285157578783",
      "matkul": "CLOUD COMPUTING",
      "prodi": "S1ILKOM/VIII/C1",
      "ruangan": "LAB RPL 2",
      "asisten": "Faisal",
      "jam": "18.00-19.50",
      "hari": "Rabu",
      "kirimAsdos": "6281236108782"
    },
    {
      "id": 158,
      "dosen": "MUHAMMAD HARIS NASRI. M.Eng",
      "whatsapp": "6285157578783",
      "matkul": "CLOUD COMPUTING",
      "prodi": "S1ILKOM/VIII/C2",
      "ruangan": "LAB RPL 2",
      "asisten": "Faisal",
      "jam": "19.50-20.40",
      "hari": "Rabu",
      "kirimAsdos": "6281236108782"
    },
    {
      "id": 159,
      "dosen": "ISMARMIATY. S.T.,M.MSI",
      "whatsapp": "6281905812788",
      "matkul": "E-COMMERS",
      "prodi": "S1ILKOM/II/B",
      "ruangan": "LAB RPL 3",
      "asisten": "-",
      "jam": "09.40-11.20",
      "hari": "Rabu",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 160,
      "dosen": "HEROE SANTOSO. M.Kom",
      "whatsapp": "628175417996",
      "matkul": "SISTEM BASIS DATA",
      "prodi": "S1ILKOM/II/B",
      "ruangan": "LAB RPL 3",
      "asisten": "Amrullah Husaini",
      "jam": "10.30-11.20",
      "hari": "Rabu",
      "kirimAsdos": "6281548743584"
    },
    {
      "id": 161,
      "dosen": "MUHAMMAD INNUDDIN. M.Kom",
      "whatsapp": "6287865678987",
      "matkul": "SISTEM BASIS DATA",
      "prodi": "S1ILKOM/II/D",
      "ruangan": "LAB RPL 3",
      "asisten": "Naufal Hanif",
      "jam": "08.50-09.40",
      "hari": "Rabu",
      "kirimAsdos": "6281558860855"
    },
    {
      "id": 162,
      "dosen": "MOCH. SAHRIR. S.St.,M.Kom",
      "whatsapp": "6282339759991",
      "matkul": "PEMROGRAMAN IV",
      "prodi": "S1ILKOM/IV/A1",
      "ruangan": "LAB RPL 3",
      "asisten": "Amrullah Husaini",
      "jam": "08.00-09.40",
      "hari": "Rabu",
      "kirimAsdos": "6281548743584"
    },
    {
      "id": 163,
      "dosen": "MUHAMMAD AZWAR. M.Kom",
      "whatsapp": "6287838425106",
      "matkul": "PEMROGRAMAN IV",
      "prodi": "S1ILKOM/IV/B1",
      "ruangan": "LAB RPL 3",
      "asisten": "Tanwir",
      "jam": "11.20-12.40",
      "hari": "Rabu",
      "kirimAsdos": "6287865503231"
    },
    {
      "id": 164,
      "dosen": "MUHAMMAD AZWAR. M.Kom",
      "whatsapp": "6287838425106",
      "matkul": "PEMROGRAMAN IV",
      "prodi": "S1ILKOM/IV/C1",
      "ruangan": "LAB RPL 3",
      "asisten": "Tanwir",
      "jam": "12.40-14.00",
      "hari": "Rabu",
      "kirimAsdos": "6287865503231"
    },
    {
      "id": 165,
      "dosen": "MUHAMMAD AZWAR. M.Kom",
      "whatsapp": "6287838425106",
      "matkul": "PEMROGRAMAN IV",
      "prodi": "S1ILKOM/IV/C2",
      "ruangan": "LAB RPL 3",
      "asisten": "Lalu Izaq Nune Indraswari",
      "jam": "12.40-14.00",
      "hari": "Rabu",
      "kirimAsdos": "6287865678987"
    },
    {
      "id": 166,
      "dosen": "AGUS PRIBADI, S.T, M.Sc",
      "whatsapp": "6281945742389",
      "matkul": "MOBILE COMPUTING",
      "prodi": "S1ILKOM/VI/D1",
      "ruangan": "LAB RPL 3",
      "asisten": "-",
      "jam": "15.30-16.20",
      "hari": "Rabu",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 167,
      "dosen": "AGUS PRIBADI, S.T, M.Sc",
      "whatsapp": "6281945742389",
      "matkul": "MOBILE COMPUTING",
      "prodi": "S1ILKOM/VI/D2",
      "ruangan": "LAB RPL 3",
      "asisten": "-",
      "jam": "17.10-18.00",
      "hari": "Rabu",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 168,
      "dosen": "KARTARINA. M.Kom",
      "whatsapp": "6285931211038",
      "matkul": "PEMROGRAMAN BERORIENTASI OBJEK",
      "prodi": "S1TI/II/A",
      "ruangan": "LAB RPL 3",
      "asisten": "Lalu Izaq Nune Indraswari",
      "jam": "16.20-17.10",
      "hari": "Rabu",
      "kirimAsdos": "6287865678987"
    },
    {
      "id": 169,
      "dosen": "KARTARINA. M.Kom",
      "whatsapp": "6285931211038",
      "matkul": "PEMROGRAMAN BERORIENTASI OBJEK",
      "prodi": "S1TI/II/B",
      "ruangan": "LAB RPL 3",
      "asisten": "Lalu Izaq Nune Indraswari",
      "jam": "17.10-18.00",
      "hari": "Rabu",
      "kirimAsdos": "6287865678987"
    },
    {
      "id": 170,
      "dosen": "MUHAMMAD INNUDDIN. M.Kom",
      "whatsapp": "6285929095755",
      "matkul": "KRIPTOGRAFI",
      "prodi": "S1TI/VIII/A",
      "ruangan": "LAB RPL 3",
      "asisten": "Naufal Hanif",
      "jam": "15.30-16.20",
      "hari": "Rabu",
      "kirimAsdos": "6281558860855"
    },
    {
      "id": 171,
      "dosen": "HEROE SANTOSO. M.Kom",
      "whatsapp": "628175417996",
      "matkul": "SISTEM BASIS DATA",
      "prodi": "D3RPLA/II/A",
      "ruangan": "LAB RPL 4",
      "asisten": "Azral Satriani",
      "jam": "11.20-13.00",
      "hari": "Rabu",
      "kirimAsdos": "6285238751525"
    },
    {
      "id": 172,
      "dosen": "HARIRI. S.Kom",
      "matkul": "KEAMANAN DAN PEMELIHARAAN WEB",
      "prodi": "D3SI/VI/A",
      "ruangan": "LAB RPL 4",
      "asisten": "-",
      "jam": "10.30-12.10",
      "hari": "Rabu",
      "whatsapp": "6281935103137",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 193,
      "dosen": "MUHAMMAD HARIS NASRI. M.Eng",
      "whatsapp": "6285157578783",
      "matkul": "PEMROGRAMAN MOBILE DASAR",
      "prodi": "S1RPL/IV/A",
      "ruangan": "LAB RPL 2",
      "asisten": "Lalu Izaq Nune Indraswari",
      "jam": "14.40-18.00",
      "hari": "Kamis",
      "kirimAsdos": "6287865678987"
    },
    {
      "id": 194,
      "dosen": "MUHAMMAD HARIS NASRI. M.Eng",
      "whatsapp": "6285157578783",
      "matkul": "PEMROGRAMAN MOBILE",
      "prodi": "S1TI/IV/A",
      "ruangan": "LAB RPL 2",
      "asisten": "Tanwir",
      "jam": "14.40-18.00",
      "hari": "Kamis",
      "kirimAsdos": "6287865503231"
    },
    {
      "id": 195,
      "dosen": "MUHAMMAD HARIS NASRI. M.Eng",
      "whatsapp": "6285157578783",
      "matkul": "PEMROGRAMAN MOBILE",
      "prodi": "S1TI/IV/B",
      "ruangan": "LAB RPL 2",
      "asisten": "Tanwir",
      "jam": "11.20-14.40",
      "hari": "Kamis",
      "kirimAsdos": "6287865503231"
    },
    {
      "id": 196,
      "dosen": "Dr. Ir. BAMBANG KRISMONO. T. M.Kom",
      "whatsapp": "6282340521706",
      "matkul": "ALGORITMA & PEMROGRAMAN",
      "prodi": "S1BISDIG/II/A",
      "ruangan": "LAB RPL 3",
      "asisten": "Lalu Izaq Nune Indraswari",
      "jam": "08.00-09.40",
      "hari": "Kamis",
      "kirimAsdos": "6287865678987"
    },
    {
      "id": 197,
      "dosen": "ISMARMIATY. S.T.,M.MSI",
      "whatsapp": "6281905812788",
      "matkul": "E-COMMERS",
      "prodi": "S1ILKOM/II/A",
      "ruangan": "LAB RPL 3",
      "asisten": "-",
      "jam": "09.40-11.20",
      "hari": "Kamis",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 198,
      "dosen": "Ahmat Adil, S.Kom, M.Sc",
      "whatsapp": "6285239885823",
      "matkul": "ANALISIS PERANCANGAN PERANGKAT LUNAK",
      "prodi": "S1TI/IV/A",
      "ruangan": "LAB RPL 3",
      "asisten": "Amrullah Husaini",
      "jam": "13.00-13.50",
      "hari": "Selasa",
      "kirimAsdos": "6281548743584"
    },
    {
      "id": 199,
      "dosen": "Ahmat Adil, S.Kom, M.Sc",
      "whatsapp": "6285239885823",
      "matkul": "ANALISIS PERANCANGAN PERANGKAT LUNAK",
      "prodi": "S1TI/IV/B",
      "ruangan": "LAB RPL 3",
      "asisten": "Amrullah Husaini",
      "jam": "13.50-14.40",
      "hari": "Selasa",
      "kirimAsdos": "6281548743584"
    },
    {
      "id": 200,
      "dosen": "I Gede Anjas Kharismanata. S.ds., M.Ds",
      "whatsapp": "6282350021288",
      "matkul": "KOMPUTER GRAFIS III",
      "prodi": "S1DKV/IV/B",
      "ruangan": "LAB RPL 4",
      "asisten": "Khaerul Ihsan",
      "jam": "15.30-17.10",
      "hari": "Kamis",
      "kirimAsdos": "6282350021288"
    },
    {
      "id": 201,
      "dosen": "ISTIN FITRIANA AZIZA, M.Stat",
      "whatsapp": "6281943618946",
      "matkul": "STATISTIK & PROBABILITAS",
      "prodi": "S1ILKOM/VI/A",
      "ruangan": "LAB RPL 4",
      "asisten": "Faisal",
      "jam": "09.40-11.20",
      "hari": "Kamis",
      "kirimAsdos": "6281236108782"
    },
    {
      "id": 202,
      "dosen": "ISTIN FITRIANA AZIZA, M.Stat",
      "whatsapp": "6281943618946",
      "matkul": "STATISTIK & PROBABILITAS",
      "prodi": "S1ILKOM/VI/C",
      "ruangan": "LAB RPL 4",
      "asisten": "Faisal",
      "jam": "13.50-15.30",
      "hari": "Kamis",
      "kirimAsdos": "6281236108782"
    },
    {
      "id": 203,
      "dosen": "SITI SORAYA. M.Si",
      "whatsapp": "6282339979545",
      "matkul": "STATISTIK & PROBABILITAS",
      "prodi": "S1ILKOM/VI/D",
      "ruangan": "LAB RPL 4",
      "asisten": "Faisal",
      "jam": "11.20-13.00",
      "hari": "Kamis",
      "kirimAsdos": "6281236108782"
    },
    {
      "id": 204,
      "dosen": "Zulkipli, S.Kom., M.Pd",
      "whatsapp": "6282350021288",
      "matkul": "PENGANTAR KOMPUTER DAN INTERNET",
      "prodi": "S1MANAJEMEN/II/A",
      "ruangan": "LAB RPL 4",
      "asisten": "Lalu Nanda Cahya Ardi",
      "jam": "16.20-18.00",
      "hari": "Kamis",
      "kirimAsdos": "6287710632909"
    },
    {
      "id": 205,
      "dosen": "HASBULLAH. M.Sn/ Qatrunnada, M.Pd.",
      "whatsapp": "-",
      "matkul": "ANIMMASI EKSPERIMENTAL",
      "prodi": "S1DKV/VIII/A",
      "ruangan": "LAB DKV 2",
      "asisten": "-",
      "jam": "13.50-16.20",
      "hari": "Minggu",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 206,
      "dosen": "Ir. ANTHONY ANGGRAWAN, M.T.,Ph.D",
      "whatsapp": "6282350021288",
      "matkul": "KOMUNIKASI DATA & JARINGAN KOMPUTER",
      "prodi": "S1PTI/IV/A",
      "ruangan": "LAB DKV 2",
      "asisten": "-",
      "jam": "08.00-08.50",
      "hari": "Kamis",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 207,
      "dosen": "Muhammad Zulfikri, S.T., M.T.",
      "whatsapp": "6282350021288",
      "matkul": "ELETRONIKA DASAR",
      "prodi": "S1TI/II/A",
      "ruangan": "LAB IOT",
      "asisten": "-",
      "jam": "08.00-09.40",
      "hari": "Minggu",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 208,
      "dosen": "Muhammad Zulfikri, S.T., M.T.",
      "whatsapp": "6282350021288",
      "matkul": "ELETRONIKA DASAR",
      "prodi": "S1TI/II/B",
      "ruangan": "LAB IOT",
      "asisten": "-",
      "jam": "08.00-09.40",
      "hari": "Minggu",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 209,
      "dosen": "Muhammad Zulfikri, S.T., M.T.",
      "whatsapp": "6282350021288",
      "matkul": "INTERNET OF THINGS",
      "prodi": "S1TI/IV/A",
      "ruangan": "LAB IOT",
      "asisten": "-",
      "jam": "08.00-09.40",
      "hari": "Minggu",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 210,
      "dosen": "Dr. Muhammad Idham. S.T",
      "whatsapp": "6282350021288",
      "matkul": "INTERNET OF THINGS",
      "prodi": "S1TI/IV/A",
      "ruangan": "LAB IOT",
      "asisten": "-",
      "jam": "08.00-09.40",
      "hari": "Minggu",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 211,
      "dosen": "Muhammad Zulfikri, S.T., M.T.",
      "whatsapp": "6282350021288",
      "matkul": "INTERNET OF THINGS",
      "prodi": "S1TI/IV/B",
      "ruangan": "LAB IOT",
      "asisten": "-",
      "jam": "08.00-09.40",
      "hari": "Minggu",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 212,
      "dosen": "Dr. Muhammad Idham. S.T",
      "whatsapp": "6282350021288",
      "matkul": "INTERNET OF THINGS",
      "prodi": "S1TI/IV/B",
      "ruangan": "LAB IOT",
      "asisten": "-",
      "jam": "08.00-09.40",
      "hari": "Minggu",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 213,
      "dosen": "Muhammad Zulfikri, S.T., M.T.",
      "whatsapp": "6282350021288",
      "matkul": "ELEKTRONIKA LANJUT",
      "prodi": "S1TI/VI/A",
      "ruangan": "LAB IOT",
      "asisten": "-",
      "jam": "13:50-14:40",
      "hari": "Minggu",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 214,
      "dosen": "Dr. Muhammad Idham. S.T",
      "whatsapp": "6282350021288",
      "matkul": "ELEKTRONIKA LANJUT",
      "prodi": "S1TI/VI/A",
      "ruangan": "LAB IOT",
      "asisten": "-",
      "jam": "13:50-14:40",
      "hari": "Minggu",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 215,
      "dosen": "Muhammad Zulfikri, S.T., M.T.",
      "whatsapp": "6282350021288",
      "matkul": "SISTEM KONTROL",
      "prodi": "S1TI/VIII/A",
      "ruangan": "LAB IOT",
      "asisten": "-",
      "jam": "13:50-14:40",
      "hari": "Minggu",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 216,
      "dosen": "Dr. Muhammad Idham. S.T",
      "whatsapp": "6282350021288",
      "matkul": "SISTEM KONTROL",
      "prodi": "S1TI/VIII/A",
      "ruangan": "LAB IOT",
      "asisten": "-",
      "jam": "13:50-14:40",
      "hari": "Minggu",
      "kirimAsdos": "Tidak ada"
    },
    {
      "id": 217,
      "dosen": "Dr. Dian Syafitri, S.Kom, MDigMMedia",
      "whatsapp": "62818362760",
      "matkul": "APLIKASI BERBASIS MULTIMEDIA",
      "prodi": "S1ILKOM/VI/A",
      "ruangan": "LAB RPL 2",
      "asisten": "Khaerul Ihsan",
      "jam": "14.40-15.30",
      "hari": "Selasa",
      "kirimAsdos": "6282350021288"
    },
  ];

  const days = ['Semua', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu', 'Gabung'];

  const uniqueRooms = ['Semua', ...Array.from(new Set(scheduleData.map(s => s.ruangan)))];
  const uniqueProdis = ['Semua', ...Array.from(new Set(scheduleData.map(s => s.prodi)))];
  const uniqueDosens = ['Semua', ...Array.from(new Set(scheduleData.map(s => s.dosen)))];
  const uniqueAsistens = ['Semua', ...Array.from(new Set(scheduleData.map(s => s.asisten).filter(Boolean)))];

  const filteredSchedules = scheduleData.filter(schedule => {
    const matchesDay = selectedDay === 'Semua' || schedule.hari === selectedDay;
    const matchesRoom = selectedRoom === 'Semua' || schedule.ruangan === selectedRoom;
    const matchesProdi = selectedProdi === 'Semua' || schedule.prodi === selectedProdi;
    const matchesDosen = selectedDosen === 'Semua' || schedule.dosen === selectedDosen;
    const matchesAsisten = selectedAsisten === 'Semua' || schedule.asisten === selectedAsisten;
    const matchesSearch = searchTerm === '' ||
      schedule.dosen.toLowerCase().includes(searchTerm.toLowerCase()) ||
      schedule.matkul.toLowerCase().includes(searchTerm.toLowerCase()) ||
      schedule.ruangan.toLowerCase().includes(searchTerm.toLowerCase()) ||
      schedule.prodi.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (schedule.asisten && schedule.asisten.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesDay && matchesRoom && matchesProdi && matchesDosen && matchesAsisten && matchesSearch;
  });

  return (
    <div className="schedule-container">
      {/* Header */}
      <div className="header">
        <h1 className="header-title">
          <span role="img" aria-label="calendar">📅</span> Sistem Manajemen Jadwal Lab
        </h1>
        <p className="header-desc">Kelola jadwal lab dengan mudah dan kirim broadcast WhatsApp</p>
      </div>

      {/* Filter */}
      <div className="filter-section">
        <div className="filter-grid">
          <div className="filter-item">
            <label>Filter Hari</label>
            <select value={selectedDay} onChange={e => setSelectedDay(e.target.value)}>
              {days.map(day => <option key={day} value={day}>{day}</option>)}
            </select>
          </div>
          <div className="filter-item">
            <label>Filter Ruangan</label>
            <select value={selectedRoom} onChange={e => setSelectedRoom(e.target.value)}>
              {uniqueRooms.map(room => <option key={room} value={room}>{room}</option>)}
            </select>
          </div>
          <div className="filter-item">
            <label>Filter Prodi</label>
            <select value={selectedProdi} onChange={e => setSelectedProdi(e.target.value)}>
              {uniqueProdis.map(prodi => <option key={prodi} value={prodi}>{prodi}</option>)}
            </select>
          </div>
          <div className="filter-item">
            <label>Filter Dosen</label>
            <select value={selectedDosen} onChange={e => setSelectedDosen(e.target.value)}>
              {uniqueDosens.map(dosen => <option key={dosen} value={dosen}>{dosen}</option>)}
            </select>
          </div>
          <div className="filter-item">
            <label>Filter Asisten</label>
            <select value={selectedAsisten} onChange={e => setSelectedAsisten(e.target.value)}>
              {uniqueAsistens.map(asisten => <option key={asisten} value={asisten}>{asisten}</option>)}
            </select>
          </div>
        </div>
        <div className="filter-item" style={{marginTop: '1rem'}}>
          <label>Cari Jadwal</label>
          <input
            type="text"
            placeholder="Cari dosen, matkul, ruangan, prodi, atau asisten..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Statistik */}
      <div className="statistik-section">
        <div className="statistik-card">
          <Calendar />
          <div>
            <p className="statistik-value">{filteredSchedules.length}</p>
            <p className="statistik-label">Total Jadwal</p>
          </div>
        </div>
        <div className="statistik-card">
          <User />
          <div>
            <p className="statistik-value">{new Set(filteredSchedules.map(s => s.dosen)).size}</p>
            <p className="statistik-label">Dosen Aktif</p>
          </div>
        </div>
        <div className="statistik-card">
          <MapPin />
          <div>
            <p className="statistik-value">{new Set(filteredSchedules.map(s => s.ruangan)).size}</p>
            <p className="statistik-label">Lab Digunakan</p>
          </div>
        </div>
        <div className="statistik-card">
          <Phone />
          <div>
            <p className="statistik-value">{filteredSchedules.filter(s => s.whatsapp).length}</p>
            <p className="statistik-label">Kontak WhatsApp</p>
          </div>
        </div>
      </div>

      {/* Schedule Cards */}
      <div className="schedule-grid">
        {filteredSchedules.map(schedule => (
          <div
            key={schedule.id}
            className={`schedule-card ${schedule.ruangan.replace(/ /g, "-")}`}
            onClick={() => handleWhatsAppBroadcast(schedule)}
          >
            <div className="schedule-card-inner">
              <div className="card-header">
                <h3 className="card-title">{schedule.matkul}</h3>
                <div className={`room-badge ${schedule.ruangan.replace(/ /g, "-")}`}>{schedule.ruangan}</div>
              </div>
              <div className="card-body">
                <div className="info-row">
                  <User /> {schedule.dosen}
                </div>
                <div className="info-row">
                  <Clock /> {schedule.jam} - {schedule.hari}
                </div>
                {schedule.asisten && (
                  <div className="info-row">
                    <Users /> {schedule.asisten}
                  </div>
                )}
                <div className="info-row">
                  <MapPin /> {schedule.prodi}
                </div>
                <div className="info-row">
                  {schedule.whatsapp ? (
                    <a
                      href={`https://wa.me/${schedule.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: '#10b981', fontSize: '12px', fontWeight: 600 }}
                    >
                      Klik untuk WhatsApp
                    </a>
                  ) : (
                    <span style={{ color: '#9ca3af', fontSize: '12px' }}>No WhatsApp</span>
                  )}
                  {schedule.kirimAsdos !== "Tidak ada" && (
                    <span className="asdos-badge">Ada Asdos</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredSchedules.length === 0 && (
        <div className="no-schedule">
          <BookOpen />
          <h3>Tidak ada jadwal ditemukan</h3>
          <p>Coba ubah filter atau kata kunci pencarian</p>
        </div>
      )}
    </div>
  );
};

export default LabScheduleCards;