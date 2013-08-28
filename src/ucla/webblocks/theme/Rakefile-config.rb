require 'pathname'
rootdir = Pathname.new(__FILE__).realpath.parent.parent

WebBlocks.config[:build][:debug] = false

# The directory into which WebBlocks is built
WebBlocks.config[:build][:dir] = "#{rootdir}/theme/static/blocks"

# The directory where sources for the build are located
WebBlocks.config[:src][:dir] = "#{rootdir}/theme/blocks"
WebBlocks.config[:src][:core][:dir] = "#{rootdir}/WebBlocks/src/core"
WebBlocks.config[:src][:adapters][:dir] = "#{rootdir}/WebBlocks/src/adapter"
WebBlocks.config[:src][:extension][:dir] = "#{rootdir}/WebBlocks/src/extension"

WebBlocks.config[:src][:adapter] = false
WebBlocks.config[:src][:extensions] << 'ucla'
