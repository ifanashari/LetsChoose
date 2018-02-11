-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 09 Feb 2018 pada 10.59
-- Versi Server: 10.1.28-MariaDB
-- PHP Version: 7.1.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `letsbase`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `admin`
--

CREATE TABLE `admin` (
  `id_admin` varchar(25) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `admin`
--

INSERT INTO `admin` (`id_admin`, `username`, `password`, `email`) VALUES
('ByWt7KP0yF6bt9rhylOk', 'b', 'b', 'b@b'),
('CgLVZywwdRvHTl2sM556', 'AngAdmin', '123qwe123', 'anggerpenceng10cm@gmail.com'),
('ijAD4GwZutp4HaGjyQxD', 'b', 'b', 'b@b');

-- --------------------------------------------------------

--
-- Struktur dari tabel `calon`
--

CREATE TABLE `calon` (
  `id_calon` varchar(25) NOT NULL,
  `nama_calon` varchar(50) NOT NULL,
  `deskripsi` longtext NOT NULL,
  `riwayat_hidup` longtext NOT NULL,
  `poling` int(11) DEFAULT NULL,
  `photo` text NOT NULL,
  `p_tmp` text NOT NULL,
  `id_ruang` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `calon`
--

INSERT INTO `calon` (`id_calon`, `nama_calon`, `deskripsi`, `riwayat_hidup`, `poling`, `photo`, `p_tmp`, `id_ruang`) VALUES
('APxOloDzskTtwIx', 'Bapak Widodo S.Pd', 'lorem ipsum', 'lorem ipsum', NULL, '', '', '4MfPg2cDXMQyTgo'),
('eICEBtsIZBCPxKc', 'Bapak Prabowo SE', 'Belliau memiliki deskripsi yang panjang', 'Beliau seorang yang hebat', NULL, '', '', 'Eo6MUmPX5LAXeyl');

-- --------------------------------------------------------

--
-- Struktur dari tabel `peserta`
--

CREATE TABLE `peserta` (
  `id_user` varchar(25) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `peserta`
--

INSERT INTO `peserta` (`id_user`, `username`, `password`, `email`) VALUES
('DgqTW3XYFoFiqzlH9mEO', 'Angger Pratamadhita Wibawa', '123qwe123', 'anggerpenceng10cm@gmail.com'),
('Qf1UwLkbY2vYN7gYbobM', 'Ifan mau nyoblos', 'coblosyuk', 'ifan@coblos.poi.com'),
('SVG8Hb1KMGwlMuXsZlcK', 'Yuuki Yuuna chan', 'yuukichan', 'Yukki@gmail.com'),
('wlEq1HW46jzcITCVvRAh', 'coba saja', '123123123', 'Aiika@yahoo.com');

-- --------------------------------------------------------

--
-- Struktur dari tabel `ruang`
--

CREATE TABLE `ruang` (
  `id_ruang` varchar(15) NOT NULL,
  `token_ruang` varchar(20) NOT NULL,
  `judul_ruang` varchar(80) NOT NULL,
  `deskripsi` text NOT NULL,
  `id_admin` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `ruang`
--

INSERT INTO `ruang` (`id_ruang`, `token_ruang`, `judul_ruang`, `deskripsi`, `id_admin`) VALUES
('4MfPg2cDXMQyTgo', 'oIJ8gQKfg2FD', 'Pemilihan Presiden RI', 'Pemilihan secara sekala besar untuk mewujudkan indonesia merdeka', 'CgLVZywwdRvHTl2sM556'),
('Eo6MUmPX5LAXeyl', 'FobANlJFof1u', 'Pemilihan Wlikota Mojokerto', 'Menggunakan sistem online', 'CgLVZywwdRvHTl2sM556'),
('rYzehpLH2GPpXAR', 'rCFK79s0Lfkb', 'Pemilihan Ketua RT 03', 'Pemilihan di adakan pada tanggal 10 juli 2020', 'CgLVZywwdRvHTl2sM556');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id_admin`);

--
-- Indexes for table `calon`
--
ALTER TABLE `calon`
  ADD PRIMARY KEY (`id_calon`),
  ADD KEY `id_ruang` (`id_ruang`);

--
-- Indexes for table `peserta`
--
ALTER TABLE `peserta`
  ADD PRIMARY KEY (`id_user`);

--
-- Indexes for table `ruang`
--
ALTER TABLE `ruang`
  ADD PRIMARY KEY (`id_ruang`),
  ADD KEY `id_admin` (`id_admin`);

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `calon`
--
ALTER TABLE `calon`
  ADD CONSTRAINT `calon_ibfk_1` FOREIGN KEY (`id_ruang`) REFERENCES `ruang` (`id_ruang`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Ketidakleluasaan untuk tabel `ruang`
--
ALTER TABLE `ruang`
  ADD CONSTRAINT `ruang_ibfk_1` FOREIGN KEY (`id_admin`) REFERENCES `admin` (`id_admin`) ON DELETE CASCADE ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
