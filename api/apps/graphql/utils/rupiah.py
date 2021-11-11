def rupiah_format(number, with_prefix=False):
    if with_prefix:
        return "Rp. " + '{:0,.0f}'.format(number)
    rupiah = '{:0,.0f}'.format(number)
    return rupiah
